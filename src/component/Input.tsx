const InputText = ({id, value, onChange}:{id:string,value:any,onChange:any}) =>{
    return (
        <div className="form__group field">
            <input type="input" className="form__field" name={id} id={id} value={value} onChange={(e)=>onChange(e.target.value)} required />
            <label htmlFor={id} className="form__label">{id}</label>
        </div>
    )
}
const InputPassword = ({id, value, onChange}:{id:string,value:any,onChange:any}) =>{
    return (
        <div className="form__group field">
            <input type="password" className="form__field" name={id} id={id} value={value} onChange={(e)=>onChange(e.target.value)} required />
            <label htmlFor={id} className="form__label">{id}</label>
        </div>
    )
}
export {InputText, InputPassword};