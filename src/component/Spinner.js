import React from 'react'
import spinner from '../asset/spnnerr.gif'


const Spinner =()=> {

    return (
      <div className='text-center'>
        <img className='my-3' src={spinner} alt="Loading" />
      </div>
    )

}

export default Spinner
