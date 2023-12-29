import React from 'react'
import styled from "./offers.module.scss"

const Offers = () => {
  return (
    <div className={styled.specialOffer}>
             <div className="row g-0">
              <div className="col-lg-4">
              <div className={styled.img}>
             </div>
              </div>
              <div className="col-lg-8">
              <div className={styled.offerInfo}>
              <div className={styled.text}>
                <h4>SPECIAL OFFERS</h4>
                <h2>We Have Special Offers Every Now and Then</h2>
              </div>
              <div className={styled.button}>
                <button>SHOW SPECIAL OFFERS</button>
              </div>
             </div>
              </div>
             </div>
            </div>
  )
}

export default Offers