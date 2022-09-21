import React from "react";
import {
  TwitterIcon,
  BookmaksIcon,
  EmojiIcon,
  ExploreIcon,
  GIFIcon,
  HomeIcon,
  ImageIcon,
  LikeIcon,
  ListsIcon,
  MessagesIcon,
  MoreIcon,
  NotificationIcon,
  PollIcon,
  ProfileIcon,
  ReplyIcon,
  ReTweetIcon,
  ScheduleIcon,
  SearchIcon,
  ShareIcon,
} from "../assets/icons/icon";
import SideLink from "../components/SideLink";

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
  return (
    <div className="w-72 flex flex-col justify-between px-2">
      <div>
        <div className="mt-1 mb-4 ml-1 flex w-12 h-12 justify-center items-center rounded-full hover:bg-gray-extraLight transform transition-colors duration-200">
          <TwitterIcon />
        </div>
       
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon}) => (
                <SideLink key={name} name={name} Icon={icon}/>
            ))}
          </ul>
        </nav>

        <button className="bg-primary-base text-wthite rounded-full py-3 px-8 w-11/12 shadow-lg hover:bg-primary-dark transform transition-colors duration-200">Tweet</button>
      </div>
      <div>alt</div>
    </div>
  );
};
export default Sidebar;
