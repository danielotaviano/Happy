import React, { useCallback, useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';

import {
  Container,
  Main,
  OrphanageDetails,
  OrphanageDetailsContent,
  MapContainer,
  OpenDetails,
  Hour,
  OpenOnWeekends,
  ContactButton,
  Images,
  PhotoButton,
} from './styles';
import SideBar from '../../components/SideBar';
import happyMapIcon from '../../utils/mapIcon';
import api from '../../services/api';

interface IOrphanage {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: false;
  images: Array<{
    id: string;
    path: string;
    orphanage_id: string;
    url: string;
  }>;
}

interface IRequest {
  id: string;
}

const Orphanage: React.FC = () => {
  const { id } = useParams<IRequest>();
  const [orphanage, setOrphanage] = useState<IOrphanage>();
  const [activeImage, setActiveImage] = useState<string>();

  const handleImage = useCallback((image_url: string) => {
    setActiveImage(image_url);
  }, []);

  useEffect(() => {
    async function fetchApi() {
      const { data } = await api.get(`/orphanages/${id}`);

      setOrphanage(data);
    }
    fetchApi();
  }, [id]);

  useEffect(() => {
    setActiveImage(orphanage?.images[0].url);
  }, [orphanage]);

  if (!orphanage) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Container>
      <SideBar />
      <Main>
        <OrphanageDetails>
          <img src={activeImage} alt="Lar das meninas" />

          <Images>
            {orphanage.images.map(image => {
              return (
                <PhotoButton
                  key={image.id}
                  active={activeImage === image.url}
                  onClick={() => {
                    handleImage(image.url);
                  }}
                  type="button"
                >
                  <img src={image.url} alt={orphanage.name} />
                </PhotoButton>
              );
            })}
          </Images>

          <OrphanageDetailsContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetails>
              <Hour>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </Hour>
              {orphanage.open_on_weekends ? (
                <OpenOnWeekends open>
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </OpenOnWeekends>
              ) : (
                <OpenOnWeekends open={false}>
                  <FiInfo size={32} color="#FF669D" />
                  Não Atendemos <br />
                  fim de semana
                </OpenOnWeekends>
              )}
            </OpenDetails>

            <ContactButton type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </ContactButton>
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </Main>
    </Container>
  );
};

export default Orphanage;
