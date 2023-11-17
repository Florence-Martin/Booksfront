import React, { FC } from "react";
import BookCard,{ BookCardProps }  from "./BookCard";
import CategoryCard, { CategoryCardProps } from "./CategoryCard";

interface HomeProps {
  cardsData: BookCardProps[];
  categoryCardsData: CategoryCardProps[];
}

const Home: FC<HomeProps> = ({ cardsData, categoryCardsData }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-8 place-content-center">
        {cardsData.map((card, index) => (
          <BookCard key={index} {...card} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-8 place-content-center">
        {categoryCardsData.map((card, index) => (
          <CategoryCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Home;
