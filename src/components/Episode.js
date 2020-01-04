import React from "react";
import PropTypes from 'prop-types';
import Utilities from "../utilities/Utilities";
import Header from "./Header";

class Episode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe: null
        }
    }

    componentDidMount() {
        const {showId, seasonId, episodeNumber} = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${showId}/episodebynumber?season=${seasonId}&number=${episodeNumber}`)
            .then(res => res.json())
            .then(recipe => this.setState({recipe}))
    }

    render() {
        if (!this.state.recipe) {
            return (
                <div>Loading</div>
            )
        }
        const {name, airdate, airtime, season, runtime, number, image, summary} = this.state.recipe;

        return (
            <div className="episode">
                <Header urlData={this.props} searchTerm={this.props.location.searchTerm}/>

                <h2>{name ? name : ''}</h2>
                <div className="episode-details">
                    {image
                        ? <img src={image.medium} alt={name}/>
                        : null
                    }
                    {Utilities.parseHTML(summary)}
                    <ul>
                        <li><b>Air date: </b>{airdate} at {airtime}
                        </li>
                        <li><b>Runtime: </b> {runtime} minutes.
                        </li>
                        <li><b>Number: </b> Season {season}, Episode {number}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

Episode.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isExact: PropTypes.bool,
        params: PropTypes.shape({
            showId: PropTypes.string.isRequired,
            seasonId: PropTypes.string.isRequired,
            episodeNumber: PropTypes.string.isRequired
        })
    }).isRequired,

};

export default Episode;