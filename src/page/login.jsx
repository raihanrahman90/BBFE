import { useState } from "react";
import { loginUser } from "../reducers/authorizationReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const Login = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {loading, error} = useSelector((state)=>state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLoginEvent = (e)=>{
        e.preventDefault();
        let userCredentials = {
            email, password
        };
        dispatch(loginUser(userCredentials)).then((result)=>{
            if(result.payload){
                setEmail('')
                setPassword('')
                navigate('/')
            }
        })
    }

    return (
        <form onSubmit={handleLoginEvent}>
            <label htmlFor="Email">Email</label>
            <input type="email" className='form-control' value = {email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="Password">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">
                {loading?"Loading...":"Login"}
            </button>
        </form>
    )
}

export default Login;