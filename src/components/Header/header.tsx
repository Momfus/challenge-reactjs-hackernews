import React from "react";
import "./header.css";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-3 md:p-6  mx-auto">
      <h1 className="font-serif text-2xl md:text-4xl">{title}</h1>
      <div className="flex flex-col md:flex-row items-center md:ml-4">
        <p className="text-sm font-roboto mb-0 md:mr-2">Made By</p>
        <a
          href="https://github.com/Momfus"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <button className="text-red-500 font-roboto ml-1" type="button">
            @Momfus
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
