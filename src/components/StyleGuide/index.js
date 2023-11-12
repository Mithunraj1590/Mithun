import Style from "./StyleGuide.module.scss";
import Assets from "../Layout/CommonLayout/assets";
import Link from "next/link";
import Icon from "../Layout/Icons";
import Image from "next/image";
import { Ratio } from "react-bootstrap";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const StyleGuide = ({ props }) => {
  const parse = require("html-react-parser");

  const links = [
    {
      title: "Home Page",
      link: "/",
      status: "Completed"
    },
    {
      title: "About Us",
      link: "aboutus",
      status: "Completed"
    },
    {
      title: "Project Listings",
      link: "project-list",
      status: "Completed"
    },
    {
      title: "Project Detail Page",
      link: "project-details",
      status: "Completed"
    },
    {
      title: "Testimonials",
      link: "testimonials",
      status: "Completed"
    },
    {
      title: "Booking List",
      link: "booking-list",
      status: "Completed"
    },
    {
      title: "Booking Online",
      link: "booking-details",
      status: "Completed"
    },
    {
      title: "Insights list",
      link: "insights",
      status: "Completed"
    },
    {
      title: "Insights Details",
      link: "insights-details",
      status: "Completed"
    },
    {
      title: "Gallery",
      link: "gallery",
      status: "Completed"
    },
    {
      title: "Gallery Details",
      link: "gallery-details",
      status: "Completed"
    },

    {
      title: "Contact Us",
      link: "contact",
      status: "Completed"
    },
    {
      title: "Careers",
      link: "career",
      status: "Completed"
    },
    {
      title: "Career Details",
      link: "career-details",
      status: "Completed"
    },
    {
      title: "Privacy and Policy",
      link: "informationpage",
      status: "Completed"
    },
    {
      title: "Promotions Listing",
      link: "promotions",
      status: "Completed"
    },
    {
      title: "Promotions Details",
      link: "promotion-details",
      status: "Completed"
    },
    {
      title: "Emi Calculator",
      link: "emi",
      status: "Completed"
    },
    {
      title: "FAQ",
      link: "faq",
      status: "Completed"
    },





    {
      title: "Referal Page",
      link: "referal",
      status: "Completed"
    },
    {
      title: "Rentals & Resale Page",
      link: "rental",
      status: "Completed"
    },
    {
      title: "Landing Page",
      link: "landing",
      status: "Completed"
    },
  ]
  const BASE_URL = process.env.BASE_URL;

  return (

    <section className="pt-5">
      <div className="container pt-5">

        <div className="col-lg-12">
          <div className={Style.card}>
            <div className={`h3 ${Style.card_head}`}>T O C</div>
            <div className={Style.card_body}>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Link</th>
                    {/* <th scope="col">Json Data</th> */}
                    <th scope="col">Status</th>

                  </tr>
                </thead>
                <tbody>
                  {links.map((item, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{item.title}</td>
                        <td>
                          <Link href={`${item.link}`} target={"_blank"}>/{item.link}</Link>
                        </td>
                        {/* <td>
                          <Link href={`${BASE_URL}${item.link}`} target={"_blank"}>{`${BASE_URL}${item.link}`}</Link>
                        </td> */}
                        <td>
                          {item.status}
                        </td>


                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>











        </div>



        <div className=" my-5 border p-4">
          <h1 className="mb-3">Buttons</h1>
          <div className="row">
            <div className="col-auto">
              <Link href="/" className="button button-outline-secondary ">
                <span>
                  button-outline-secondary
                  <span className="btn_arrow">
                    <Icon icon="arrow-right" size={17} />
                  </span>
                </span>
              </Link>
            </div>
            <div className="col-auto">
              <Link href="/" className="button button-primary">
                <span>
                  button-outline-secondary
                  <span className="btn_arrow">
                    <Icon icon="arrow-right" size={17} />
                  </span>
                </span>
              </Link>
            </div>

            <div className="col-auto">
              <Link href="/" className="button button-outline-secondary ">
                <span>
                  button-outline-secondary
                </span>
              </Link>
            </div>
            {/* <div className="col-auto">
              <Link href="/" className="button button-outline-light-secondary ">
                <span>
                  button-outline-light-secondary
                </span>
              </Link>
            </div> */}
            <div className="col-auto">
              <Link href="/" className="button button-primary">
                <span>
                  button-outline-primary
                </span>
              </Link>
            </div>

            {/* <div className="col-auto">
              <button className="buttonDownload">
                <svg xmlns="http://www.w3.org/2000/svg" width="13.002" height="16.838" viewBox="0 0 13.002 16.838">
                  <g id="Group_62049" data-name="Group 62049" transform="translate(-551.996 -5572.132)">
                    <g id="Group_62048" className="download line" data-name="Group 62048" transform="translate(552.5 5572.145)">
                      <line id="Line_2099" data-name="Line 2099" x2="12.207" transform="translate(0 16.075)" fill="none" stroke="#000" strokeWidth="1.5" />
                    </g>
                    <g id="Group_66997" className="download arrow" data-name="Group 66997">
                      <line id="Line_2100" data-name="Line 2100" x2="0.241" y2="13.153" transform="translate(558.346 5572.146)" fill="none" stroke="#000" strokeWidth="1.5" />
                      <path id="Path_107718" data-name="Path 107718" d="M-18155.312-15968.031l6.271,5.4,5.727-5.4" transform="translate(18707.799 21548.4)" fill="#02b38f" stroke="#fff" strokeLinejoin="bevel" strokeWidth="1.5" />
                    </g>
                  </g>
                </svg>
              </button>
            </div> */}

          </div>
        </div>


        <div className=" my-5 border p-4">
          <h1 className="mt-5 mb-4">Title</h1>

          <div className="ttl-20">.ttl-20</div>
          <div className="ttl-24">.ttl-24</div>
          <div className="ttl-30">.ttl-30</div>

          <div className="ttl-35">.ttl-35</div>
          <div className="ttl-40">.ttl-40</div>
          <div className="ttl-50">.ttl-50</div>
          <div className="ttl-60">.ttl-60</div>

        </div>

        <div className=" my-5 border p-4">
          <h1 className="mt-5 mb-4">Font Weight</h1>

          <h3 className="fw-300">.fw-300,.fw-light</h3>
          <h3 className="fw-400">.fw-400,.fw-normal</h3>
          <h3 className="font-500">.fw-500,.fw-medium</h3>
          <h3 className="fw-600">.fw-600,.fw-semi-bold</h3>
          <h3 className="fw-700">.fw-700,.fw-bold</h3>
        </div>



      </div>
    </section>

  );
};

export default StyleGuide;
