import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { StyledModal, Form } from './styles';

const mapToProps = state => ({ isOpen: state.modal.isOpen });
const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapToProps,
  mapDispatchToProps,
)(({ isOpen, toggleModal }) => {
  const [opacity, setOpacity] = useState(0);

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1);
    });
  };

  const beforeClose = () => new Promise((resolve) => {
    setOpacity(0);
    setTimeout(resolve, 200);
  });

  const handleToogle = (e) => {
    e.preventDefault();
    toggleModal();
  };

  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={() => toggleModal()}
        onEscapeKeydown={() => toggleModal()}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <Form>
          <h3>Adicionar novo usuário</h3>
          <input type="text" placeholder="Usuário do Github" />
          <div>
            <button type="submit" className="cancel" onClick={handleToogle}>
              Cancelar
            </button>
            <button type="submit" className="save">
              Salvar
            </button>
          </div>
        </Form>
      </StyledModal>
    </div>
  );
});
