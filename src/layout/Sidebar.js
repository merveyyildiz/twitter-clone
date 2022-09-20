import React from "react";
import {
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
const Sidebar = () => {
  return (
    <div className="w-72 bg-blue-200">
      <HomeIcon />
      <ExploreIcon />
      <NotificationIcon />
      <MessagesIcon />
      <BookmaksIcon />
      <ListsIcon />
      <ProfileIcon />
      <MoreIcon />

      <GIFIcon />
      <ImageIcon/>
      <PollIcon />
      <EmojiIcon/>
      <LikeIcon />
      <ShareIcon />
      <ReTweetIcon />
      <ScheduleIcon />
      <ReplyIcon />
      <SearchIcon />
      sidebar
    </div>
  );
};
export default Sidebar;
