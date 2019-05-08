import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as UserActions } from '../../store/ducks/users';
import { StyledModal, Form } from './styles';

const mapToProps = state => ({
  isOpen: state.modal.isOpen,
  coordenadas: state.searchUser,
});
const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...UserActions }, dispatch);

export default connect(
  mapToProps,
  mapDispatchToProps,
)((props) => {
  const [opacity, setOpacity] = useState(0);
  const [user, setUser] = useState('');

  const {
    isOpen, toggleModal, coordenadas, addUserRequest, loading,
  } = props;

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return;

    if (!user) return;
    addUserRequest({ ...coordenadas, user });
    setUser('');
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
        <Form onSubmit={handleSubmit}>
          <h3>Adicionar novo usuário</h3>
          <input
            type="text"
            placeholder="Usuário do Github"
            value={user}
            onChange={e => setUser(e.target.value)}
          />
          <div>
            <button type="submit" className="cancel" onClick={handleToogle}>
              Cancelar
            </button>
            <button type="submit" className="save">
              {loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
            </button>
          </div>
        </Form>
      </StyledModal>
    </div>
  );
});
