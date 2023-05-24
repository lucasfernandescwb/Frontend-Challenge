const Loader = ({ show }: { show: boolean }) => {
  return show ? (
    <div className="h-[60vh] flex items-center justify-center">
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  ) : null;
};

export default Loader;
