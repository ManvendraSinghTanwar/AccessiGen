import React from 'react';

const Button = ({ children, asChild, className }) => {
  const Component = asChild ? 'div' : 'button';
  return (
    <Component className={`button ${className}`}>
      {children}
    </Component>
  );
};

export default Button;
