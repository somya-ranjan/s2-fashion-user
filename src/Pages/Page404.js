import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/style.css'
function Page404() {
  return (
    <div className='page404_section'>
      <div className="container">
          <div className="row justify-content-center align-items-center">
              <div className="col">
                    <i className="fa-light fa-face-frown"></i>
                    <h1>404</h1>
                    <h3>Page not found</h3>
                    <p>
                    The page you are looking for doesn't exist or an other error occurred,<br />
                    <NavLink to='/'>Go back</NavLink>, or head over to somya.com to chose a new direction
                    </p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Page404
