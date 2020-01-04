import React from "react";
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import Utilities from "../utilities/Utilities";

const SearchResultsList = props => (
    <div className="search-results-list">
        <h2>Search results</h2>
        <ul>
            {props.results.map(item => (
                <li key={item.show.id}>
                    <h2>{item.show.name}</h2>
                    <div className="show-details-container">
                        {item.show.image
                            ? <img src={item.show.image.medium} alt=""/>
                            : null
                        }
                        {Utilities.parseHTML(item.show.summary)}
                    </div>
                    <Link to={{
                        pathname: `/show/${item.show.id}`,
                        searchTerm: props.searchTerm
                    }}>
                        Go to details ...
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

SearchResultsList.propTypes = {
    results: PropTypes.array
};

export default SearchResultsList;