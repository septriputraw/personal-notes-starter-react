import Swal from 'sweetalert2';

const handleClick = ({ title, text, icon }) => {
  Swal.fire({
    title,
    text,
    icon,
    showConfirmButton: false,
    timer: 2000,
  });
};

const handleClickConfirm = (
  item,
  action,
  type,
  title,
  text,
  icon,
  confirmButtonText,
) => {
  Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: '#45f',
    cancelButtonColor: '#a3f',
    confirmButtonText,
  }).then((result) => {
    if (type === 'delete') {
      if (result.isConfirmed) {
        action((notes) => notes.filter((note) => note.id !== item));
        Swal.fire('Dihapus!', 'Catatan telah dihapus.', 'success');
      }
    } else if (type === 'archive' || type === 'unarchive') {
      if (result.isConfirmed) {
        action((notes) => notes.map((note) => {
          if (note.id === item) {
            return { ...note, archived: !note.archived };
          }
          return note;
        }));
        if (type === 'archive') {
          Swal.fire('Diarsipkan!', 'Catatan telah diarsipkan.', 'success');
        } else {
          Swal.fire('Dikembalikan!', 'Catatan telah dikembalikan.', 'success');
        }
      }
    }
  });
};

export { handleClick, handleClickConfirm };
