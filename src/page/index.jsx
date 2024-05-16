import { useSelector } from "react-redux"

const Test=()=>{
    const {user} = useSelector((state)=>state.auth);
    return(
        <>
            {user.id} {user.email}
        </>
    )
}

export default Test;