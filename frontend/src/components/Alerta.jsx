import React from 'react'

export default function Alerta({children}) {
  return (
    <div className="alert alert-danger" role="alert">{children}</div>
  )
}
