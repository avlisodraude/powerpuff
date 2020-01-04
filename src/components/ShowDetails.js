import React from "react";
import PropTypes from 'prop-types';

import Utilities from "../utilities/Utilities";

const ShowDetails = props => (
    <div>
        <h1>{props.showDetails.name}</h1>
        <div className="show-details-container">
            {props.showDetails.image
                ? <img src={props.showDetails.image.medium} alt={props.showDetails.name}/>
                : null
            }
            {Utilities.parseHTML(props.showDetails.summary)}
        </div>
    </div>
);

ShowDetails.propTypes = {
    showDetails: PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string,
        name: PropTypes.string.isRequired,
        type: PropTypes.string,
        language: PropTypes.string,
        genres: PropTypes.array,
        status: PropTypes.string,
        runtime: PropTypes.number,
        premiered: PropTypes.string,
        officialSite: PropTypes.string,
        image: PropTypes.object,
        summary: PropTypes.string,
        updated: PropTypes.number,
        externals: PropTypes.object,
        schedule: PropTypes.shape({
            time: PropTypes.string,
            days: PropTypes.array
        }),
        network: PropTypes.object,
        rating: PropTypes.shape({
            average: PropTypes.number
        }),
        _links: PropTypes.shape({
            self: PropTypes.object,
            previousepisode: PropTypes.object
        })
    }),
};
export default ShowDetails;