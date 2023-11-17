import React, { FC } from "react";
import { PlusCircle } from "react-feather";
import { useNavigate } from 'react-router-dom';

export interface CategoryCardProps {
  imagePath: string;
  buttonText: string;
  isFirstCard: boolean;
  onClick: () => void;
}

const CategoryCard: FC<CategoryCardProps> = ({
  imagePath,
  buttonText,
  isFirstCard,
  onClick,
}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add-category');
  };

  return (
    <div className={`relative ${isFirstCard ? "mt-6" : "mt-16"}`}>
      {isFirstCard && (
        <div className="flex justify-center items-center mb-2">
          <h1 className="mr-2 uppercase font-bold">Catégorie</h1>
          <button onClick={handleClick}>
            <PlusCircle className="h-8 w-8 text-[#A30AD9]" />
          </button>
        </div>
      )}
      <div
        className={`relative bg-white rounded-lg shadow-2xl md:flex ${
          isFirstCard ? "max-w-[250px]" : "w-[250px]"
        } mx-auto p-2 sm:p-4`}
      >
        <img
          src={imagePath}
          alt="CardImage"
          className="md:h-[250px] object-cover rounded-lg md:rounded-l-lg w-full"
        />
        <div className="absolute mt-8 -right-6">
          <button
            onClick={onClick}
            className="inline-flex w-24 justify-center items-end bg-[#A30AD9] hover:bg-[#C10FFF] text-white px-4 py-2 rounded"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
