import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import watchImg from "../../images/watch.jpg"
import wishImg from "../../images/wish.svg"
import tv from "../../images/t_v.png"
import mixer from "../../images/mixe_r.png"
import iron from "../../images/iro_n.png"

const SpecialProducts = () => {
    return (
        <>
        <div className="col">
            <div className="special-product-card br-shadow bg-white position-relative">
                <div className="d-flex justify-content-between">
                    <div className="special-product-imgs w-100 position-relative">
                        <img className='img-fluid rounded' src="" alt="" />
                        <div className="wishlist-icon position-absolute">
                            <Link>
                                <img src={tv} alt="" style={{width:"90%",marginLeft:"6px"}}/>
                            </Link>
                        </div>
                    </div>
                    <div className="special-product-content px-3 py-4 w-">
                        <p className="brand">Blinken</p>
                        <h6 className="special-prod-title">
                        Blinken 65 Inch Ultra Series 4K HD Smart Android LED TV (CWT6500TD)
                        </h6>
                        <ReactStars
                            count={5}
                            size={15}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className="price pt-3">
                            <span className="red-price text-danger fw-bold">₹35000</span> &nbsp; <strike className="fs-xsm text-muted">₹50000</strike>
                        </p>
                        <div className="discount-till d-flex align-items-center gap-10">
                            <p className="mb-0 fs-xsm">
                                <b>5 </b>days
                            </p>
                            <div className="d-flex gap-1 align-items-center">
                                <span className="badge time-badge rounded-circle p-2 text-center bg-danger">1</span>:
                                <span className="badge time-badge rounded-circle p-2 text-center bg-danger">1</span>:
                                <span className="badge time-badge rounded-circle p-2 text-center bg-danger">1</span>
                            </div>
                        </div>
                        <div className="prod-count pb-4">
                            <p className='pt-3 fs-xsm text-muted mb-2'>Products: 5</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" area-valuemax="100"></div>
                            </div>
                        </div>
                        <Link><button type="button" className="btn darkButton py-1 py-sm-2 px-3 px-sm-4 rounded-pill">Buy Now</button></Link>
                    </div>

                </div>
            </div>
        </div>


        <div className="col">
            <div className="special-product-card br-shadow bg-white position-relative">
                <div className="d-flex justify-content-between">
                    <div className="special-product-imgs w-100 position-relative">
                        <img className='img-fluid rounded' src="" alt="" />
                        <div className="wishlist-icon position-absolute">
                            <Link>
                                <img src={mixer} alt="" style={{width:"80%",margin:"20px"}} />
                            </Link>
                        </div>
                    </div>
                    <div className="special-product-content px-3 py-4 w-">
                        <p className="brand">Havels</p>
                        <h6 className="special-prod-title">
                        Bajaj GX 3701 750W Black Mixer Grinder with 3 Jars, 410528
                        </h6>
                        <ReactStars
                            count={5}
                            size={15}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className="price pt-3">
                            <span className="red-price text-danger fw-bold">₹3500</span> &nbsp; <strike className="fs-xsm text-muted">₹4500</strike>
                        </p>
                        <div className="discount-till d-flex align-items-center gap-10">
                            <p className="mb-0 fs-xsm">
                                <b>5 </b>days
                            </p>
                            <div className="d-flex gap-1 align-items-center">
                                <span className="badge time-badge rounded-circle p-2 text-center bg-danger">1</span>:
                                <span className="badge time-badge rounded-circle p-2 text-center bg-danger">1</span>:
                                <span className="badge time-badge rounded-circle p-2 text-center bg-danger">1</span>
                            </div>
                        </div>
                        <div className="prod-count pb-4">
                            <p className='pt-3 fs-xsm text-muted mb-2'>Products: 5</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" area-valuemax="100"></div>
                            </div>
                        </div>
                        <Link><button type="button" className="btn darkButton py-1 py-sm-2 px-3 px-sm-4 rounded-pill">Buy Now</button></Link>
                    </div>

                </div>
            </div>
        </div>


        <div className="col">
            <div className="special-product-card br-shadow bg-white position-relative">
                <div className="d-flex justify-content-between">
                    <div className="special-product-imgs w-100 position-relative">
                        <img className='img-fluid rounded' src="" alt="" />
                        <div className="wishlist-icon position-absolute">
                            <Link>
                                <img src={iron} alt="" style={{width:"80%",margin:"20px"}} />
                            </Link>
                        </div>
                    </div>
                    <div className="special-product-content px-3 py-4 w-">
                        <p className="brand">Havels</p>
                        <h6 className="special-prod-title">
                        Longway Plancha 1000W Black Heavy Weight Dry Iron, DSQW-78688109
                        </h6>
                        <ReactStars
                            count={5}
                            size={15}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className="price pt-3">
                            <span className="red-price text-danger fw-bold">₹300</span> &nbsp; <strike className="fs-xsm text-muted">₹500</strike>
                        </p>
                        <div className="discount-till d-flex align-items-center gap-10">
                            <p className="mb-0 fs-xsm">
                                <b>5 </b>days
                            </p>
                            <div className="d-flex gap-1 align-items-center">
                                <span className="badge time-badge rounded-circle p-2 text-center bg-danger">1</span>:
                                <span className="badge time-badge rounded-circle p-2 text-center bg-danger">1</span>:
                                <span className="badge time-badge rounded-circle p-2 text-center bg-danger">1</span>
                            </div>
                        </div>
                        <div className="prod-count pb-4">
                            <p className='pt-3 fs-xsm text-muted mb-2'>Products: 5</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" area-valuemax="100"></div>
                            </div>
                        </div>
                        <Link><button type="button" className="btn darkButton py-1 py-sm-2 px-3 px-sm-4 rounded-pill">Buy Now</button></Link>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default SpecialProducts