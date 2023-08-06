import React from "react";
import { SideBar } from "../SideBar";
import { Outlet } from "react-router-dom";

export const Body = () => {
    return (
        <div className="flex">
            <SideBar/>
            <Outlet/>
        </div>
    )
}