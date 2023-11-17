import React, { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PlusCircle, BookOpen, RefreshCw } from "react-feather";
import imageBanner from "./assets/image-banner.png";
import imageAdd from "./assets/image-book.png";
import imageRead from "./assets/image-consulting.jpg";
import imageUpdate from "./assets/image-update.jpg";
import imageRoman from "./assets/image-romance.jpg";
import imagePolar from "./assets/image-police.jpg";
import imageBd from "./assets/image-comic.jpg";
import imageTheater from "./assets/image-theater.jpg";
import imagePoem from "./assets/image-poem.jpg";
import AllCardsPage from "./pages/AllCardsPage";
import NavBar from "./components/NavBar";
import { BookCardProps } from "./components/BookCard";
import { CategoryCardProps } from "./components/CategoryCard";

const App: FC = () => {
  const cardsData: BookCardProps[] = [
    {
      imagePath: imageAdd,
      buttonText: "Ajouter",
      buttonIcon: <PlusCircle className="h-5 w-5 ml-2" />,
    },
    {
      imagePath: imageRead,
      buttonText: "Consulter",
      buttonIcon: <BookOpen className="h-5 w-5 ml-2" />,
    },
    {
      imagePath: imageUpdate,
      buttonText: "Modifier",
      buttonIcon: <RefreshCw className="h-5 w-5 ml-2" />,
    },
  ];

  const categoryCardsData: CategoryCardProps[] = [
    {
      imagePath: imageRoman,
      buttonText: "Roman",
      isFirstCard: true,
    },
    {
      imagePath: imagePolar,
      buttonText: "Polar",
      isFirstCard: false,
    },
    {
      imagePath: imageBd,
      buttonText: "BD",
      isFirstCard: false,
    },
    {
      imagePath: imageTheater,
      buttonText: "Théartre",
      isFirstCard: false,
    },
    {
      imagePath: imagePoem,
      buttonText: "Poésie",
      isFirstCard: false,
    },
  ];

  return (
    <Router>
      <div>
        <NavBar imageSrcPath={imageBanner} />
        <Routes>
          <Route path="/" element={<AllCardsPage cardsData={cardsData} categoryCardsData={categoryCardsData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
