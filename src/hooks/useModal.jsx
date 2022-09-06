import { useState } from 'react';

const useModal = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return {
    toggle, show,
  };
}

export default useModal;
