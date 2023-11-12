import Image from "next/image";
import Style from "./StoryCard.module.scss";
import Icon from "../../Layout/Icons";
import { useWindowSize } from "../../../logic/useDimension";
import Assets from "../../Layout/CommonLayout/assets";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
const StoryCard = ({ data }) => {
  const { width } = useWindowSize();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <article className={Style.stories_card}>
        <div className={Style.stories_card_img} onClick={handleShow}>
          <div className={Style.img}>
            <Image
              src={data?.img}
              fill
              alt={data?.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className={Style.play_icon}>
              <Image
                src={Assets.play_icon}
                fill
                alt="play_icon"
                className={Style.play_icon_logo}
              />
              {/* <Image
                src={Assets.play_icon_hover}
                fill
                alt="play_icon"
                className={Style.play_icon_hover}
              /> */}
              <button className={Style.play_btn}>
                <span>Play</span>
              </button>

            </div>
          </div>
        </div>
        <div className={Style.stories_card_info}>
          <h4>{data?.title}</h4>
          <h6 className={` ${Style.name}`}>Mr. Saranjith</h6>
          <span className={Style.place}>Kent Baywatch Suites, Thrissur</span>
        </div>
      </article>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className={Style.video_modal}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className={Style.video_wrap}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/lRfQzjeLOwM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StoryCard;
