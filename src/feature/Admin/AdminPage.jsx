import { Link, NavLink, Route, Routes } from "react-router-dom";
import AdminDashboardPage from "./AdminDashboard/AdminDashboardPage";
import { useSelector } from "react-redux";
import AdminProdukPage from "./AdminProduk/AdminProdukPage";


const AdminPage = () =>{
    return (
        <div id="admin-container">
            <AdminSidebar/>
            <div className="flex-column">
                <AdminHeader/>
                <Routes>
                    <Route path="" element={<AdminDashboardPage/>} />
                    <Route path="produk/:id" element={<AdminProdukPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

const AdminSidebar = () =>{
    return (
        <div id="admin-sidebar">
            <NavLink end to="/admin" className="menu" activeClassName="active" >Dashboard</NavLink>
            <NavLink to="/admin/produk" className="menu" activeClassName="active">Produk</NavLink>
            <NavLink to="/admin/user" className="menu" activeClassName="active">User</NavLink>
        </div>
    )
}

const AdminHeader = () => {
    
    const {user} = useSelector((state)=>state.auth);
    
    return (
        <div id="admin-header">
            <h2>Welcome, {user.name}</h2>
        </div>
    )
}
export default AdminPage;