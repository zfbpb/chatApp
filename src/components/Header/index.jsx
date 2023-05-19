import ToggleSwitch from "../ToggleSwitch"
import './header.scss'

const Header = ({checked, handleChange}) => {
  return(
    <div className="header">
      <ToggleSwitch checked={checked} handleChange={handleChange}/>
    </div>
  )
}

export default Header
