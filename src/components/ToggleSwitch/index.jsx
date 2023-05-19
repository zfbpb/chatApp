// https://www.npmjs.com/package/react-switch

import { useState } from 'react';
import ReactSwitch from 'react-switch';

const ToggleSwitch = ({checked, handleChange}) => {
  return (
    <ReactSwitch
      checked={checked}
      onChange={handleChange}
      onColor="#999"
      offColor="#999"
      onHandleColor="#66D386"
      offHandleColor="#66D386"
      handleDiameter={30}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0 1px 5px rgba(0, 0, 0, 0.6)"
      height={20}
      width={48}
    />
  );
}

export default ToggleSwitch;
