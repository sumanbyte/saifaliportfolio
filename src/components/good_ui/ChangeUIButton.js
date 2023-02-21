import React, { useContext } from 'react'
import AppContext from '../../context/createContext'

const ChangeUIButton = () => {
  const {checked, setChecked} = useContext(AppContext)
  return (
    <div className='background-change-ui'>
        <div className="bg-change-ui">
            <div className="bg-change-ui-text">
              <p>Turn into Good UI</p>
            </div>
            <div className="change-ui-btn">
              <label className="switch">
              <input type="checkbox" className="checks"
                  checked={checked}
                  onChange={e => setChecked(e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
    </div>
  )
}

export default ChangeUIButton