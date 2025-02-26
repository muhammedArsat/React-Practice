import React from 'react'

const Button = ({handleClick, children}) => {
  return (
    <div>
     { console.log(`rendering-${children}`)}
      <button onClick={handleClick}>
    {children}
      </button>
    </div>
  )
}

export default React.memo(Button);
