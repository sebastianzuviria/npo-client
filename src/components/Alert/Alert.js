import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const MySwal = withReactContent(Swal);

export const confirmAlert = () => {
  return MySwal.fire({
    icon: 'warning',
    title: '¿Estas seguro?',
    showDenyButton: true,
    confirmButtonText: 'SI',
    denyButtonText: 'NO'
  });
};

export const successAlert = () => {
  return MySwal.fire({
    icon: 'success',
    showConfirmButton: false,
    timer: 2000
  });
};

export const cancelAlert = () => {
  return MySwal.fire({
    title: 'Cancelado',
    icon: 'error',
    showConfirmButton: false,
    timer: 2000
  });
};

export const errorAlert = () => {
  return MySwal.fire({
    title: 'Error, algo salió mal ',
    icon: 'error',
    showConfirmButton: false,
    timer: 2000
  });
};

export const infoAlert = (text) => {
  return MySwal.fire({ icon: 'info', text });
};
