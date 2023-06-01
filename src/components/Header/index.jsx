import ToggleSwitch from "../ToggleSwitch";
import PropTypes from "prop-types";
import "./header.scss";

const Header = ({ checked, handleChange }) => {
  return (
    <div className="header">
      <ToggleSwitch checked={checked} handleChange={handleChange} />
    </div>
  );
};

Header.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Header;
