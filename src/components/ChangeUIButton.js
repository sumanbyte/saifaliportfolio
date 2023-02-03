import React from 'react'

const ChangeUIButton = () => {
  return (
    <div className='background-change-ui'>
        <div className="bg-change-ui">
            <div className="bg-change-ui-text">
              <p>Turn into Bad UI</p>
            </div>
            <div className="change-ui-btn">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
    </div>
  )
}

export default ChangeUIButton