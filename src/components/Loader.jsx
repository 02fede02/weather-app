import React from 'react'
import '../styles/loader.css'

const Loader = () => {
    return (
        <div>
            <div className='lds-ring'><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Loader
