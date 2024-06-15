import { FaLongArrowAltRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import one from "../../../public/one.jpg";
import "./home.css";
const Home = () => {
  return (
    <div className="home" id="home">
      <div className="left">
        <p className="left_span_one">The journey to wealth starts now.</p>
        <p className="left_p_one">
          We pour endless hours into perfecting trading tactics that can enhance
          your growth and learning by 50x.
        </p>
        <a href="https://t.me/tradingshort23" target="_blank">
          <button className="left_one_bt button-89">
            <span>Join Telegram Now</span>
            <FaLongArrowAltRight className="left_bt_arrow" />
          </button>
        </a>
        <p className="left_p_two"> 5 Stars rating by 10,000+ clients.</p>
        <p className="left_stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </p>
      </div>
      <div className="right">
        <div className="right_image_con">
          <Image src={one} className="right_main_img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
