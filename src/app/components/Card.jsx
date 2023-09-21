// components/Card.js
'use client'
import React, { useState } from 'react';

const Card = ({ title, description, imageUrl, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-lg ${isHovered ? 'hover:shadow-xl' : ''
        } transition duration-500 ease-in-out relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card content */}
      <div className="p-6">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            className="rounded-t-lg w-20 justify-self-stretch mx-auto mb-4"
            src={imageUrl}
            alt={title}
          />
        </a>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute top-2 right-2 w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center transition duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
