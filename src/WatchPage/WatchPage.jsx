import React, { useEffect, useState } from "react";
import {useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { VideoListCard } from "../VideoListCard/VideoListCard";

export const WatchPage = () => {

    const [searchParams] = useSearchParams();
    const [videoList, setVideosList] = useState([]);
    const todayDateTime = new Date();

    const dispatch = useDispatch();

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_URL);
        const json = await data.json();
        setVideosList(json.items);
    }

    useEffect(() => {
        dispatch(closeMenu());
        getVideos();
    },[])

    return(
        <React.Fragment>
            <div className="w-full flex px-5">
                    <iframe
                        className="w-2/3 m-2 h-[600px]"
                        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
                        title="DAMAAD JI, AAM KAAT DU | Vipul Goyal | Stand up Comedy" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen                    
                    />
                    <div className="w-1/3 ml-5">
                        <div className="pt-10">
                            {
                                videoList.map(option => {
                                    const publisehedAt = new Date(option?.snippet?.publishedAt);
                                    
                                    return(
                                        <VideoListCard
                                            key={option?.id}
                                            videoThumbnail={option?.snippet?.thumbnails?.medium?.url}
                                            videoTitle={option?.snippet?.title}
                                            channelName={option?.snippet?.channelTitle}
                                            totalViews={option?.statistics?.viewCount}
                                            whenUploaded={Math.floor((todayDateTime-publisehedAt)/(24*60*60*1000)) + 1}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
            </div>
        </React.Fragment>
    )
}