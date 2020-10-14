import React from 'react';

import { FiPlus, FiArrowRight } from 'react-icons/fi';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import {
  Container,
  SideBar,
  SideHeader,
  SideFooter,
  CreateOrphanage,
} from './styles';

import mapMarketImg from '../../assets/map-marker.svg';
import { Link } from 'react-router-dom';
import happyMapIcon from '../../utils/mapIcon';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <SideHeader>
          <img src={mapMarketImg} alt="" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </SideHeader>
        <SideFooter>
          <strong>Natal</strong>
          <span>Rio Grande do Norte</span>
        </SideFooter>
      </SideBar>
      <Map
        center={[-5.7997439, -35.2922842]}
        zoom={12}
        style={{ width: '100%', height: '100%', zIndex: 5 }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker icon={happyMapIcon} position={[-5.8796544, -35.2406986]}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar das meninas
            <Link to="/orphanage/1">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <CreateOrphanage to="/orphanage/create">
        <FiPlus size={32} color="#fff" />
      </CreateOrphanage>
    </Container>
  );
};

export default OrphanagesMap;
