import React from 'react';
import './Navbar.css'
import { useNavigate } from "react-router-dom";

// import img from "../../../Image/Header/mobile.svg"

const Navbar = () => {

  // const navigate = useNavigate();

  // const handleRedirect = () => {
  //   navigate("/Man");
  //   navigate("/WoMan"); 
  //   navigate("/Live_Now"); 
  //   navigate("/Pluse_Size"); 
  //   navigate("/Accessories"); 
  //   navigate("/Official_Merch"); 
  //   navigate("/Sneakers");
  //   navigate("/Bewakoof_Air");
  //   navigate("/Heavy Duty");
  //   navigate("/Customization");
  //   navigate("/Winterwear");
    
  // };

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
          <p><a href='#'>Men</a></p>
          <p><a href='#'>Women</a></p>
          <p><a href='#'>Pluse size</a></p>
          <p><a href='#'>Accessories</a></p>
          <p><a href='#'>Official Merch</a></p>
          <p><a href='#'>Sneakers</a></p>
          <p><a href='#'>Bewakoof Air</a></p>
          <p><a href='#'>Heavy Duty</a></p>
          <p><a href='#'>Customization</a></p>
          <p><a href='#'>Winterwear</a></p>
        </div>

      </div>

    </div>



  </>
)
}

export default Navbar;