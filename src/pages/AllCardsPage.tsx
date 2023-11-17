import React, { FC } from "react";
import BookCard, { BookCardProps } from "../components/BookCard";
import CategoryCard, { CategoryCardProps } from "../components/CategoryCard";

interface AllCardsPageProps {
  cardsData: BookCardProps[];
  categoryCardsData: CategoryCardProps[];
}

const AllCardsPage: FC<AllCardsPageProps> = ({
  cardsData,
  categoryCardsData,
}) => {
  return (
    <div className="box-content h-full w-full p-4 border-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-content-center">
        {cardsData.map((card, index) => (
          <BookCard key={index} {...card} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-content-center">
        {categoryCardsData.map((card, index) => (
          <CategoryCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default AllCardsPage;
