import React, { FormEvent, useCallback, useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import { FiPlus } from 'react-icons/fi';

import {
  Container,
  Main,
  CreateOrphanageForm,
  InputBlock,
  ButtonsSelect,
  ConfirmButton,
  NewImage,
  ButtonSelect,
  ImagesContainer,
  InputFile,
} from './styles';
import SideBar from '../../components/SideBar';
import happyMapIcon from '../../utils/mapIcon';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

interface Position {
  lat: number;
  lng: number;
}

const CreateOrphanage: React.FC = () => {
  const { push } = useHistory();
  const [position, setPosition] = useState<Position>();
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstrucitions] = useState('');
  const [opening_hours, setOpening_hours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    setPosition(event.latlng);
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const data = new FormData();

      data.append('name', name);
      data.append('about', about);
      data.append('instructions', instructions);
      data.append('opening_hours', opening_hours);
      data.append('latitude', String(position?.lat));
      data.append('longitude', String(position?.lng));
      data.append('open_on_weekends', String(open_on_weekends));
      images.forEach(image => {
        data.append('images', image);
      });

      await api.post('/orphanages', data);

      alert('Cadastro realizado com sucesso');

      push('/app');
    },
    [
      about,
      images,
      instructions,
      name,
      open_on_weekends,
      opening_hours,
      position,
      push,
    ],
  );
  const handleSelectedImages = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const selectedImages = Array.from(event.target.files);
        setImages(selectedImages);

        const selectedImagesPreview = selectedImages.map(image =>
          URL.createObjectURL(image),
        );

        setPreviewImages(selectedImagesPreview);
      }
    },
    [],
  );
  return (
    <Container>
      <SideBar />

      <Main>
        <CreateOrphanageForm onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-5.8326232, -35.203183]}
              style={{ width: '100%', height: 280 }}
              zoom={12}
              onClick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position && (
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[position?.lat, position?.lng]}
                />
              )}
            </Map>

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={e => setAbout(e.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <ImagesContainer>
                {previewImages.map(image => (
                  <img key={image} src={image} alt={name} />
                ))}
                <NewImage htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </NewImage>

                <InputFile
                  multiple
                  type="file"
                  onChange={handleSelectedImages}
                  id="image[]"
                />
              </ImagesContainer>
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={e => setInstrucitions(e.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Horario de funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={e => setOpening_hours(e.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <ButtonsSelect>
                <ButtonSelect
                  type="button"
                  selected={open_on_weekends}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </ButtonSelect>
                <ButtonSelect
                  type="button"
                  selected={!open_on_weekends}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </ButtonSelect>
              </ButtonsSelect>
            </InputBlock>
          </fieldset>

          <ConfirmButton type="submit">Confirmar</ConfirmButton>
        </CreateOrphanageForm>
      </Main>
    </Container>
  );
};

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;

export default CreateOrphanage;
