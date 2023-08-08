import React from 'react'

// props là 1 object 
function IconSizeBigger({ size = "16px", ...rest }) {

    return (
        <i {...rest} style={{ fontSize: size }}></i>
    )
}

export default IconSizeBigger