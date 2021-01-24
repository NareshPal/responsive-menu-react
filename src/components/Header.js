import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaBeer, FaRedRiver } from "react-icons/fa"

function Header() {
  const [navBg, setNavBg] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBg(true)
      setMobileMenu(false)
    } else {
      setNavBg(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", () => {
      setMobileMenu(false)
    })
  })
  const mobileToggle = () => {
    setMobileMenu(!mobileMenu)
  }
  return (
    <div className={navBg ? "Navigation withBackground" : "Navigation"}>
      <div className="logo-wrapper">
        <div className="logo">
          <FaRedRiver /> SiteLogo
        </div>
        <div className="mobile-icon" onClick={mobileToggle}>
          <FaBars />
        </div>
      </div>
      <div className={mobileMenu ? "navs isOpen" : "navs"} onClick={mobileToggle}>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/service">Services</Link>
      </div>
    </div>
  )
}

export default Header
