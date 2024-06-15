import { FaLongArrowAltRight } from "react-icons/fa";
import "./tell.css";

const Tel = () => {
  return (
    <div className="tell">
      <div className="tell_con">
        <div className="tell_left">
          <p className="tell_p_one">
            Join our platform where your desires become reality
          </p>
          <p className="tell_p_two">
            We currently offer avenues for connection where you can join our
            Telegram community and subscribe to our YouTube channel.
          </p>
        </div>
        <div className="tell_right">
          <a href="https://t.me/tradingshort23" target="_blank">
            <button className="left_one_bt button-89">
              <span>Telegram</span>
              <FaLongArrowAltRight className="left_bt_arrow" />
            </button>
          </a>
          <a
            href="https://www.youtube.com/@TRADINGBOSS9/featured"
            target="_blank"
          >
            <button className="left_one_bt button-89">
              <span>Youtube</span>
              <FaLongArrowAltRight className="left_bt_arrow" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tel;
