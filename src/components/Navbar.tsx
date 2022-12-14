import location from "../images/location.svg";
import cart from "../images/shopping-cart.svg";
import NavBelow from "./nav2";

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <h2 className="nav-button">logo</h2>
                <div className="location-container">
                    <button className="nav-button">
                        Deliver to john
                        <img
                            className="location-icon"
                            src={location}
                            alt="location"
                        />
                        <h4 className="nav-country-name">Pakistan</h4>
                    </button>
                </div>
                <div className="nav-input">
                    <div className="nav-search-dropdown-cart">
                        <button className="nav-search-scope">All</button>
                    </div>
                    <input type="search" placeholder="type to search" />
                    <button className="nav-search-btn" type="submit">
                        <i
                            className="fa fa-search icon-serach"
                            aria-hidden="true"
                        ></i>
                    </button>
                </div>
                <h5 className="nav-button">flag</h5>
                <button className="nav-button">
                    hello, sign in <h3>Account & Lists</h3>
                </button>
                <button className="nav-button">
                    Returns <h3>& Orders</h3>
                </button>
                <button className="cart nav-button">
                    <img className="cart-icon" src={cart} alt="shoping-cart" />
                    <h3 className="cart-text">Cart</h3>
                </button>
            </div>
            <NavBelow />
        </>
    );
};

export default Navbar;
