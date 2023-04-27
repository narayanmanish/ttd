import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import wish from "../../images/wish.svg"
import view from "../../images/view.svg"
import addCart from "../../images/add-cart.svg"
//import watch from "../../images/watch.jpg"
import watch2 from "../../images/watch-2.jpg"
import prodCompare from "../../images/prodcompare.svg"
import iron from "../../images/LG-7010-RRAZ-R.jpg";
import tv from "../../images/Blinken TV  65 inch (1).jpg";
import cooker1 from "../../images/cooker1.png";
import cooker2 from "../../images/cooker2.png";
import fan1 from "../../images/fan1.png";
import fan2 from "../../images/fan2.png";
import iron1 from "../../images/iron1.png";
import iron2 from "../../images/iron2.png";
import mixer1 from "../../images/mixer1.png";
import mixer2 from "../../images/mixer2.png";
import kettel1 from "../../images/kettel1.png";
import kettel2 from "../../images/kettel2.png";
import tv1 from "../../images/tv1.png";
import tv2 from "../../images/tv2.png";


const ProductCard = ({ grid }) => {

    const location = useLocation()
    return (
        <>
        <div className={`${location.pathname == "/products" ? `col-${grid} col-md-${grid} col-lg-${grid}` : "col-6 col-md-4 col-lg-3 col-xl-2"}`}>
            <Link to="/products/cooker" className="product-card bg-white br-shadow position-relative w-100">
            <div className="product-img d-flex align-items-center justify-content-center position-relative">
                    <img className='img-fluid rounded' src={cooker1} alt="" />
                    <img className='img-fluid rounded' src={cooker2} alt="" />
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt="" />
                        </button>
                    </div>
                    <div className="action-bar position-absolute ">
                        <div className="d-flex flex-column gap-10">
                            <button className='border-0 bg-transparent'>
                                <img src={prodCompare} alt="" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt="" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addCart} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product-details text-dark px-3 pb-2 bg-white">
                    <p className="brand fs-xsm">Havels</p>
                    <h5 className="product-title fs-sm">Classic Essentials 5L & 3L Aluminium Induction Base Pressure</h5>
                    <ReactStars
                        count={5}
                        size={15}
                        activeColor={"#ffc30b"}
                        edit={false}
                        value={3}
                    />
                    <p className={`product-description fs-xsm text-muted mb-0 pt-2 ${grid === 12 ? "d-block" : "d-none"}`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti imilique...</p>
                    <p className="price fs-5 pt-3">₹1,499</p>
                </div>
            </Link>         
        </div>
        {/*product 2 start */}
        <div className={`${location.pathname == "/products" ? `col-${grid} col-md-${grid} col-lg-${grid}` : "col-6 col-md-4 col-lg-3 col-xl-2"}`}>
        <Link to="/products/fan" className="product-card bg-white br-shadow position-relative w-100">
        <div className="product-img d-flex align-items-center justify-content-center position-relative">
                <img className='img-fluid rounded' src={fan1} alt="" />
                <img className='img-fluid rounded' src={fan2} alt="" />
                <div className="wishlist-icon position-absolute">
                    <button className='border-0 bg-transparent'>
                        <img src={wish} alt="" />
                    </button>
                </div>
                <div className="action-bar position-absolute ">
                    <div className="d-flex flex-column gap-10">
                        <button className='border-0 bg-transparent'>
                            <img src={prodCompare} alt="" />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={view} alt="" />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={addCart} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="product-details text-dark px-3 pb-2 bg-white">
                <p className="brand fs-xsm">Havels</p>
                <h5 className="product-title fs-sm">Urja Lite 350rpm Fusion Silver & Blue Ceiling Fan, Sweep: 12 </h5>
                <ReactStars
                    count={5}
                    size={15}
                    activeColor={"#ffc30b"}
                    edit={false}
                    value={3}
                />
                <p className={`product-description fs-xsm text-muted mb-0 pt-2 ${grid === 12 ? "d-block" : "d-none"}`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti imilique...</p>
                <p className="price fs-5 pt-3">₹1,799</p>             
            </div>
        </Link>       
    </div>
     {/*product 2 end */}
     {/*product 3 start */}
     <div className={`${location.pathname == "/products" ? `col-${grid} col-md-${grid} col-lg-${grid}` : "col-6 col-md-4 col-lg-3 col-xl-2"}`}>
        <Link to="/products/iron" className="product-card bg-white br-shadow position-relative w-100">
        <div className="product-img d-flex align-items-center justify-content-center position-relative">
                <img className='img-fluid rounded' src={iron1} alt="" />
                <img className='img-fluid rounded' src={iron2} alt="" />
                <div className="wishlist-icon position-absolute">
                    <button className='border-0 bg-transparent'>
                        <img src={wish} alt="" />
                    </button>
                </div>
                <div className="action-bar position-absolute ">
                    <div className="d-flex flex-column gap-10">
                        <button className='border-0 bg-transparent'>
                            <img src={prodCompare} alt="" />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={view} alt="" />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={addCart} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="product-details text-dark px-3 pb-2 bg-white">
                <p className="brand fs-xsm">Bajaj</p>
                <h5 className="product-title fs-sm">Bajaj 600W Black Dry Iron, DX2 Dry Iron</h5>
                <ReactStars
                    count={5}
                    size={15}
                    activeColor={"#ffc30b"}
                    edit={false}
                    value={3}
                />
                <p className={`product-description fs-xsm text-muted mb-0 pt-2 ${grid === 12 ? "d-block" : "d-none"}`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti imilique...</p>
                <p className="price fs-5 pt-3">₹729</p>             
            </div>
        </Link>       
    </div>
     {/*product 3 end */}
     {/*product 4 start */}
     <div className={`${location.pathname == "/products" ? `col-${grid} col-md-${grid} col-lg-${grid}` : "col-6 col-md-4 col-lg-3 col-xl-2"}`}>
        <Link to="/products/kettle" className="product-card bg-white br-shadow position-relative w-100">
        <div className="product-img d-flex align-items-center justify-content-center position-relative">
                <img className='img-fluid rounded' src={kettel1} alt="" />
                <img className='img-fluid rounded' src={kettel2} alt="" />
                <div className="wishlist-icon position-absolute">
                    <button className='border-0 bg-transparent'>
                        <img src={wish} alt="" />
                    </button>
                </div>
                <div className="action-bar position-absolute ">
                    <div className="d-flex flex-column gap-10">
                        <button className='border-0 bg-transparent'>
                            <img src={prodCompare} alt="" />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={view} alt="" />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={addCart} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="product-details text-dark px-3 pb-2 bg-white">
                <p className="brand fs-xsm">Prestige</p>
                <h5 className="product-title fs-sm">Prestige PKOSS 1.5 Litre Black Electric Kettle, 41587 </h5>
                <ReactStars
                    count={5}
                    size={15}
                    activeColor={"#ffc30b"}
                    edit={false}
                    value={3}
                />
                <p className={`product-description fs-xsm text-muted mb-0 pt-2 ${grid === 12 ? "d-block" : "d-none"}`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti imilique...</p>
                <p className="price fs-5 pt-3">₹739</p>             
            </div>
        </Link>       
    </div>
     {/*product 4 end */}
     {/*product 5 start */}
     <div className={`${location.pathname == "/products" ? `col-${grid} col-md-${grid} col-lg-${grid}` : "col-6 col-md-4 col-lg-3 col-xl-2"}`}>
        <Link to="/products/mixer" className="product-card bg-white br-shadow position-relative w-100">
        <div className="product-img d-flex align-items-center justify-content-center position-relative">
                <img className='img-fluid rounded' src={mixer1} alt="" />
                <img className='img-fluid rounded' src={mixer2} alt="" />
                <div className="wishlist-icon position-absolute">
                    <button className='border-0 bg-transparent'>
                        <img src={wish} alt="" />
                    </button>
                </div>
                <div className="action-bar position-absolute ">
                    <div className="d-flex flex-column gap-10">
                        <button className='border-0 bg-transparent'>
                            <img src={prodCompare} alt="" />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={view} alt="" />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={addCart} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="product-details text-dark px-3 pb-2 bg-white">
                <p className="brand fs-xsm">Bajaj</p>
                <h5 className="product-title fs-sm">Bajaj GX 3701 750W Black Mixer Grinder with 3 Jars, 410528 </h5>
                <ReactStars
                    count={5}
                    size={15}
                    activeColor={"#ffc30b"}
                    edit={false}
                    value={3}
                />
                <p className={`product-description fs-xsm text-muted mb-0 pt-2 ${grid === 12 ? "d-block" : "d-none"}`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti imilique...</p>
                <p className="price fs-5 pt-3">₹3,869</p>             
            </div>
        </Link>       
    </div>
     {/*product 5 end */}
     {/*product 6 start */}
     <div className={`${location.pathname == "/products" ? `col-${grid} col-md-${grid} col-lg-${grid}` : "col-6 col-md-4 col-lg-3 col-xl-2"}`}>
        <Link to="/products/:id" className="product-card bg-white br-shadow position-relative w-100">
        <div className="product-img d-flex align-items-center justify-content-center position-relative">
                <img className='img-fluid rounded' src={tv1} alt="" />
                <img className='img-fluid rounded' src={tv2} alt="" />
                <div className="wishlist-icon position-absolute">
                    <button className='border-0 bg-transparent'>
                        <img src={wish} alt="" />
                    </button>
                </div>
                <div className="action-bar position-absolute ">
                    <div className="d-flex flex-column gap-10">
                        <button className='border-0 bg-transparent'>
                            <img src={prodCompare} alt="" />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={view} alt="" />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={addCart} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="product-details text-dark px-3 pb-2 bg-white">
                <p className="brand fs-xsm">Blinken</p>
                <h5 className="product-title fs-sm">Blinken 65 inch Ultra Series 4K HD Smart Android LED TV (CWT6500TD)</h5>
                <ReactStars
                    count={5}
                    size={15}
                    activeColor={"#ffc30b"}
                    edit={false}
                    value={3}
                />
                <p className={`product-description fs-xsm text-muted mb-0 pt-2 ${grid === 12 ? "d-block" : "d-none"}`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti imilique...</p>
                <p className="price fs-5 pt-3">₹38,950</p>             
            </div>
        </Link>       
    </div>
     {/*product 6 end */}
    </>
    )
}



export default ProductCard