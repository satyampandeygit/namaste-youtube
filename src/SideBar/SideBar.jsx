import { useSelector } from "react-redux"

export const  SideBar = () => {

    const isMenuOpen = useSelector(store => {
        return store.app.isMenuOpen;
    })

    if(!isMenuOpen) return null;

    return(
        <div className="w-48 p-4">
            <ul>
                <li className="px-4 py-2">Home</li>
                <li className="px-4 py-2">Shorts</li>
                <li className="px-4 py-2">Subscriptions</li>
                <li className="px-4 py-2">Youtube Music</li>
            </ul>
            <hr/>

            <ul>
                <li className="px-4 py-2">Library</li>
                <li className="px-4 py-2">History</li>
                <li className="px-4 py-2">Your Videos</li>
                <li className="px-4 py-2"> Watch Later</li>
                <li className="px-4 py-2">Downloads</li>
                <li className="px-4 py-2">Liked Videos</li>
            </ul>


        </div>
    )
}