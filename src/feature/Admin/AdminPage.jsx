import { NavLink, Route, Routes } from "react-router-dom";
import AdminDashboardPage from "./AdminDashboard/AdminDashboardPage";
import { useDispatch, useSelector } from "react-redux";
import AdminProdukListPage from "./AdminProduk/AdminProdukListPage";
import { MdDashboard } from "react-icons/md";
import { IoShirtOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import AdminProdukPageAdd from "./AdminProduk/AdminProdukAddPage";
import { LoadingIcons } from "../../components/Loading";
import AdminProdukEditPage from "./AdminProduk/AdminProdukEditPage";
import { RxHamburgerMenu } from "react-icons/rx";
import { closeSidebarMobile, openSidebarMobile } from "../../reducers/menuReducer";

const AdminPage = () =>{
    const {loading} = useSelector((state)=>state.menu);
    return (
        <div id="admin-container">
            {loading?<LoadingIcons/>:<></>}
            <AdminSidebar/>
            <div className="flex-column">
                <AdminHeader/>
                <Routes>
                    <Route path="" element={<AdminDashboardPage/>}  exact/>
                    <Route path="produk" element={<AdminProdukListPage/>} exact/>
                    <Route path="produk/add" element={<AdminProdukPageAdd/>} exact/>
                    <Route path="produk/:id" element={<AdminProdukEditPage/>} exact/> 
                </Routes>
            </div>
        </div>
    );
}

const AdminSidebar = () =>{
    return (
        <div id="admin-sidebar">
            <NavLink end to="/admin" className="menu"><MdDashboard /> Dashboard</NavLink>
            <NavLink to="/admin/produk" className="menu"><IoShirtOutline /> Produk</NavLink>
            <NavLink to="/admin/user" className="menu"><FaRegUser /> User</NavLink>
        </div>
    )
}

const AdminHeader = () => {
    const dispatch = useDispatch();    
    const {user} = useSelector((state)=>state.auth);
    const {sidebarMobile} = useSelector((state)=>state.menu);

    return (
        <>
            <div id="admin-header">
                <h2>Welcome, {user?.name}</h2>
            </div>
            <div id="admin-header-mobile">
                <div className="admin-header-card">
                    <button className="burger-menu" onClick={()=>dispatch(openSidebarMobile())}><RxHamburgerMenu /></button>
                </div>
            </div>
            <div id="sidebar-mobile" className={sidebarMobile?"active":""}>
                <div className="sidebar-mobile-content">
                    <button className="sidebar-mobile-close-button" onClick={()=>dispatch(closeSidebarMobile())}>X</button>
                    <NavLink end to="/admin" className="sidebar-mobile-menu" onClick={()=>dispatch(closeSidebarMobile())}><MdDashboard /> Dashboard</NavLink>
                    <NavLink to="/admin/produk" className="sidebar-mobile-menu" onClick={()=>dispatch(closeSidebarMobile())}><IoShirtOutline /> Produk</NavLink>
                    <NavLink to="/admin/user" className="sidebar-mobile-menu" onClick={()=>dispatch(closeSidebarMobile())}><FaRegUser /> User</NavLink>
                </div>
            </div>
        </>
    )
}
export default AdminPage;