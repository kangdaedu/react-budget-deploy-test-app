import React from 'react'
import './Alert.css'

const Alert = ({text, type, handleAlert}) => {
    return (
        <div className={`alert alert-${type}`}>{text}</div>
    )
}

export default Alert;