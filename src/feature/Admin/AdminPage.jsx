import { NavLink, Route, Routes } from "react-router-dom";
import AdminDashboardPage from "./AdminDashboard/AdminDashboardPage";
import { useSelector } from "react-redux";
import AdminProdukListPage from "./AdminProduk/AdminProdukListPage";
import { MdDashboard } from "react-icons/md";
import { IoShirtOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import AdminProdukPageAdd from "./AdminProduk/AdminProdukAddPage";
import { LoadingIcons } from "../../components/Loading";
import AdminProdukEditPage from "./AdminProduk/AdminProdukEditPage";

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