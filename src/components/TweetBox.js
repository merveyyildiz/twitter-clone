import React, { useState } from "react";
import {
  EmojiIcon,
  GIFIcon,
  ImageIcon,
  PollIcon,
  ScheduleIcon,
} from "../assets/icons/icon";
import db from "../firebase";
import 'firebase/compat/firestore';
import {  serverTimestamp } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
const TweetBox = () => {
  const [content, setContent] = useState("");
  
  const sendTweet = async() => {
    if(content === ""){
      return;
    }
    await addDoc(collection(db, "feed"), {
        displayName: "Merve Yıldız",
        username: "@merveyyildiz",
        content,
        timestamp: serverTimestamp(),
        avatar: "https://pbs.twimg.com/profile_images/1546902964597661696/IxY9Fslh_400x400.jpg"
      });
    setContent("");
  }
  
  return (
    <div className="flex flex-col flex-1 mt-2 px-2">
      <textarea
        className="outline-none w-full text-xl placeholder-gray-dark overflow-hidden resize-none bg-transparent"
        placeholder="What's happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div className="flex flex-col  sm:flex-row items-center justify-between sm:item-center sm:justify-between">
        <div className="flex -ml-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-lightest">
            <ImageIcon className="w-5 h-5 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-lightest">
            <GIFIcon className="w-5 h-5 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-lightest">
            <PollIcon className="w-5 h-5 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-lightest">
            <EmojiIcon className="w-5 h-5 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-lightest">
            <ScheduleIcon className="w-5 h-5 text-primary-base" />
          </div>
        </div>
        <button className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
        onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};
export default TweetBox;
