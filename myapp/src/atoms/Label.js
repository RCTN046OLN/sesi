import PropTypes from "prop-types";

function Label(props) {
  return <span style={{ color: props.color }}>{props.title}</span>;
}

Label.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};

export default Label;
