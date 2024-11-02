
const Header = ({setCollapsed, collapsed}) => {
    return (
       <header className="w-full flex flex-col justify-center bg-slate-900">
            <section className="w-[97%] flex justify-between items-center py-3">
                <div className="flex items-center gap-2"> 
                    <span 
                    onClick={()=>setCollapsed(!collapsed)}
                    className="text-2xl pl-3 text-white hover:cursor-pointer">
                    Menu
                    </span>
                    <h1 className="text-2xl font-bold text-white hover:cursor-pointer">DashBoard</h1>
                </div>
                <div className="flex items-center gap-2">
                    <span className=" text-white hover:cursor-pointer">Profile</span>
                    <span className=" text-white hover:cursor-pointer">Settings</span>
                    <span className=" text-white hover:cursor-pointer">Theme</span>
                </div>
            </section>
       </header>
    );
};

export default Header;