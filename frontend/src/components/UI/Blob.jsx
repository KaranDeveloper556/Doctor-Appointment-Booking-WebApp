import React from 'react'

const Blob = ({top=0, left=0, bottom=0, right=0, height=25, width=25}) => {
  return (
    <div style={{
      top: `${top}rem`,
      left: `${left}rem`,
      right: `${right}rem`,
      bottom: `${bottom}rem`,
      height: `${height}rem`,
      width: `${width}rem`,
    }} className='fixed blur-[150px] z-[1] bg-blue-800'/>
  )
}

export default Blob