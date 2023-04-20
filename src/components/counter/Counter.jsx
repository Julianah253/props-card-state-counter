import React from 'react'

const Counter = () => {
  return (
    <div>
        <h1 className="text-center"> Count: 0</h1>

        <div className="d-flex align-items-center justify-content-evenly my-5">
        <button className="btn btn-success"> Increase </button>
        <button className="btn btn-danger"> Decrease </button>       
        <button className="btn btn-secondary"> Reset </button>
        </div>
    </div>
  )
}

export default Counter