import styled from 'styled-components';

interface ButtonSelectProps {
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.div`
  flex: 1;
`;

export const CreateOrphanageForm = styled.form`
  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

  fieldset {
    border: 0;

    & + fieldset {
      margin-top: 80px;
    }
    legend {
      width: 100%;

      font-size: 32px;
      line-height: 34px;
      color: #5c8599;
      font-weight: 700;

      border-bottom: 1px solid #d3e2e5;
      margin-bottom: 40px;
      padding-bottom: 24px;
    }
  }

  .leaflet-container {
    margin-bottom: 40px;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
  }
`;

export const InputBlock = styled.div`
  & + & {
    margin-top: 24px;
  }

  label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
    span {
      font-size: 14px;
      color: #8fa7b3;
      margin-left: 24px;
      line-height: 24px;
    }
  }
  input,
  textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
  }
  input {
    height: 64px;
    padding: 0 16px;
  }

  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 16px;

  img {
    width: 100%;
    height: 96px;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const NewImage = styled.label`
  height: 96px;
  background: #f5f8fa;
  border: 1px dashed #96d2f0;
  border-radius: 20px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputFile = styled.input`
  display: none;
`;

export const ButtonsSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  button {
  }
`;

export const ButtonSelect = styled.button<ButtonSelectProps>`
  height: 64px;
  background: ${({ selected }) => (selected ? '#edfff6' : '#f5f8fa')};
  border: 1px solid ${({ selected }) => (selected ? '#a1e9c5' : '#d3e2e5')};
  color: ${({ selected }) => (selected ? '#37c77f' : '#5c8599')};
  cursor: pointer;
  &:first-child {
    border-radius: 20px 0px 0px 20px;
  }
  &:last-child {
    border-radius: 0 20px 20px 0;
    border-left: 0;
  }
  transition: 0.2s;
`;

export const ConfirmButton = styled.button`
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
