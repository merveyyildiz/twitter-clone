import React from "react";
import { SearchIcon } from "../assets/icons/icon";
import { Timeline } from "react-twitter-widgets";

const Widgets = () => {
  return (
    <aside className="hidden md:block w-4/12 pl-12 pr-16">
      <div className="flex items-center space-x-4 p-3 my-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
        <SearchIcon className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="placeholder-gray-dark bg-transparent outline-none w-full text-sm focus:outline-none"
        />
      </div>
      <div className="mt-5 ">
      <Timeline
        dataSource={{
            sourceType: 'profile',
            screenName: 'reactjs'
        }}
        options={{
            height: '1000'
        }}
        />
      </div>
    </aside>
  );
};

export default Widgets;
