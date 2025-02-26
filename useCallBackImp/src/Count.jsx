import React from 'react'

const Count = ({text, value}) => {
  return (
    <div>
     { console.log(`rendering-${text}`)}
      <h1>{text}</h1>
      <p>{value}</p>
    </div>
  )
}

export default React.memo(Count);
