import React from "react";

function Card() {
  return (
    <div className="relative w-72 h-96 rounded-xl overflow-hidden shadow-lg">
      <img
        src="https://media.gettyimages.com/id/2175731619/fr/photo/san-francisco-california-stephen-curry-of-the-golden-state-warriors-poses-for-the-media.jpg?s=612x612&w=0&k=20&c=-OJwE709ujy2eb54uc4gBFjITMJnflA4mA2YZf60l1Q="
        alt="Profile"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-xl font-bold">Stephen Curry</h2>
        <p className="text-sm text-gray-300 mt-1 w-[90%]">
          NBA Player | Point Guard | Greatest Shooter
        </p>
        <a
          href="https://x.com/StephenCurry30"
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
