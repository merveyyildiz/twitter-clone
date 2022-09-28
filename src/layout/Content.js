import React, { useState, useEffect } from "react";
import TweetBox from "../components/TweetBox";
import Divider from "../components/Divider";
import { PopularIcon } from "../assets/icons/icon";
import db from "../firebase";
//import { doc, onSnapshot } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import FeedList from "../components/FeedList";

const Content = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(()=> {
    async function getTweet() {
      const querySnapshot = await getDocs(collection(db, "feed"));
      let data= [];
       querySnapshot.forEach((doc) => {
        data.push(doc.data())
      });
      setTweets(data);
    }
    getTweet();
    
  }, []);
  console.log("tweet",tweets);
  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopularIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex space-x-4 px-4 py-3">
        <img
          className="w-11 h-11 rounded-full"
          src="https://pbs.twimg.com/profile_images/1546902964597661696/IxY9Fslh_400x400.jpg"
          alt="profile"
        ></img>
        <TweetBox />
      </div>
      <Divider />

      {/* Feed */}
      <FeedList tweets={tweets} />
    </main>
  );
};
export default Content;
