import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../../assets/map-marker.svg';

import { Aside } from './styles';

const SideBar: React.FC = () => {
  const { goBack } = useHistory();
  return (
    <Aside>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </Aside>
  );
};

export default SideBar;
