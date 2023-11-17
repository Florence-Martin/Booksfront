import React, { FC } from "react";

export interface CategoryCardProps {
  imagePath: string;
  buttonText: string;
  buttonIcon: JSX.Element;
}

const CategoryCard: FC<CategoryCardProps> = ({ imagePath, buttonText, buttonIcon }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-2xl md:flex max-w-[250px] mx-auto mt-12 p-2 sm:p-4">
      <img
        src={imagePath}
        alt="Image"
        className="md:h-auto object-cover object-top rounded-lg md:rounded-l-lg w-full md:w-auto"
      />
      <button className="absolute -right-4 -top-4">
        <button
        //   onClick={handleClick}
          className="inline-flex items-end bg-[#A30AD9] hover:bg-[#C10FFF] text-white px-4 py-2 inline-block rounded"
        >
          {buttonText}
          {buttonIcon}
        </button>
      </button>
    </div>
  );
};

export default CategoryCard;
