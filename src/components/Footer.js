import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'
import newsletter from "../images/newsletter.png"
import logo from "../images/logo.png"


const Footer = () => {
    return (
        <>
           
            <footer className="py-5 d-none d-lg-block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                             <a href="#" className="header-logo">
    <NavLink to="/">
      <img src={logo} alt="Anon's logo" width="120" height="36" style={{margin:"2px"}}/></NavLink>
    </a>
                            <div className='d-flex flex-column fs-6'>
                                <address className='text-white fs-6 m-2 justfy-text'>C-171, llnd Floor, Sector 63<br></br>Noida 201301 Uttar Pradesh</address>
                                <Link className="text-white my-2 m-2" to="tel:+8801938472638">+91-9311327671</Link>
                                <Link className="text-white my-2 m-2" to="mailto:contact@shoplocal.com">care@trapthedeal.com.</Link>
                                <div className="social-icons d-flex align-items-center gap-15 mt-4">
                                    <Link to="" className='text-white social-icon-item d-flex align-items-center justify-content-center'>
                                        <BsGithub />
                                    </Link>
                                    <Link to="" className='text-white social-icon-item d-flex align-items-center justify-content-center'>
                                        <BsInstagram />
                                    </Link>
                                    <Link to="" className='text-white social-icon-item d-flex align-items-center justify-content-center'>
                                        <BsYoutube />
                                    </Link>
                                    <Link to="" className='text-white social-icon-item d-flex align-items-center justify-content-center'>
                                        <BsLinkedin />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Information</h4>
                            <div>
                                <div className='footer-links d-flex flex-column fs-6'>
                                    <Link to="privacy-policy" className='text-white py-2 mb-1' >Privacy Policy</Link>
                                    <Link className='text-white py-2 mb-1' to="refund-policy">Refund Policy</Link>
                                    <Link className='text-white py-2 mb-1' to="shipping-policy">Shipping Policy</Link>
                                    <Link className='text-white py-2 mb-1' to="terms-and-conditions">Terms of Service</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Account</h4>
                            <div>
                                <div className='footer-links d-flex flex-column fs-6'>
                                    <Link className='text-white py-2 mb-1' to="">About Us</Link>
                                    <Link className='text-white py-2 mb-1' to="">FAW</Link>
                                    <Link className='text-white py-2 mb-1' to="">Contact</Link>
                                    <Link className='text-white py-2 mb-1' to="">Size Chart</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className='text-white mb-4'>Quick Links</h4>
                            <div className='footer-links d-flex flex-column fs-6'>
                                <Link className='text-white py-2 mb-1' to="">Laptops</Link>
                                <Link className='text-white py-2 mb-1' to="">Headphones</Link>
                                <Link className='text-white py-2 mb-1' to="">Tablets</Link>
                                <Link className='text-white py-2 mb-1' to="">Smartphones</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white fs-6">&copy; {new Date().getFullYear()} Powered by Trap The Deal</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer