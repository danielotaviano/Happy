import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { classToClass } from 'class-transformer';
import * as Yup from 'yup';
import Orphanage from '../../typeorm/entities/Orphanage';

export default class OrphanagesController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body;

    const orphanageRepository = getRepository(Orphanage);

    const requestImages = req.files as Express.Multer.File[];

    const orphanagesData = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images: requestImages.map(image => ({ path: image.filename })),
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        }),
      ),
    });

    await schema.validate(orphanagesData, {
      abortEarly: false,
    });

    const orphanage = orphanageRepository.create(orphanagesData);

    await orphanageRepository.save(orphanage);

    return res.status(201).json(classToClass(orphanage));
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const orphanageRepository = getRepository(Orphanage);

    const orphanages = await orphanageRepository.find({
      relations: ['images'],
    });

    return res.json(classToClass(orphanages));
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const orphanageRepository = getRepository(Orphanage);

    const orphanage = await orphanageRepository.findOneOrFail({
      where: { id },
      relations: ['images'],
    });

    return res.json(classToClass(orphanage));
  }
}
