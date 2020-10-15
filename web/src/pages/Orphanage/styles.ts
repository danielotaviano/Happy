import styled from 'styled-components';

interface PhotoButtonProps {
  active?: boolean;
}

interface OpenOnWeekendsProps {
  open?: boolean;
}

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Main = styled.div`
  flex: 1;
`;

export const OrphanageDetails = styled.div`
  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  overflow: hidden;
  > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

export const PhotoButton = styled.button<PhotoButtonProps>`
  border: 0;
  height: 88px;
  background: none;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  outline: none;

  opacity: ${props => (props.active ? 1 : 0.6)};
  img {
    width: 100%;
    height: 88px;
    object-fit: cover;
  }
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 16px;

  margin: 16px 40px 0;
`;

export const OrphanageDetailsContent = styled.div`
  padding: 80px;

  h1 {
    color: #4d6f80;
    font-size: 54px;
    line-height: 54px;
    margin-bottom: 8px;
  }
  p {
    line-height: 28px;
    color: #5c8599;
    margin-top: 24px;
  }

  hr {
    width: 100%;
    height: 1px;
    border: 0;
    background: #d3e2e6;
    margin: 64px 0;
  }

  h2 {
    font-size: 36px;
    line-height: 46px;
    color: #4d6f80;
  }
`;

export const MapContainer = styled.div`
  margin-top: 64px;
  background: #e6f7fb;
  border: 1px solid #b3dae2;
  border-radius: 20px;
  footer {
    padding: 20px 0;
    text-align: center;
    a {
      line-height: 24px;
      color: #0089a5;
      text-decoration: none;
    }
  }
  .leaflet-container {
    border-bottom: 1px solid #dde3f0;
    border-radius: 20px;
  }
`;

export const OpenDetails = styled.div`
  margin-top: 24px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  div {
    padding: 32px 24px;
    border-radius: 20px;
    line-height: 28px;
    svg {
      display: block;
      margin-bottom: 20px;
    }
  }
`;

export const Hour = styled.div`
  background: linear-gradient(149.97deg, #e6f7fb 8.13%, #ffffff 92.67%);
  border: 1px solid #b3dae2;
  color: #5c8599;
`;

export const OpenOnWeekends = styled.div<OpenOnWeekendsProps>`
  background: ${({ open }) =>
    open
      ? 'linear-gradient(154.16deg, "#edfff6" 7.85%, "#ffffff" 91.03%)'
      : 'linear-gradient(154.16deg, "#fdf0f5 "7.85%, "#ffffff" 91.03%)'};
  border: 1px solid ${({ open }) => (open ? '#a1e9c5' : '#ffbcd4')};
  color: ${({ open }) => (open ? '#37c77f' : '#FF669D')};
`;

export const ContactButton = styled.button`
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3cdc8c;
  border-radius: 20px;
  color: #ffffff;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;
  svg {
    margin-right: 16px;
  }

  &:hover {
    background: #36cf82;
  }
`;

// .orphanage-details .images button.active {
//   opacity: 1;
// }
