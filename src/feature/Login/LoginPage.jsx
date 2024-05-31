import { useState } from "react";
import { loginUser } from "../../reducers/authorizationReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const LoginPage = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {loading, error} = useSelector((state)=>state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLoginEvent = (e)=>{
        e.preventDefault();
        let userCredentials = {
            username:email, password:password
        };
        dispatch(loginUser(userCredentials)).then((result)=>{
            if(result.payload.isSuccess){
                console.log(result)
                setEmail('')
                setPassword('')
                navigate('/admin')
            }
        })
    }

    return (
        <div className="login-container">
            <form onSubmit={handleLoginEvent}>
                <text className="title">Login</text>
                {error?
                <div></div>:<></>
                }
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="text" value = {email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">
                    {loading?"Loading...":"Login"}
                </button>
            </form>
        </div>
    )
}

export default LoginPage;