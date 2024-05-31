export const fileToBase64 = (e, state)=>{
    const reader = new FileReader();
    reader.onloadend=()=>{
        state(reader.result);
    }
    reader.readAsDataURL(e);
}