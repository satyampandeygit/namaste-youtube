import React, { useEffect, useState } from "react";
import { CategoryButtons } from "./CategoryButtons";
import { VIDEO_CATEGORY_URL } from "../utils/constants";

export const ButtonList = ({title}) => {

    const [videoCategories, setVideoCategories] = useState([]);

    const getVideoCategories = async () => {
        const data = await fetch(VIDEO_CATEGORY_URL);
        const json = await data.json();
        setVideoCategories(json?.items);
    }

    useEffect(()=>{
        getVideoCategories();
    },[]);

    return(
        <div className="m-2 flex flex-wrap overflow-visible overflow-y-hidden overflow-x-auto">

            {
                videoCategories.map(category => {
                    return(
                            category?.snippet?.title.length<10 ? 
                                <CategoryButtons title={category?.snippet?.title}/> :
                                 ""
                    )
                })
            }
        </div>
    )
}