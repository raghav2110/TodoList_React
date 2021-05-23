import React from 'react'

export const About = () => {
    let myStyle = {
        minHeight : "90vh"
    }
    return (
        <div className = "container my-3" style = {myStyle}>
            <h3>Your Personalise Todo List</h3>
            <p>This application helps you to make your very own Todo List.</p>            
        </div>
    )
}
