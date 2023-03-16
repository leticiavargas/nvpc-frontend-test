import { useMemo } from 'react';
import './styles.scss';

function Button({ className, disabled, children, ...otherProps}) {
  const buttonClassName = useMemo(() => (
    `button ${className ? className : ''}`
  ), [className]);

  return(
    <button className={buttonClassName} disabled={disabled} { ...otherProps } >
      {children}
    </button>
  )
}

export default Button;