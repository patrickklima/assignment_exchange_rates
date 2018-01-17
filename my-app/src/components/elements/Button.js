import React from 'react';

const Button = (props) => {
  const {size, color, children, type} = props;
  const sizeClass = size ? `btn-${size}` : '';
  const onClick = props.onClick || function(){};
  const name = props.name || "";

  return (
    <button
      onClick={e => onClick(e, name)}
      type={type}
      className={`btn btn-${color} ${sizeClass}`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  color: 'default',
  children: 'Submit',
};

export default Button;