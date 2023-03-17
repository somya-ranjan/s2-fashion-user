import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../style/style.css'
import newArrival from './arrival-bg.png'
function NewArrivalComp() {
   return (
      <div className='new_arrivals_section'>
         <div className="container">
            <div className="row justify-content-around align-items-center">
               <div className="col-md-3">
                  <img src={newArrival} alt="" />
               </div>
               <div className="col-md-6">
                  <h1>#New Arrivals</h1>
                  <p>
                     Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                  </p>
                  <NavLink to='/products'>Shop Now</NavLink>
               </div>
            </div>
         </div>
      </div>
   )
}

export default NewArrivalComp
