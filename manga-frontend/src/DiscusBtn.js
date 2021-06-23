import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal"

function DiscusBtn(props) {

    const [show, setShow] = useState(false);
    const handleClose = () =>  setShow(false);
    const handleShow = () =>  setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)

     let newPost = {
            userName: "Joe",
            title: e.target.title.value,
            content: e.target.content.value,
            reponses: []
        }

        props.addDisc(newPost)

    }

    return (
        
        <div>
            <button variant="primary" onClick={handleShow}>
        Theorize
      </button>
            
            
            <Modal className="form" show={show}>
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title id="Joy">
                    Talk about manga!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div>
                    <input type="text" name="title" />
                    <label htmlFor="title">Title</label> 
                    </div>
                    <div>
                    <input type="textarea" name="content" />
                    <label htmlFor="content">Content</label> 
                    </div>
                    
                    
                    <input type="submit" value="Post" onClick={handleClose} />
                    
                     
                </form>
            </Modal.Body>
        </Modal>
        </div>
        



        
    )


}

export default DiscusBtn;