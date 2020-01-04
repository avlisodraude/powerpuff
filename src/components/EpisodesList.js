import React from "react";
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import Utilities from "../utilities/Utilities";

const EpisodesList = (props) => (
    <div className="episodes-list">
        <h2>Episodes list</h2>
        <ul>
            {props.currentEpisodesList.map(item => (
                <li key={item.id}>
                    <h3>{item.name}</h3>
                    <div className="show-details-container">
                        {item.image
                            ? <img src={item.image.medium} alt={item.name}/>
                            : null
                        }
                        {Utilities.parseHTML(item.summary)}
                    </div>
                    <Link to={{
                        pathname : `/episode/${props.showId}/${item.season}/${item.number}`,
                        searchTerm : props.searchTerm
                    }}>
                        Go to episode ...
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

EpisodesList.propTypes = {
    showId: PropTypes.string.isRequired,
    currentEpisodesList: PropTypes.array.isRequired
};

export default EpisodesList;
