"use client";
import React, { useState } from "react";
import three from "../../../public/three.jpg";
import Image from "next/image";
import "./Accordion.css";
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion" id="qna">
      <div className="acc_one">
        <h1 >Frequently asked questions</h1>
        {items.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div
              className={`accordion-title ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {item.title}
            </div>
            {activeIndex === index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
      <div className="acc_two">
        <div className="accordion_img_con">
          <Image src={three} className="accordion_right_main_img" />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
