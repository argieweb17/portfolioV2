import React from "react";

interface Props {
  title: string;
  description: string;
}

const Header = ({ title, description }: Props) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="text-gray-400 my-3 text-center">
        {description}
      </p>
    </div>
  );
};

export default Header;
