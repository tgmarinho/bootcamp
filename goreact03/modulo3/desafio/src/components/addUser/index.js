import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const AddUser = () => (
  <div>
    <Modal
      isOpen={false}
      // onAfterOpen={this.afterOpenModal}
      // onRequestClose={this.closeModal}
      contentLabel="Adicionar Usuário"
    >
      <form action="">
        <h1>Adicionar novo usuário</h1>
        <input type="text" />
        <div>
          <button>Cancelar</button>
          <button>Salvar</button>
        </div>
      </form>
    </Modal>
  </div>
);

export default AddUser;
