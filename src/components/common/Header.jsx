import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./Header.css";
import logo from '../../assets/logo.svg';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="header">
      <div className="header_options">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className='header__categories__dsktp'>
          <ul>
            <li>Trending</li>
            <li>Men</li>
            <li>Women</li>
            <li>Shoes</li>
            <li>Accessories</li>
          </ul>
        </div>
        <IconButton sx={{ color: "white", mr: { sm: 2, xs: 1 } }}>
          <SearchIcon sx={{ fontSize: 25 }} />
        </IconButton>
        <IconButton sx={{ color: "white", mr: { sm: 2, xs: 1 } }}>
          <ShoppingCartOutlinedIcon sx={{ fontSize: 25 }} />
          <h5>0</h5>
        </IconButton>
        <IconButton sx={{ color: "white", mr: { sm: 2, xs: 1 }, display: { xs: "none", sm: "flex" } }}>
          <AccountCircleOutlinedIcon sx={{ fontSize: 35 }} />
        </IconButton>
        <IconButton onClick={toggleSidebar} sx={{ color: "white", display: { sm: "none" } }}>
          <MenuOutlinedIcon sx={{ fontSize: 25 }} />
        </IconButton>
      </div>
{showSidebar && (
  <div className={`sidebar ${showSidebar ? 'show-sidebar' : ''}`}>
    <CloseIcon onClick={toggleSidebar} sx={{ fontSize: 30, color: "black", ml: 2, mt: 2 }} />
    <ul>
      <li>Trending <KeyboardArrowRightIcon sx={{ float: "right" }} /></li>
      <li>Men <KeyboardArrowRightIcon sx={{ float: "right" }} /></li>
      <li>Women <KeyboardArrowRightIcon sx={{ float: "right" }} /></li>
      <li>Shoes <KeyboardArrowRightIcon sx={{ float: "right" }} /></li>
      <li>Accessories <KeyboardArrowRightIcon sx={{ float: "right" }} /></li>
      <li>Profile</li>
      <li>SignOut</li>
    </ul>
  </div>
)}
{showSidebar && <div className="sidebar-overlay" />}
    </div>
  );
};

export default Header;
