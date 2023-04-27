import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import Blogpost from '../components/Blogpost';
import ProductCard from '../components/ProductUtilities/ProductCard';
import SpecialProducts from '../components/ProductUtilities/SpecialProducts';
import PopularProductCard from '../components/ProductUtilities/PopularProductCard';
import FamousCard from '../components/FamousCard';
import SingleCategory from '../components/SingleCategory';
import mainBanner1 from "../images/main-banner-1.jpg"
import catBanner1 from "../images/catbanner-01.jpg"
import catBanner2 from "../images/catbanner-02.jpg"
import catBanner3 from "../images/catbanner-03.jpg"
import catBanner4 from "../images/catbanner-04.jpg"
import brandImg1 from "../images/brand-01.png"
import brandImg2 from "../images/brand-02.png"
import brandImg3 from "../images/brand-03.png"
import brandImg4 from "../images/brand-04.png"
import brandImg5 from "../images/brand-05.png"
import brandImg6 from "../images/brand-06.png"
import brandImg7 from "../images/brand-07.png"
import banner1 from "../images/banner1.png"
import banner2 from "../images/banner2.png"
import banner4 from "../images/banner4.png"
import Container from '../components/Container';
import tv from "../images/Blinken TV  65 inch (1).jpg"
import iron from "../images/amaze-gray2.jpg"
import { services } from '../utilities/ServiceData';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Grid, Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/grid";
import "swiper/css/pagination";

