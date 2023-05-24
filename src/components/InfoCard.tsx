type InfoCardProps = {
  bg?: "play" | "default"
  setModal?(v: boolean): void
  label?: string
  value?: string
  video?: {
    src: string
    name: string
  }
}

const InfoCard = ({
  bg = "default",
  label,
  value,
  video,
  setModal,
}: InfoCardProps) => {
  return bg === "play" ? (
    <div
      className="info-card play bg-aux overflow-hidden relative hover:cursor-pointer"
      onClick={() => setModal && setModal(true)}
    >
      <div className="bg-aux/30 w-full h-full material-symbols-outlined z-10 absolute flex items-center justify-center text-8xl">
        play_arrow
      </div>
      <iframe
        width="200%"
        height="200%"
        src={`https://www.youtube.com/embed/${video?.src}?loop=1;rel=0&autoplay=1&controls=1&showinfo=0&mute=1`}
        title={video?.name}
        allowFullScreen
        allow="autoplay;encrypted-media"
      />
    </div>
  ) : (
    <div className="info-card flex-col items-center bg-contrast">
      <p className="font-medium">{label}</p>
      <div className="flex flex-1 items-center justify-center">
        <p className="font-display text-4xl text-indigo-300">{value}</p>
      </div>
    </div>
  )
}

export default InfoCard
