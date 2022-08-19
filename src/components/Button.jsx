import React from 'react';

import './Button.css';

const Button = ({children, OnClick}) => {
    return ( 
        <button onClick={OnClick} className='button'>
            {children}
        </button>
     );
}
 
export default Button;