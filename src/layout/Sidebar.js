import React, { useState } from "react";
import {
  TwitterIcon,
  BookmaksIcon,
  ExploreIcon,
  HomeIcon,
  ListsIcon,
  MessagesIcon,
  MoreIcon,
  NotificationIcon,
  ProfileIcon,
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
    name: "Bookmarks",
    icon: BookmaksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
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
    <div className="h-screen w-72 sticky top-0 flex flex-col justify-between px-2">
      <div>
        <div className="mt-1 mb-4 ml-1 flex w-12 h-12 justify-center items-center rounded-full hover:bg-gray-extraLight transform transition-colors duration-200">
          <TwitterIcon />
        </div>
       
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon}) => (
                <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick}/>
            ))}
          </ul>
        </nav>

        <button className="bg-primary-base text-wthite rounded-full py-3 px-8 w-11/12 shadow-lg hover:bg-primary-dark transform transition-colors duration-200">Tweet</button>
      </div>
      
      <UserBox />
    </div>
  );
};
export default Sidebar;
