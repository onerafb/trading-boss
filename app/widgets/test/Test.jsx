import { FaStar } from "react-icons/fa";
import "./test.css";

const Test = () => {
  return (
    <div className="test" id="reviews">
      <p className="test_p_one">Testimonials</p>
      <p className="test_p_two">See the reviews from our satisfied clients</p>
      <div className="test_card_main_con">
        <div className="test_card_con">
          <div className="test_star_con">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="test_p_three">
            Since I became a part of Trading Boss, my trading journey has been
            extraordinary. The trading signals are spot on, and the support team
            is extremely helpful. They've Boosted my confidence and gains. Hats
            off to Trading Boss!
          </p>
          <p className="test_p_four">Alok Kapoor - Confidence Boosted</p>
        </div>
        <div className="test_card_con">
          <div className="test_star_con">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="test_p_three">
            Trading Boss has set a new benchmark for trading services. The
            support they offer is outstanding, and their trade signals are
            precise. I value their transparency and dependability, which have
            made trading enjoyable and profitable.
          </p>
          <p className="test_p_four">Vikram Poet - Outstanding Service</p>
        </div>
        <div className="test_card_con">
          <div className="test_star_con">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="test_p_three">
            As a newcomer to trading, I needed a platform that provided both
            guidance and dependable signals. Trading Boss has been my go-to
            choice. The support team patiently addresses all my questions, and
            the trade signals are easy to follow.
          </p>
          <p className="test_p_four">Ananya Reddy – Newbie's Best Ally</p>
        </div>
        <div className="test_card_con">
          <div className="test_star_con">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="test_p_three">
            Trading Boss has been a game-changer in my trading journey. Their
            trade signals are exceptionally precise, and the support team goes
            above and beyond.With Trading Boss, I've found a reliable partner in
            my financial journey.
          </p>
          <p className="test_p_four">Rohit Singh – Game-Changer</p>
        </div>
      </div>
    </div>
  );
};

export default Test;
