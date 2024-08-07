import PropTypes from "prop-types";
import "../../styles/top-nav-bar.css";

export default function IconBtn(props) {
  let img = (
    <svg
      viewBox="0 0 24 24"
      fill="rgb(95,99,104)"
      className={`top-nav-bar-icon`}
    >
      <path d={props.path} />
      {props.twoPath ? <path d={props.path2} /> : ""}
    </svg>
  );

  if (props.isImg) {
    img = <img src={props.img} alt="user-profile" className="user-profile" />;
  }
  return (
    <button className={`top-nav-bar-btn ${props.isOff ? "off" : ""}`}>
      {img}
      <span className="top-nav-bar-tool-tip">{props.toolTip}</span>
    </button>
  );
}

IconBtn.propTypes = {
  path: PropTypes.string.isRequired,
  twoPath: PropTypes.bool,
  path2: PropTypes.string,
  isImg: PropTypes.bool,
  toolTip: PropTypes.string,
  isOff: PropTypes.bool,
};