const Home = () => {

    return (
        <>
        <Container class1={"py-1"}>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://trapthedeal.dousoftit.com/uploads/slider/New%20banner-02-min.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://trapthedeal.dousoftit.com/uploads/slider/New%20banner-03.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://trapthedeal.dousoftit.com/uploads/slider/New%20banner-02-min.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </Container>
            <Container class1={"py-4"}>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="main-banner position-relative mb-4">
                            <img src={tv} className="img-fluid rounded-3 w-100" alt="main banner" />
                            <div className="main-banner-content position-absolute col-md-12 ">
                                <span className='main-banner-span fs-xsm text-white'>Blinken Product</span>
                                <h4 className='main-banner-title fs-xl py-md-3 text-white col-sm-6 col-md-12'>iPBlinken 65 Inch 4K HD Smart Android LED TV (CWT6500TD)</h4>
                                <p className='main-banner-details fs-sm text-white'>₹ 38,950<br/></p>
                                <Link><button type="button" className="btn darkButton py-1 py-sm-2 px-3 px-sm-4 rounded-pill">Buy Now</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="small-banner-wrapper row">
                            <div className="col-6 col-md-3 col-lg-6 mb-4">
                                <div className="small-banner position-relative">
                                    <img src={catBanner1} className="img-fluid rounded-3 w-100" alt="small banner" />
                                    <div className="small-banner-content position-absolute">
                                        <span className='small-banner-span fs-xsm'>BEST DEALS</span>
                                        <h4 className='small-banner-title py-sm-2 fs-md'>Laptops Max</h4>
                                        <p className='small-banner-details d-none d-sm-block d-md-none d-lg-block'>From ₹999.00 <br></br>or ₹41.62/mo.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-6 mb-4">
                                <div className="small-banner position-relative">
                                    <img src={catBanner2} className="img-fluid rounded-3 w-100" alt="small banner" />
                                    <div className="small-banner-content position-absolute">
                                        <span className='small-banner-span fs-xsm'>BEST DEALS</span>
                                        <h4 className='small-banner-title py-sm-2 fs-md'>Laptops Max</h4>
                                        <p className='small-banner-details d-none d-sm-block d-md-none d-lg-block'>From ₹999.00 <br></br>or ₹41.62/mo.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-6 mb-4">
                                <div className="small-banner position-relative">
                                    <img src={catBanner3} className="img-fluid rounded-3 w-100" alt="small banner" />
                                    <div className="small-banner-content position-absolute">
                                        <span className='small-banner-span fs-xsm'>BEST DEALS</span>
                                        <h4 className='small-banner-title py-sm-2 fs-md'>Laptops Max</h4>
                                        <p className='small-banner-details d-none d-sm-block d-md-none d-lg-block'>From ₹999.00 <br></br>or ₹41.62/mo.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-6 mb-4">
                                <div className="small-banner position-relative">
                                    <img src={catBanner4} className="img-fluid rounded-3 w-100" alt="small banner" />
                                    <div className="small-banner-content position-absolute">
                                        <span className='small-banner-span fs-xsm'>BEST DEALS</span>
                                        <h4 className='small-banner-title py-sm-2 fs-md'>Laptops Max</h4>
                                        <p className='small-banner-details d-none d-sm-block d-md-none d-lg-block'>From ₹999.00 <br></br>or ₹41.62/mo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
           
           {/* <Container class1={"pt-md-3 pb-3 gray-bg"}>
                <div className="categories bg-white px-4 py-3 br-shadow">
                    <Swiper
                        slidesPerView={2}
                        grid={{
                            rows: 2,
                            fill: "row",
                        }}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Grid]}
                        className="mySwiper"
                        breakpoints={{
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            // when window width is >= 1080px
                            1080: {
                                width: 1080,
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide> <SingleCategory /> </SwiperSlide >
                        <SwiperSlide> <SingleCategory /> </SwiperSlide >
                         <SwiperSlide> <SingleCategory /> </SwiperSlide >
                        <SwiperSlide> <SingleCategory /> </SwiperSlide >
                        <SwiperSlide> <SingleCategory /> </SwiperSlide >
                        <SwiperSlide> <SingleCategory /> </SwiperSlide >
                        <SwiperSlide> <SingleCategory /> </SwiperSlide >
                        <SwiperSlide> <SingleCategory /> </SwiperSlide >
                        <SwiperSlide> <SingleCategory /> </SwiperSlide >
                        <SwiperSlide> <SingleCategory /> </SwiperSlide >
                        <SwiperSlide> <SingleCategory /> </SwiperSlide >
                        <SwiperSlide> <SingleCategory /> </SwiperSlide >
                        <SwiperSlide> <SingleCategory /> </SwiperSlide >
                        <SwiperSlide> <SingleCategory /> </SwiperSlide >
                        <SwiperSlide> <SingleCategory /> </SwiperSlide >
                        <SwiperSlide> <SingleCategory /> </SwiperSlide > 
                    </Swiper>
                </div>
            </Container>*/}
            <Container class1={"py-3 gray-bg"}>
                <div className="marquee-wrapper bg-white br-shadow">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee className='d-flex g-2' gradient={false} pauseOnHover={true} speed={15}>
                                    <div className="marquee-img mx-5 img-fluid">
                                        <img src={brandImg1} alt="" />
                                    </div>
                                    <div className="marquee-img mx-5 img-fluid">
                                        <img src={brandImg2} alt="" />
                                    </div>
                                    <div className="marquee-img mx-5 img-fluid">
                                        <img src={brandImg3} alt="" />
                                    </div>
                                    <div className="marquee-img mx-5 img-fluid">
                                        <img src={brandImg4} alt="" />
                                    </div>
                                    <div className="marquee-img mx-5 img-fluid">
                                        <img src={brandImg5} alt="" />
                                    </div>
                                    <div className="marquee-img mx-5 img-fluid">
                                        <img src={brandImg6} alt="" />
                                    </div>
                                    <div className="marquee-img mx-5 img-fluid">
                                        <img src={brandImg7} alt="" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1={"py-3 gray-bg"}>
                <div className="product-wrapper">
                    <div className="section-title fs-lg mb-4">Featured Collection</div>
                    <div className="row g-3">
                        {/* <div className="row row-cols-2"> */}
                        <ProductCard />
                    </div>
                </div>
            </Container>
            <Container class1={"py-3 gray-bg"}>
                <div className="famous-wrapper">
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
                        <FamousCard color={"dark"} />
                        <FamousCard color={"white"} />
                        <FamousCard color={"white"} />
                        <FamousCard color={"white"} />
                    </div>
                </div>
            </Container>
            <Container class1={"py-3 gray-bg"}>
                <div className="product-details-wrapper">
                    <div className="section-title fs-lg mb-4">Special Products</div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                        <SpecialProducts />
                    </div>
                </div>
            </Container>
            <Container class1={"py-3 gray-bg"}>
                <div className="popular-product-wrapper">
                    <div className="section-title fs-lg mb-4">Our Featured Products</div>
                </div>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-3">
                    <ProductCard />

                </div>
            </Container>
            {/* <Container class1={"py-3 gray-bg"}>
                <div className="blog-wrapper">
                    <div className="section-title fs-lg mb-4">Blog Section</div>
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                        <Blogpost />
                        <Blogpost />
                        <Blogpost />
                        <Blogpost />
                    </div>
                </div>
            </Container> */}
             <Container class1={"py-3 gray-bg"}>
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-12">

                        <div className="services d-flex align-items-center py-3">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                className="mySwiper"
                                breakpoints={{
                                    // when window width is >= 640px
                                    640: {
                                        width: 640,
                                        slidesPerView: 2,
                                    },
                                    // when window width is >= 768px
                                    768: {
                                        width: 768,
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {
                                    services?.map((service, index) => {
                                        return (
                                            <SwiperSlide className="single-service d-flex gap-5 justify-content-center" key={index}>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <img src={service.image} alt="" className="service-img p-3" />
                                                    <div className="service-details gap-15">
                                                        <div className="service-title fs-md py-1">{service.title}</div>
                                                        <p className="service-des mb-0 fs-xsm">{service.tagline}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    )
}

export default Home
