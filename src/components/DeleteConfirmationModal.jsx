import { useSelector } from "react-redux";

const DeleteModalConfirmation=()=>{
    const {deleteUrl, deleteMessage, refreshUrl} = useSelector((item)=>item.menu)
    return (
        <div id="modal-confirmation" className="modal-container">
            <div className="modal">
                <h3>Delete Confirmation</h3>
                <p>{deleteMessage}</p>
                <div className="modal-button-container">
                    <button className="modal-button-yes">Yes</button>
                    <button className="modal-button-no">No</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModalConfirmation;