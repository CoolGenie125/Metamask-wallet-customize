import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleRoute = (e: string) => {
    navigate(`/${e}`);
  };

  return (
    <>
      <nav className='navigation nav-down'>
        <div className='hamburger'>
          <span className='color-menu'></span>
          <span className='color-menu'></span>
          <span className='color-menu'></span>
        </div>
        <nav className='navigation_menu'>
          <div className='sub-menu'>
            <div onClick={() => handleRoute("")}>
              <a
                className='menu-active cursorPointer animate__delay-1s'
                data-bs-toggle='collapse'>
                Home
              </a>
            </div>
            <div onClick={() => handleRoute("planet")}>
              <a
                className='animate__delay-2s cursorPointer'
                data-bs-toggle='collapse'>
                Zippo Planet
              </a>
            </div>
            <div onClick={() => handleRoute("story")}>
              <a
                className='animate__delay-2s cursorPointer'
                data-bs-toggle='collapse'>
                Our Story
              </a>
            </div>
            <div onClick={() => handleRoute("map")}>
              <a
                className='animate__delay-2s cursorPointer'
                data-bs-toggle='collapse'>
                Roadmap
              </a>
            </div>
            <div onClick={() => handleRoute("team")}>
              <a
                className='animate__delay-2s cursorPointer'
                data-bs-toggle='collapse'>
                Our Team
              </a>
            </div>
            <div onClick={() => handleRoute("map")}>
              <a
                className='animate__delay-3s cursorPointer'
                data-bs-toggle='collapse'>
                Portfolio
              </a>
            </div>
            <div onClick={() => handleRoute("contact")}>
              <a className='animate__delay-5s cursorPointer'>Contact</a>
            </div>
          </div>
          <div className='mobile-menu-bg img-fluid'></div>
        </nav>
        <div className='home-menu-text'>
          <div
            className='dropdown cursorPointer'
            onClick={() => handleRoute("")}>
            <a className='menu-active'>Home</a>
          </div>
          <div
            className='dropdown cursorPointer'
            onClick={() => handleRoute("planet")}>
            <a>Zippo Planet</a>
          </div>
          <div className='dropdown cursorPointer' onClick={() => handleRoute("story")}>
            <a>Story</a>
          </div>
          <div className='dropdown cursorPointer' onClick={() => handleRoute("map")}>
            <a>Roadmap</a>
          </div>
          <div className='dropdown cursorPointer' onClick={() => handleRoute("team")}>
            <a>Our Team</a>
          </div>
          <a href='https://discord.com/invite/RwasdYSXXd'>Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
