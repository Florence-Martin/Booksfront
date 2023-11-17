import React, { FC } from "react";
import { PlusCircle } from 'react-feather';

export interface CategoryCardProps {
  imagePath: string;
  buttonText: string;
  isFirstCard: boolean;
}

const CategoryCard: FC<CategoryCardProps> = ({ imagePath, buttonText, isFirstCard }) => {
    return (
        <div className={`relative ${isFirstCard ? 'mt-6' : 'mt-16'}`}>
          {isFirstCard && (
            <div className="flex justify-center items-center mb-2">
              <h1 className="mr-2 uppercase font-bold">Catégorie</h1>
              <PlusCircle className="h-8 w-8 text-[#A30AD9]" />
            </div>
          )}
          <div className={`relative bg-white rounded-lg shadow-2xl md:flex ${isFirstCard ? 'max-w-[250px]' : 'w-[250px]'} mx-auto p-2 sm:p-4`}>
            <img
              src={imagePath}
              alt="Image"
              className="md:h-[250px] object-cover rounded-lg md:rounded-l-lg w-full"
            />
            <div className="absolute mt-8 -right-6">
              <button
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