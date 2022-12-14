import React from "react";

const HamburgerButton = (props: any) => {
    return (
        <button className="side-nav-btn" onClick={props.click}>
            <i className="fa fa-bars" aria-hidden="true"></i> All
        </button>
    );
};

export default HamburgerButton;
