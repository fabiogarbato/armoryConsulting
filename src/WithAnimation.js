import React from 'react';
import useOnScreen from './useOnScreen'; 

const WithAnimation = ({ children, threshold = 0.1 }) => {
    const [ref, visible] = useOnScreen({ threshold });

    const animationClass = visible ? 'animated' : '';

    const childrenWithAnimation = React.Children.map(children, child =>
        React.cloneElement(child, {
            className: `${child.props.className} ${animationClass}`,
        })
    );

    const style = {
        color: visible ? '#ff7300' : 'transparent',
        transition: 'color 1s ease',
        display: 'flex',  
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
    };

    return <div ref={ref} style={style}>{childrenWithAnimation}</div>;
};


export default WithAnimation;
