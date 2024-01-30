import { Link } from "react-router-dom";
import { Categories } from "../../interfaces/data";

const CategoryCard = ({ category }: { category: Categories }) => {
  return (
    <div className="flex justify-between items-center sm:w-[544px] h-[68px] bg-white p-[24px] rounded-[8px] hover:shadow-md">
      <p>{category?.name}</p>
      <Link to={`/highlights/${category?.link}`}>
        <i className="fa-solid fa-arrow-right text-primary hover:translate-x-1 transition-all duration-300"></i>
      </Link>
    </div>
  );
};
export default CategoryCard;
