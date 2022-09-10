import React from 'react'

const Loader = () => {
  return (
    <div className='h-full w-full glass3 flex items-center justify-center z-20'>
        <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    </div>
  )
}

export default Loader