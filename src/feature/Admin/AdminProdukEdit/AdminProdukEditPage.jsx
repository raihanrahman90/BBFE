import { useEffect, useState } from "react";
import { getListPage } from "./AdminProdukEditService";
import { IoIosAdd } from "react-icons/io";
import { LoadingIcons } from "../../../components/Loading";
import { Link } from "react-router-dom";

const AdminProdukPage = () =>{
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        getListPage(name, minPrice, maxPrice)
        .then((res)=>{
            setProducts(res.data);
            setLoading(false)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[name, minPrice, maxPrice]);
    return (
        <section className="content">
            <div className="admin-card h-100 w-100">
                <div className="admin-card-header">
                    <div>
                        <h2>Produk</h2>
                    </div>
                    <div className="admin-button-container">
                        <input type="number" name="minPrice" placeholder="Minimal Harga" value={minPrice} onChange={(e)=>setMinPrice(e.target.value)} className="custom-input"/>
                        <input type="number" name="maxprice" placeholder="Maximal Harga" value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)} className="custom-input"/>
                        <input type="text" name="name" placeholder="Filter Nama" value={name} onChange={(e)=>setName(e.target.value)} className="custom-input"/>
                        <button className="btn btn-primary btn-icon"><IoIosAdd size={20}/> Tambah</button>
                    </div>
                </div>
                <div className="admin-card-content">
                    {isLoading?<LoadingIcons/>:<></>}
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Nama Produk</th>
                                <th>Harga Produk</th>
                                <th>Variasi</th>
                                <th>Jumlah</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products===null || products.size==0?<tr><td colSpan={5}>Data Tidak Ditemukan</td></tr>:products.map((item)=>{
                                return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{0}</td>
                                    <td>{0}</td>
                                    <td>
                                        <Link to={`/product/${item.id}`} className="btn btn-action btn-primary">Edit</Link>
                                    </td>
                                </tr>)
                            })}             
                        </tbody>
                    </table>
                </div>
                <div className="admin-card-footer">

                </div>
            </div>
        </section>
    )
}

export default AdminProdukPage;