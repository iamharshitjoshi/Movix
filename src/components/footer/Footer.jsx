import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Watch trailers, browse movies and actors, save your's favorite movies.
                Sort the movies by top-rated, In theaters, most popular and more...
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://www.facebook.com">
                            <FaFacebookF />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.instagram.com/it_s__harshit/">
                            <FaInstagram />
                        </a> 
                    </span>
                    <span className="icon">
                        <a href="https://twitter.com/Harshit21104110">
                            <FaTwitter />
                        </a> 
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/harshit-joshi-b147841ba/">
                            <FaLinkedin />
                        </a>  
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
