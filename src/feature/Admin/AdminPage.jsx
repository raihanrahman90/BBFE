import { Link, Route, Routes } from "react-router-dom";
import AdminDashboardPage from "./AdminDashboard/AdminDashboardPage";

const AdminPage = () =>{
    return (
        <div id="admin-container">
            <AdminSidebar/>
            <Routes>
                <Route path="" element={<AdminDashboardPage/>}/>
            </Routes>
        </div>
    );
}

const AdminSidebar = () =>{
    return (
        <div id="admin-sidebar">
            <Link to="/admin/" className="menu">Admin</Link>
        </div>
    )
}

export default AdminPage;