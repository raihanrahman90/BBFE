import { useEffect, useState } from "react";
import { closeLoading, openLoading } from "../../../reducers/menuReducer";
import { useDispatch } from "react-redux";
import { getAPI, putAPI } from "../../../utils/DefaultRequest";
import { fileToBase64 } from "../../../utils/FileUtils";
import { useNavigate, useParams } from "react-router-dom";

const AdminProdukPageAdd = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(null);
    const [isUploadImage, setIsUploadImage] = useState(false);

    const detail = ()=>{
        getAPI(`/product/${id}`)
        .then((response)=>{
            if(response.isSuccess){
                setName(response.data.name);
                setDescription(response.data.description);
                setPrice(response.data.price);
                setCategory(response.data.category)
                setImage(response.data.image)
            } else{
                alert("data tidak ditemukan");
                navigate("/admin/produk")
            }
        })
    }

    useEffect(()=>{
        detail();
    },[]);

    const handleFileInput = (e)=>{
        const file = e.target.files[0];
        setIsUploadImage(true)
        fileToBase64(file, setImage);
    }

    const submitProduct= (e)=>{
        e.preventDefault();
        dispatch(openLoading());
        putAPI(`/product/${id}`, {
            name:name,
            description:description,
            category:category,
            price:price,
            image: isUploadImage?image:undefined
        })
        .then((res)=>{
            if(res.isSuccess){
                navigate("/admin/produk");
            }
            dispatch(closeLoading());
        })
    }

    return (
        <section className="content">
            <div className="admin-card h-100 w-100">
                <div className="admin-card-header">
                    <div className="admin-title">
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
                                <input type="text" placeholder="Nama Produk" onChange={(e)=>setName(e.target.value)} value={name}/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Deskripsi produk" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Kategori" onChange={(e)=>setCategory(e.target.value)} value={category}/>
                        </div>
                        <div className="form-group">
                            <input type="number" placeholder="Harga Produk" onChange={(e)=>setPrice(e.target.value)} value={price}/>
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