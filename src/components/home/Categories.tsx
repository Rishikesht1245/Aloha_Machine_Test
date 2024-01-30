import { categories } from "../../data/categories";
import CategoryCard from "../subComponents/CategoryCard";

const Categories = () => {
  return (
    <div className="w-full flex flex-col gap-[16px]">
      <h6>Categories</h6>
      <div className="flex flex-col gap-[8px]">
        {categories &&
          categories?.map((category) => <CategoryCard category={category} />)}
      </div>
    </div>
  );
};
export default Categories;
