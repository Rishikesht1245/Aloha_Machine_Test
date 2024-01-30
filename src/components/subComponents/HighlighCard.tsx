import { Link } from "react-router-dom";
import { Highlights } from "../../interfaces/data";

const HighlightCard = ({ highlight }: { highlight: Highlights }) => {
  return (
    <div className="group bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg w-full sm:w-[368px] h-full sm:h-[340px] p-0">
      <div className="flex flex-col gap-4">
        <img
          src={highlight?.image}
          alt={highlight?.alt}
          className="h-[170px] w-full object-cover group-hover:scale-105 transition-scale duration-300"
        />
        <div className="flex flex-col gap-2 w-full tracking-wide p-[24px]">
          <div className="flex flex-col gap-1 w-[85%]">
            <h5 className="text-primary">{highlight?.type}</h5>
            <p>{highlight?.description}</p>
          </div>
          {/* Link arrow */}
          <div className="flex justify-end w-full">
            <Link
              to={`/highlights/${highlight?.id}`}
              className="rounded-full w-[40px] h-[40px] bg-[#E6F2f2] flex items-center justify-center"
            >
              <i className="fa-solid fa-arrow-right text-primary hover:translate-x-1 transition-all duration-300"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HighlightCard;
