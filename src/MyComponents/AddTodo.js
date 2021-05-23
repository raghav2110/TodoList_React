import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap"

export const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setdesc] = useState("")

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title Or Description Cannot Be Blank")
        }else{
            props.addTodo(title,desc);
            setTitle("");
            setdesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>
                Add A Todo
            </h3>
            <Form onSubmit={submit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Todo Title</Form.Label>
                    <Form.Control type="text" value = {title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter Todo Title" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Todo Description</Form.Label>
                    <Form.Control type="text" value = {desc} onChange={(e)=>{setdesc(e.target.value)}} placeholder="Enter Todo Description" />
                </Form.Group>
                <Button className = "btn-sn btn-success" type="submit">
                    Add Todo
                </Button>
            </Form>
        </div>
    )
}
