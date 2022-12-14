import React from "react";

// interface clickEvent extends MouseEvent<HTMLElement> {
//     click: string;
// }

const SideNav = (props: any) => {
    return (
        <div
            className="side-nav"
            style={
                props.style === "entering"
                    ? { animation: "moveSideBar .3s forwards" }
                    : props.state === "entered"
                    ? { transform: "translateX(-0px)" }
                    : { animation: "moveSideBar .3s reverse forwards" }
            }
        >
            <div className="sideNavHeader">
                <i className="fas fa-user-circle"></i>Hello, Sign In
            </div>
        </div>
    );
};

export default SideNav;
