import React from 'react'
import "../../App";

export default function Boton({name}) {
    return (
        <button
            className="btn custom-button w-100 mt-2"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
        >
            {name}
        </button>
    )
}
