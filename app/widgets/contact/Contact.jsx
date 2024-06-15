import Image from "next/image";
import boy from "../../../public/boy.jpg"
import "./contact.css"

const Contact = () => {
  return (
    <div className="contact_main" id="contact">
      <div className="container">
        <div className="contact_title">
          <p>Contact</p>
          <div></div>
        </div>
        <div className="contact_one">
          <div className="contact_image">
          <Image src={boy} className="contact_main_img" />
          </div> 
          <h1>Let's work</h1>
        </div>
        <div className="contact_two">
          <h1>together</h1>
        </div>
        <div className="contact_three">
          <div className="contact_getintouch_circle">
            <p>Get in touch</p>
          </div>
        </div>
        <div className="contact_bt_div">
            <button className="button-89">Don't be shy! Hit me up!</button>
            <button className="button-89">tradingboss@gmail.com</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
