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
  CloseIcon,
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

const Sidebar = ({ className, handleClick }) => {
  const [active, setActive] = useState("Home");

  const handleMenuItemClick = (activeItem) => {
    setActive(activeItem);
  }
  return (
    <div className={`${className} h-screen w-52 2xl:w-72 left-0  md:sticky lg:sticky bg-white top-0 md:flex flex-col items-end 2xl:items-start pr-5 justify-between px-2 z-10`}>
      <div>
        <div className="mt-2 mb:1 md:mb-4  2xl:ml-1 flex w-full h-8 md:h-12  2xl:w-12 justify-center items-center rounded-full hover:bg-gray-extraLight transform transition-colors duration-200">
          <TwitterIcon />
        </div>

        <a onClick={handleClick} >
          <CloseIcon className={"absolute md:hidden right-1 w-7 h-7 top-1"} />
        </a>

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
