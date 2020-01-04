import React from "react";
import PropTypes from 'prop-types';

const ShowInfo = (props) => (
    <div className="show-info-container">
        <h3>Show info</h3>
        <ul>
            {props.showDetails.network
                ? <li><b>Network: </b> {props.showDetails.network.name}</li>
                : null
            }
            <li>
                <b>Schedule: </b> {props.showDetails.schedule.days.map(day => day + ' ')} at {props.showDetails.schedule.time}
            </li>
            <li><b>Status: </b> {props.showDetails.status}</li>
            <li><b>Show type: </b> {props.showDetails.type}</li>
            <li><b>Genres: </b>{props.showDetails.genres.map(genre => genre + ' ')}</li>
            <li><b>Official site: </b> {props.showDetails.officialSite}</li>
            <li><b>Rating: </b> {props.showDetails.rating.average}</li>
        </ul>
    </div>
);
ShowInfo.propTypes = {
    showDetails: PropTypes.object.isRequired
};

export default ShowInfo;