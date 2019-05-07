import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
`;

export const StyledModal = Modal.styled`
  width: 20rem;
  height: 11rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  opacity: ${props => props.opacity};
  transition: opacity ease 500ms;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;

  h3 {
    font-weight: bold;
  }

  input {
    /* flex: 1; */
    height: 40px;
    width: 300px;
    padding: 0 20px;
    background: #fff;
    font-size: 14px;
    color: #444;
    border-radius: 3px;
    border: ${props => (props.withError ? '2px solid #F00' : '2px solid #ccc')};
  }

  div {
    display: flex;
    justify-content: center;
    width: 100%;

    button {
      width: 100%;
      height: 40px;
      /* padding: 0 20px; */
      border: 0;
      font-size: 14px;
      color: #fff;
      font-weight: bold;
      border-radius: 3px;
    }

    button.save {
      margin-left: 5px;
      background: #4CAF50

    &:hover {
        background: #9c27b0;
      }
    }

    button.cancel {
      margin-right: 5px;
      background: #9E9E9E

    &:hover {
        background: #9c27b0;
      }
    }
  }
`;

// /**
//  *
//  * <h1>Adicionar novo usuário</h1>
//  <input type="text" />
//  <div>
//    <button type="submit" onClick={handleToogle}>
//      Cancelar
//    </button>
//    <button type="submit">Salvar</button>
//  </div>
//  /*
