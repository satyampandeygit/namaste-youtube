import { useEffect, useState } from "react"
import { CHANNEL_FTECH_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const VideoCard = ({
    id,
    videoPicture,
    title,
    channelId,
    channelName,
    totalViews,
    uploadedAgo
}) => {

    const [channelThumbnail, setChannelThumbnail] = useState("");

    const getChannelThumbnail = async () => {
        const data = await fetch(CHANNEL_FTECH_URL +channelId );
        const json = await data.json();
        setChannelThumbnail(json?.items[0]?.snippet?.thumbnails?.high.url);
        // setChannelThumbnail(json?.items[0]?.snippet?.thumbnails?.high?.url);
    }

    useEffect(()=>{
        getChannelThumbnail();
    },[]);

    return(
        <Link to={`/watch?v=${id}`}>
            <div className="w-[22rem] rounded-lg cursor-pointer">
                <img
                    alt="Video thumbnail"
                    src={videoPicture}
                    className="w-full h-48 rounded-2xl p-2"
                />
                <div className="flex p-2">
                    <img 
                        className="w-12 h-12 p-2 rounded-full"
                        alt="Channel Profile"
                        src={channelThumbnail}
                    />

                    <div>
                        <div className="font-bold">{title}</div>
                        {channelName}
                        <div className="flex">
                            <span className="pr-2">{totalViews} Views</span>
                            <span >|</span>
                            <span className="px-2">{uploadedAgo} day ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}