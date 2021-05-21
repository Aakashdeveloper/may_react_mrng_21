import React from 'react';

const Footer = (props) => {
    console.log(props)
    return(
        <>
            <hr/>
            <center>
            <h2>Developer Funnel {props.year} {props.month}</h2>
            </center>
        </>
    )
}

export default Footer;