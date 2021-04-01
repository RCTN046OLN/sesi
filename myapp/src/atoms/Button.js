import PropTypes from "prop-types";

function Button(props) {
  return (
    <button
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        padding: "10px",
      }}
    >
      {props.title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
