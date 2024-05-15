import { useDispatch } from "react-redux";
import { NOT_AUTHENTICATED, AUTHENTICATED } from "../action/actionTypes";
import { InputText, InputPassword } from "../component/Input";
import { loginAPI } from "../services/LoginRequest";

const Login = () =>{
    const [email, setEmail] = ("");
    const [password, setPassword] = ("");
    const dispatch = useDispatch();
    const loginUser = (e:any) => {
        e.preventDefault();
        alert("ini tersubmit")
        loginAPI(email, password)
        .then((res)=>{
            alert("masuh sini")
            if(res?.status == 200){
                alert("berhasil");
                localStorage.setItem("token", res.data.accessToken);
                dispatch({type:AUTHENTICATED, payload:{email:res?.data.email}})
            }else{
                alert("gagal");
                dispatch({ type: NOT_AUTHENTICATED });
            }
        })
        .catch((err)=>{
            alert("lah error")
            console.log(err.message);
        });
    };
    return (
        <div className="full-container vertical-center">
            <div className="login-container">
                <form onSubmit={loginUser}>
                    <h2>Login</h2>
                    <InputText id="E-mail" onChange={setEmail} value={email} key="email"/>
                    <InputPassword id="Password" onChange={setPassword} value={password} key="password"/>
                    <button className="button-primary full-width" type="submit">
                        Login
                    </button>
                </form>

            </div>
        </div>
    );
}
export default Login;