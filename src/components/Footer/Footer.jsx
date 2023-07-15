import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section>
        <div className="paddings innerWidth flexCenter">
            <div className="flexColStart f-left">
             <img src='./logo2.png' alt='' width={120}/>
             <span>
                Our vision is to make all people <br/>
                the best place to live for them.
             </span>
            </div>
            <div className="flexColStart f-right">
             <span className='primaryText'>Information</span>
             <span className='secondaryText'>Ruiya Bangra near jamapur ziradei Siwan Bihar(841245)</span>
             <div className="flexCenter f-menu">
                <span>Property</span>
                <span>Services</span>
                <span>Product</span>
                <span>About Us</span>
             </div>
            </div>
        </div>
    </section>
  )
}

export default Footer