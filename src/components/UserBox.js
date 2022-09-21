import React from "react";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
      <img
        className="w-11 h-11 rounded-full"
        src="https://pbs.twimg.com/profile_images/1546902964597661696/IxY9Fslh_400x400.jpg"
        alt="profile"
      ></img>
      <div className="flex flex-col">
        <span className="font-bold text-md text-black">Merve yıldız</span>
        <span className="text-sm text-gray-dark">@merveyyildiz</span>
      </div>
      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
      </div>
    </div>
  );
};

export default UserBox;
