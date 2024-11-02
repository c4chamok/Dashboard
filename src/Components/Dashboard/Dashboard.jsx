import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(true);


    return (
        <>
        <section className="flex flex-col h-screen">
            <Header setCollapsed={setCollapsed} collapsed={collapsed}></Header>
            <div className="flex h-full">

                <SideBar collapsed={collapsed}></SideBar>

                <Outlet></Outlet>

            </div>
        </section>
        

        </>
    );
};

export default Dashboard;