import React from "react";
import {NavLink} from "react-router-dom";

const Header = props => (
    <header>
        <div className="header-identity">
            <img src="/tv-shows-rtl.png" width="160px" height="100px" alt="RTL Testing"/>
            <h1>RTL favourite shows</h1>
        </div>

        <nav>
            <NavLink to={{
                pathname: "/",
                searchTerm: props.urlData.location.searchTerm
            }}>
                Home
            </NavLink>
            {props.urlData.match.params.episodeNumber
                ? <NavLink to={{
                    pathname: `/show/${props.urlData.match.params.showId}`,
                    searchTerm: props.urlData.location.searchTerm
                }}> Show details</NavLink>
                : null}
            {props.urlData.match.params.showId && !props.urlData.match.params.episodeNumber
                ? <span className="activePage"> Show details</span>
                : null
            }
            {props.urlData.match.params.showId && props.urlData.match.params.episodeNumber
                ? <span className="activePage"> Episode details</span>
                : null
            }
        </nav>
    </header>
);

export default Header;