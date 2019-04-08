import React from 'react'

import './Devider.css';

export default ({ deviderPosition }) => {
  return (
    <div className="devider" style={{
      left: `${deviderPosition}px`,
    }} />
  )
}
