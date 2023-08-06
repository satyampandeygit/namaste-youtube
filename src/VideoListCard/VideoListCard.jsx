import React from "react";

export const VideoListCard = ({
    videoThumbnail,
    videoTitle,
    channelName,
    totalViews,
    whenUploaded
}) => {

    // const [stateTotalViews, setStateTotalViews] = useState(Number(totalViews));
    // const [countDivide, setCountDivide] = useState(0);
    // const [viewsSuffix, setViewsSuffix] = useState("K");
    
    //     useEffect(()=>{
    //         console.log(typeof(stateTotalViews))
    //         // while(stateTotalViews>1000){
    //         //     console.log(stateTotalViews)
    //         //     const temp = stateTotalViews/1000;
    //         //     setStateTotalViews(Math.floor(temp))
    //         //     setCountDivide(countDivide+1);
    //         // }

    //         if(countDivide === 1){
    //             setViewsSuffix("K");
    //         }else if(countDivide === 2){
    //             setViewsSuffix("M");
    //         }else if(countDivide === 3){
    //             setViewsSuffix("B");
    //         }
    //     });

    return(
        <div className="flex">
            <div className="w-[50%] m-2">
                <img className="rounded-lg" src={videoThumbnail} alt={videoTitle} />
            </div>
            <div className="w-[50%] m-2">
                <section className="h-12 overflow-hidden font-bold">
                    {videoTitle}
                </section>
                <section className="mt-2">
                    <section>
                        {channelName} 
                    </section>
                    <section>
                        <span>{totalViews} Views</span>
                        <span className=""> | </span>
                        { whenUploaded } days ago
                    </section>
                </section>
            </div>
        </div>
    )
}