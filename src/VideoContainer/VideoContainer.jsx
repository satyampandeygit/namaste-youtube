import { useEffect, useState } from "react";
import { VideoCard } from "../VideoCard";
import { CHANNEL_FTECH_URL, YOUTUBE_VIDEOS_URL } from "../utils/constants";

export const VideoContainer = () => {

    const [videoList, setVideosList] = useState([]);
    const todayDateTime = new Date();

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_URL);
        const json = await data.json();
        setVideosList(json.items);
    }

    useEffect(() => {
        getVideos();
    },[])
    
    return(
        <div className="flex flex-wrap justify-around">
            {
                videoList.map(option => {
                    const publisehedAt = new Date(option?.snippet?.publishedAt);
                    
                    return(
                        <VideoCard
                            key={option?.id}
                            id={option?.id}
                            videoPicture={option?.snippet?.thumbnails?.medium?.url}
                            title={option?.snippet?.title}
                            channelId={option?.snippet?.channelId}
                            channelName={option?.snippet?.channelTitle}
                            totalViews={option?.statistics?.viewCount}
                            uploadedAgo={Math.floor((todayDateTime-publisehedAt)/(24*60*60*1000)) + 1}
                        />
                    )
                })
            }
            
        </div>
    )
}