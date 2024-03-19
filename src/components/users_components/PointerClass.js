// import React, { Component, useState } from 'react'

// export default class PointerClass extends Component {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   render() {
//     return (
//       <Pointer />
//     )
//   }
// }

import React, { Component, useState } from 'react'

export default function PointerClass({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function onPointerMoveEvent(e) {
    const pointerPos = {x: e.clientX, y: e.clientY }
    setPosition(pointerPos)
  }

  return (
    <Pointer position={position} setPosition={onPointerMoveEvent} children={children} />
  )

  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  )
}

class Pointer extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className='pointer-area' onPointerMove={(e) => {
        this.props.setPosition(e)}}>
        <div className='pointer' style={{ transform: `translate(${this.props.position.x}px, ${this.props.position.y}px)` }}></div>
        {this.props.children}
      </div>
    )
  }
}
