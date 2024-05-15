import { InputText, InputPassword } from "../component/Input";

const Login = () =>{
    const [email, setEmail] = ("");
    const [password, setPassword] = ("");

    return (
        <div className="full-container vertical-center">
            <div className="login-container">
                <h2>Login</h2>
                <InputText id="E-mail" onChange={setEmail} value={email} key="email"/>
                <InputPassword id="Password" onChange={setPassword} value={password} key="password"/>
            </div>
        </div>
    );
}
export default Login;