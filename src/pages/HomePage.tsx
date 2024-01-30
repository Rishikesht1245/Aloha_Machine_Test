import Categories from "../components/home/Categories";
import Guide from "../components/home/Guide";
import Hero from "../components/home/Hero";
import Highlights from "../components/home/Highlights";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full gap-[40px]">
      {/* Hero section */}
      <section className="w-full lg:h-[560px] sm:h-screen h-[480px]">
        <Hero />
      </section>
      {/* Highlights section */}
      <section className="section-container bg-white">
        <Highlights />
      </section>

      {/* Categories and guide section */}
      <section className="bg-[#E6F2f2] mt-10 pb-10">
        <div className="section-container flex flex-col sm:flex-row gap-[32px] py-[24px]">
          <Categories />
          <Guide />
        </div>
      </section>
    </div>
  );
};
export default HomePage;
