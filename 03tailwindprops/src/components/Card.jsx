import React from "react";

function Card({ name, description, image, profileLink }) {
  return (
    <div className="relative w-72 h-96 rounded-xl overflow-hidden shadow-lg m-4">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-300 mt-1 w-[90%]">{description}</p>
        <a
          href={profileLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm font-semibold hover:underline"
        >
          View Profile →
        </a>
      </div>
    </div>
  );
}

export default Card;
