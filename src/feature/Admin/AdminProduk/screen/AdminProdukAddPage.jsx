import { useEffect, useState } from "react";
import { closeLoading, openLoading } from "../../../../reducers/menuReducer";
import { useDispatch } from "react-redux";
import { postAPI } from "../../../../utils/DefaultRequest";
import { fileToBase64 } from "../../../../utils/FileUtils";
import { useNavigate } from "react-router-dom";

const AdminProdukPageAdd = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(null);

    const handleFileInput = (e)=>{
        const file = e.target.files[0];
        fileToBase64(file, setImage);
    }

    const submitProduct= async (e)=>{
        e.preventDefault();
        try{
            dispatch(openLoading());
            let res = await postAPI("admin/item", {
                name:name,
                description:description,
                price: parseInt(price),
                image: image
            })
            if(res.isSuccess){
                navigate("/admin/produk");
            }else{
                alert("terjadi kesalahan")
            }
        } catch(e) {
            alert("Terjadi kesalahan")
        }
        dispatch(closeLoading());
    }

    return (
        <section className="content">
            <div className="admin-card h-100 w-100">
                <div className="admin-card-header">
                    <div>
                        <h2>Produk</h2>
                    </div>
                </div>
                <div className="admin-card-content">
                    <form className="form-input" onSubmit={submitProduct}>
                        <div className="form-group">
                            {image?<img src = {image} alt="gambar produk"/>:<></>}
                            <label htmlFor="gambar">Gambar Produk</label>
                            <input type="file" placeholder="Nama Produk" name="gambar" onChange={handleFileInput}/>
                        </div>
                        <div className="form-group">
                                <input type="text" placeholder="Nama Produk" onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Deskripsi produk" onChange={(e)=>setDescription(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input type="number" placeholder="Harga Produk" onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>
                <div className="admin-card-footer">

                </div>
            </div>
        </section>
    )
}

export default AdminProdukPageAdd;