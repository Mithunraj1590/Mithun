import Image from "next/image";
import Style from "./TestimonialTextCard.module.scss";
import Assets from "../../Layout/CommonLayout/assets";
import React, { useState } from "react";
const TestimonialTextCard = ({ props }) => {

  return (
    <div className={`${Style.testimonial} position-relative`}>
      <div className={Style.testimonial_content}>
        <p>{props?.description}</p>
      </div>
      <div className={`${Style.testimonial_author} d-flex  align-items-center`}>
        <figure className="position-relative mb-0">
          <Image src={props?.img} alt="entraprenour" width={55} height={55} />
        </figure>
        <div>
          <h3 className="ttl-18 mb-0">{props?.name}</h3>
          <span className="ttl-16">{props?.position}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialTextCard;
