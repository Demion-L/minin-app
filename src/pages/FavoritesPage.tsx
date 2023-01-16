import React from "react";
import { useAppSelector } from "../hooks/redux";

export default function FavoritesPage() {
  const { favourites } = useAppSelector((state) => state.github);
  if (favourites.length === 0) {
    return <p className='text-center'>No items.</p>;
  }

  return (
    <ul>
      {favourites.map((f) => (
        <li key={f}>
          <a href={f} target='_blank'>
            {f}
          </a>
        </li>
      ))}
    </ul>
  );
}
