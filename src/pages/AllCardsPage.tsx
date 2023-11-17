import React, { FC } from "react";
import BookCard, { BookCardProps } from "../components/BookCard";
import CategoryCard, { CategoryCardProps } from "../components/CategoryCard";
import { useNavigate } from "react-router-dom";

interface AllCardsPageProps {
  cardsData: BookCardProps[];
  categoryCardsData: CategoryCardProps[];
}

const AllCardsPage: FC<AllCardsPageProps> = ({
  cardsData,
  categoryCardsData,
}) => {
  const navigate = useNavigate();

  return (
    <div className="box-content h-full w-full p-4 border-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-content-center">
        {cardsData.map((card, index) => (
          <BookCard key={index} {...card} onClick={card.onClick} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-content-center mt-20">
        {categoryCardsData.map((card, index) => (
          <CategoryCard key={index} {...card} isFirstCard={index === 0} onClick={card.onClick}/>
        ))}
      </div>
    </div>
  );
};

export default AllCardsPage;
