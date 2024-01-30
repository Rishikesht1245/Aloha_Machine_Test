import { guide } from "../../assets/images";
import Button from "../UI/Button";

const GuideCard = () => {
  return (
    <div className="flex justify-between p-[24px] bg-white md:max-w-[560px] w-full h-[176px]">
      <div className="flex flex-col justify-between">
        <div>
          <h5 className="text-secondary">Hadwin Malone</h5>
          <p>Guide since 2012</p>
        </div>{" "}
        <Button
          type="button"
          className="bg-white border border-primary w-[107px] h-[40px] text-primary hover:bg-primary hover:text-white"
        >
          Contact
        </Button>{" "}
      </div>
      <img
        src={guide}
        alt="Guide image"
        className="sm:w-[128px] sm:h-[128px] w-[74px] h-[74px] rounded-full"
      />
    </div>
  );
};
export default GuideCard;
