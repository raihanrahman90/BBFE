import { NavLink, Route, Routes } from "react-router-dom";
import AdminDashboardPage from "./AdminDashboard/AdminDashboardPage";
import { useSelector } from "react-redux";
import AdminProdukPage from "./AdminProduk/AdminProdukPage";
import { MdDashboard } from "react-icons/md";
import { IoShirtOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import AdminProdukPageAdd from "./AdminProdukAdd/AdminProdukAddPage";

const AdminPage = () =>{
    return (
        <div id="admin-container">
            <AdminSidebar/>
            <div className="flex-column">
                <AdminHeader/>
                <Routes>
                    <Route path="" element={<AdminDashboardPage/>} />
                    <Route path="produk" element={<AdminProdukPage/>}/>
                    <Route path="produk/add" element={<AdminProdukPageAdd/>}/>
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
    
    const {user} = useSelector((state)=>state.auth);
    
    return (
        <>
            <div id="admin-header">
                <h2>Welcome, {user?.name}</h2>
            </div>
            <div id="admin-header-mobile">
                <div className="admin-header-card">
                    <button className="burger-menu">burger</button>
                </div>
            </div>
        </>
    )
}
export default AdminPage;