import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import "./telegram.css";
const Telegram = () => {
  return (
    <div className="tel" id="telegram">
      <div className="tel_con">
        <div className="tel_left">
          <p className="tel_p_one">
            "Success is built on acknowledging errors".
          </p>
          <p className="tel_p_two"> -- Glane Kerry</p>
          <p className="tel_p_three">Our Telegram group is</p>
          <p className="tel_p_three">your gateway to</p>
          <p className="tel_p_three">opportunities</p>
          <p className="tel_p_three">you need.</p>
          <p className="tel_p_four">
            We've dedicated years to mastering our fields, so you can learn
          </p>
          <p className="tel_p_five">
            everything you need from experienced professionals.
          </p>
          <a href="https://t.me/tradingshort23" target="_blank">
            <button className="button-89 tel_bt">
              <span>Join Telegram Now</span>
              <FaLongArrowAltRight className="left_bt_arrow" />
            </button>
          </a>
        </div>
        <div className="tel_right">
          <div className="tel_right_first_con">
            <div className="tel_right_sq_one">
              <BsGraphUp className="rel_right_card_icon" />
              <p className="tel_card_text_one">500+</p>
              <p className="tel_card_text_two">Active Users</p>
            </div>
            <div className="tel_right_sq_two">
              <TbUsers className="rel_right_card_icon" />
              <p className="tel_card_text_one">10K</p>
              <p className="tel_card_text_two">Happy Customers</p>
            </div>
          </div>
          <div className="tel_right_second_con">
            <div className="tel_right_sq_three">
              <FaStar className="rel_right_card_icon" />
              <p className="tel_card_text_one">1000+</p>
              <p className="tel_card_text_two">5 Star Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telegram;
