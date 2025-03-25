import React from 'react';
import './Navbar.css'

// import img from "../../../Image/Header/mobile.svg"

const Navbar = () => {
  return (
    <>
      <div className='topnav'>
        <div className='topnav-1'>
          <div className='topnav_1a'>
            <span>Offers</span>
            <span>Facebook</span>
            {/* <img src={img} alt="Mobile" width={"100px"} height={"100px"} /> */}
            <div className='imgage'>
              <img src="/Header/mobile.svg" alt="Mobile Icon" />
              <span>Download App</span>
            </div>

            <span>Find a store near me</span>
          </div>
          <div className='topnav_1b'>
            <span>Contact Us</span>
            <span>Track Trder</span>
          </div>
        </div>

        <div className="topnav-2">
          <div className='topnav-2z'>
            <div className='topnav_2y'>
              <img src="/Header/Bewakooflogo.svg" alt="logo" />
              <div className='topnav_2a'>
                <a href="#">MEN</a>
                <a href="#">WOMEN</a>
                <a href="#">MOBILE COVER</a>
              </div>
            </div>

            <div className='topnav_2b'>

              <div class="form-group has-search">
                <img src="/Header/search icon.svg" alt="Search" className='form-control-feedback' />
                <input type="text" class="form-control" placeholder="Search" />
              </div>

              <div className='topnav_2c'>
                <span>|</span >
                <p>LOGIN</p>
                <img src="/Header/Heart.svg" alt="favourte" />
                <img src="/Header/Bag.svg" alt="cart" />
              </div>
            </div>
          </div>
        </div>

        <div className="topnav-3">
          <div className="topnav_3a">
            <p><a href='#'>MEN</a></p>
            <p><a href='#'>WOMEN</a></p>
            <p><a href='#'>PLUS SIZE</a></p>
            <p><a href='#'>ACCESSORISE</a></p>
            <p><a href='#'>OFFICIAL MERCH</a></p>
            <p><a href='#'>SNEAKERS</a></p>
            <p><a href='#'>BEWAKOOF AIR</a></p>
            <p><a href='#'>HEAVY DUTY</a></p>
            <p><a href='#'>CUSTOMIZATION</a></p>
            <p><a href='#'>WINTERWEAR</a></p>
          </div>

        </div>

      </div>



    </>
  )
}

export default Navbar