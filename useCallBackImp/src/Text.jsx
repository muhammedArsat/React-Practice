import React from 'react'

const Text = () => {
  return (
    <div>
      {console.log("Rendering Text")}
      <h1>CallBack Hook</h1>
    </div>
  )
}

export default React.memo(Text);
