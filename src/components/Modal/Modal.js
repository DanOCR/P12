import { useState } from "react"


export default function Modal () {


const [modal, setModal] = useState(false);
const toggleModal = () => {
    setModal(!modal)
}
if (modal) {
    document.body.classList.add("active-modal")
} else {
    document.body.classList.remove("active-modal")

}



    return (

        <>
        
        <button onClick={toggleModal} className="btn-modal">
            Open
        </button>
        
   {modal && (     
    <div className="modal">
        <div onClick={toggleModal} className="overlay">
            <div className="modal-content">
                <h2> Hello </h2>
                <p> lorem50 </p>
                <button onClick={toggleModal} className="close-modal"> Close </button>
            </div>
        </div>
    </div>
    )}
        
        
        </>







    )



}