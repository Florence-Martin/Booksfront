import axios, { AxiosError } from "axios";
import React, { FC, useEffect, useState } from "react";
import { BooksList } from "../Models/BookModel";

const VisitBookPage: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<BooksList[]>([]);
  const [error, setError] = useState<string | null>(null);
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "https://localhost:7256/";

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get<BooksList[]>(
          `${API_BASE_URL}api/Book`
        );
        setBooks(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;

          if (axiosError.response?.status === 404) {
            setError("Livre non trouvé.");
          } else {
            setError(
              "Une erreur s'est produite lors de la récupération des livres."
            );
          }
        } else {
          setError(
            "Une erreur s'est produite lors de la récupération des livres."
          );
        }
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks: BooksList[] = Array.isArray(books)
    ? books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        Consulter un livre
      </h1>
      <input
        type="text"
        placeholder="Rechercher par titre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="width-full border p-2 mb-4 rounded-lg shadow-2xl"
      />
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-2xl"
            >
              <div className="border-4 border-[#A30AD9] rounded-lg p-4">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-600">
                  Author: {book.authorName}
                </p>
                <p className="text-sm text-gray-600">
                  Description: {book.description}
                </p>
                <p className="text-sm text-gray-600">
                  Catégorie: {book.category}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Aucun livre trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default VisitBookPage;
