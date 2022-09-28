import React, { useState } from "react";
import {
  TwitterIcon,
  ExploreIcon,
  HomeIcon,
  MessagesIcon,
  MoreIcon,
  NotificationIcon,
  ProfileIcon,
  TweetIcon,
} from "../assets/icons/icon";
import SideLink from "../components/SideLink";
import UserBox from "../components/UserBox";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notification",
    icon: NotificationIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
 
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

const Sidebar = () => {
  const [active, setActive] = useState("Home");

  const handleMenuItemClick = (activeItem) => {
    setActive(activeItem);
  }
  return (
    <div className="h-screen w-44 2xl:w-72 sticky top-0 flex flex-col items-end 2xl:items-start pr-5 justify-between px-2">
      <div>
        <div className="mt-1 mb-4  2xl:ml-1 flex w-full h-12  2xl:w-12 justify-center items-center rounded-full hover:bg-gray-extraLight transform transition-colors duration-200">
          <TwitterIcon />
        </div>
       
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon}) => (
                <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick}/>
            ))}
          </ul>
        </nav>

        <button className="hidden 2xl:block bg-primary-base text-wthite rounded-full py-3 px-8 w-11/12 shadow-lg hover:bg-primary-dark transform transition-colors duration-200">Tweet</button>
        <div className="flex justify-center ">
          <div className="flex items-center 2xl:hidden justify-center rounded-full p-3 bg-primary-base">
            <TweetIcon className="w-7 h-7 text-white"/>
          </div>
        </div>
      </div>
      
      <UserBox />
    </div>
  );
};
export default Sidebar;
