import React, { FC } from "react";

export interface BookCardProps {
  imagePath: string;
  buttonText: string;
  buttonIcon: JSX.Element;
  onClick: () => void;
}

const BookCard: FC<BookCardProps> = ({
  imagePath,
  buttonText,
  buttonIcon,
  onClick,
}) => {
  return (
    <div className="relative bg-white rounded-lg shadow-2xl md:flex max-w-[250px] mx-auto mt-12 p-2 sm:p-4">
      <img
        src={imagePath}
        alt="CardImage"
        className="md:h-auto object-cover object-top rounded-lg md:rounded-l-lg w-full md:w-auto"
      />
      <div className="absolute -right-4 -top-4 justify-center min-w-[100px]">
        <button
          onClick={onClick}
          className="flex items-center justify-center  bg-[#A30AD9] hover:bg-[#C10FFF] text-white px-4 py-2 inline-block rounded"
        >
          <span className="mr-1">{buttonText}</span>
          {buttonIcon}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
