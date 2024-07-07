import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setIsOpen(true);
    setModalType(type);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalType(null);
  };

  const toggleModal = (type) => {
    if (isOpen && modalType === type) {
      closeModal();
    } else {
      openModal(type);
    }
  };

  return {
    isOpen,
    modalType,
    openModal,
    closeModal,
    toggleModal,
  };
};

export default useModal;
