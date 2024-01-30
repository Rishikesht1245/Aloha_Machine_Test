import { heroBg } from "../../assets/images";
const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        backgroundRepeat: "no-repeat",
      }}
      className="flex items-center justify-center md:p-0 p-[24px]"
    >
      <div className="max-w-[724px] w-full 2xl:mt-[176px] mt-[120px]">
        <h1 className="text-white text-center">
          <span className="text-white/[0.6]">Welcome</span> <br /> to Hawaii
        </h1>
      </div>
    </div>
  );
};
export default Hero;
