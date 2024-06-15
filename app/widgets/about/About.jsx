import two from "../../../public/two.jpg";
import Image from "next/image";
import "./about.css";

const about = () => {
  return (
    <div className="about" id="about">
      <div className="about_left">
        <div className="about_left_image_con">
          <Image src={two} className="about_left_main_img" />
        </div>
      </div>
      <div className="about_right">
        <div className="about_right_con">

        <p>
          ◈ We guarantee people profits in their pockets by the end of the day.
        </p>
        <p>
          ◈ Receive market signals early and stay ahead of the curve every day.
        </p>
        <p>
          ◈ Unlike traders who hide, we share strategies for transparency and
          growth.
        </p>
        <p>
          ◈ Maximize potential with strategies designed for your consistent
          success.
        </p>
        </div>
      </div>
    </div>
  );
};

export default about;
