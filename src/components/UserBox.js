import React from "react";

const UserBox = () => {
  return (
    <div className="flex justify-between absolute md:relative bottom-0 items-end md:justify-between md:w-full md:items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-1 transform transition-colors duration-200">
      <img
        className="w-10 h-10 sm:w-11 rounded-full"
        src="https://pbs.twimg.com/profile_images/1546902964597661696/IxY9Fslh_400x400.jpg"
        alt="profile"
      ></img>
      <div className="flex flex-col ml-1 md:ml-0">
        <span className="font-bold text-sm md:text-md text-black">Merve yıldız</span>
        <span className="text-sm text-gray-dark">@merveyyildiz</span>
      </div>
      <div className="hidden md:flex space-x-1">
        <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
      </div>
    </div>
  );
};

export default UserBox;
