import React from 'react';
import PropTypes from 'prop-types';

import ShowDetails from "./ShowDetails";
import EpisodesList from './EpisodesList';
import ShowInfo from "./ShowInfo";
import Header from "./Header";
class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: {},
            showId: props.match.params.showId || null,
            currentEpisodesList: []
        }
    }

    componentDidMount() {
        fetch(`http://api.tvmaze.com/shows/${this.state.showId}`).then(res => res.json())
            .then(showDetails => this.setState({
                showDetails
            }));

        fetch(`http://api.tvmaze.com/shows/${this.state.showId}/episodes`).then(res => res.json())
            .then(currentEpisodesList => this.setState({
                currentEpisodesList: currentEpisodesList
            }));
    }

    render() {
        const {showDetails, currentEpisodesList, showId} = this.state;
        if (Object.entries(showDetails).length === 0 && showDetails.constructor === Object) {
            return (
                <div>No show id</div>
            )
        }
        return (
            <div>
                <Header urlData={this.props} searchTerm={this.props.location.searchTerm}/>
                <ShowDetails showDetails={showDetails}/>
                <ShowInfo showDetails={showDetails}/>
                {currentEpisodesList.length > 0 ?
                    <EpisodesList searchTerm={this.props.location.searchTerm} showId={showId} currentEpisodesList={currentEpisodesList}/>
                    : null
                }
            </div>
        )
    }
}

Show.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string,
        url: PropTypes.string,
        isExact: PropTypes.bool,
        params: PropTypes.shape({
            showId: PropTypes.string.isRequired
        })
    }),
    currentEpisodesList: PropTypes.array
};
export default Show;
