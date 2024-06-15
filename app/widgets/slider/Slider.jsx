// Slider.js
import "./slider.css";

const Slider = ({ items, width, height, quantity, reverse }) => {
  const sliderStyle = {
    "--width": width,
    "--height": height,
    "--quantity": quantity,
  };

  return (
    <div
      className="slider"
      style={sliderStyle}
      reverse={reverse ? "true" : "false"}
    >
      <div className="list">
        {items.map((item, index) => (
          <div key={index} className="item" style={{ "--position": index + 1 }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
