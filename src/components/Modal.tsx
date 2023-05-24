type ModalProps = {
  setModal(v: boolean): void;
  video?: {
    src: string;
    name: string;
  };
};

const Modal = ({ video, setModal }: ModalProps) => {
  function closeModal(event: React.MouseEvent) {
    if (event.target === event.currentTarget) setModal(false);
  }

  return (
    <div
      className="w-full h-full backdrop-blur-sm overflow-hidden z-30 fixed flex items-center justify-center"
      onClick={closeModal}
    >
      <div className="top-[18%] w-[95%] h-1/2 sm:w-[720px] sm:h-[540px]">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video?.src}?rel=1&autoplay=1&controls=1&showinfo=0`}
          title={video?.name}
          allowFullScreen
          allow="autoplay;encrypted-media"
        />
      </div>
    </div>
  );
};

export default Modal;
