import { useEffect, useState } from "react";
import { LoadingIcons } from "../../../components/Loading";

const AdminProdukPageAdd = () =>{
    const [name, setName] = useState("");
    const [isLoading, setLoading] = useState(false);

    return (
        <section className="content">
            <div className="admin-card h-100 w-100">
                <div className="admin-card-header">
                    <div>
                        <h2>Produk</h2>
                    </div>
                </div>
                <div className="admin-card-content">
                    {isLoading?<LoadingIcons/>:<></>}
                    <div className="flex-row w-100">
                        <div className="flex-column w-50 w-100-mobile gap-10">
                            <div className="form-group">
                                <input type="text" placeholder="Nama Produk"/>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Nama Produk"/>
                            </div>
                        </div>
                        <div className="w-50 w-100-mobile">
                            <div className="form-group">
                                <label>Gambar Produk</label>
                                <input type="file" placeholder="Nama Produk"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="admin-card-footer">

                </div>
            </div>
        </section>
    )
}

export default AdminProdukPageAdd;