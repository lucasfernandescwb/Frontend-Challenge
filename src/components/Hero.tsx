type HeroProps = {
  url: string;
};

const Hero = ({ url }: HeroProps) => {
  return (
    <div className="w-full overflow-hidden h-[28rem] relative mb-4">
      <img src={url} alt="Poster" />

      <div className="hero-bg w-full h-full absolute bottom-0 left-0"></div>
    </div>
  );
};

export default Hero;
