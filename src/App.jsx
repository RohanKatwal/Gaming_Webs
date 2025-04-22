import React from 'react'
import './index.css'

const App = () => {
  return (
    <>
      <h1 className="font-zentry text-3xl">Zentry Font</h1>
      <p className="font-general">General Font</p>
      <p className="font-circular-web">Circular Web Font</p>
      <p className="font-robert-medium">Robert Medium Font</p>
      <p className="font-robert-regular">Robert Regular Font</p>

      {/* Colors */}
      <div className="bg-blue-50 text-blue-300">
        Blue 50 Background, Blue 300 Text
      </div>
      <div className="bg-violet-300 text-white">Violet 300 Background</div>
      <div className="bg-yellow-300 text-yellow-100">
        Yellow 300 Background, Yellow 100 Text
      </div>
    </>
  );
};

export default App;