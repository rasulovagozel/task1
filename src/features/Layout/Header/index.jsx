import React from 'react'
import styled from "./header.module.scss"

const Header = () => {
  return (
    <section className={styled.header}>
        <div className="container">
        <div className="row">
         <div className="col-lg-6 col-md-3 col-sm-6">
           <div className={styled.call}>
            <p><span>Free call</span> +1 234 456 78910</p>
           </div>
         </div>
         <div className="col-lg-6 col-md-9 col-sm-6">
          <div className={styled.apps}>
            <ul>
                <li>•FACEBOOK</li>
                <li>•TWITTER</li>
                <li>•DRIBBLE</li>
            </ul>
          </div>
         </div>
        </div>
    </div>
    </section>
  )
}

export default Header