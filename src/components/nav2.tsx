import React, { Fragment, useState } from "react";
import SideNav from "./SideNav";
import { Transition } from "react-transition-group";
import HamburgerButton from "./HamburgerButton";

const NavBelow = () => {
    const [navOpen, setNavOpen] = useState(false);
    const openNav = () => {
        setNavOpen(true);
    };
    const closeNav = () => {
        setNavOpen(false);
    };
    return (
        <>
            <div className="nav-below">
                <HamburgerButton click={openNav} />
                <Transition
                    in={navOpen}
                    timeout={300}
                    mountOnEnter
                    unmountOnExit
                >
                    {(state) => {
                        return (
                            <>
                                <SideNav state={state} />
                                <div
                                    className="overlay"
                                    style={
                                        state === "entering"
                                            ? { animation: "show .3s forwards" }
                                            : state === "entered"
                                            ? { opacity: "1" }
                                            : {
                                                  animation:
                                                      "show .3s reverse forwards",
                                              }
                                    }
                                    onClick={closeNav}
                                ></div>
                                <div
                                    className="closeBtn"
                                    style={
                                        state === "entering"
                                            ? { animation: "show .3s forwards" }
                                            : state === "entered"
                                            ? { opacity: "1" }
                                            : {
                                                  animation:
                                                      "show .3s reverse forwards",
                                              }
                                    }
                                    onClick={closeNav}
                                >
                                    &times;
                                </div>
                            </>
                        );
                    }}
                </Transition>
                <a className="nav-link" href="/">
                    Today's Deals
                </a>
                <a className="nav-link" href="/">
                    Customer Service
                </a>
                <a className="nav-link" href="/">
                    Registry
                </a>
                <a className="nav-link nav-links-right" href="/">
                    Shop deals in Electronics
                </a>
            </div>
        </>
    );
};

export default NavBelow;
