import React from "react";
import SearchResultsList from "./SearchResultsList";
import Header from "./Header";

class ShowsSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: this.props.location.searchTerm || '',
            results: []
        };
        this.term = React.createRef();
    }

    componentDidMount() {
        if (this.state.searchTerm.length > 0) {
            fetch(`http://api.tvmaze.com/search/shows?q=${this.state.searchTerm}`).then(res => res.json())
                .then(results => this.setState({results}))
        }
    }

    search = e => {
        e.preventDefault();
        if (this.term.current.value.length === 0) return null;

        const searchTerm = this.term.current.value;
        fetch(`http://api.tvmaze.com/search/shows?q=${searchTerm}`).then(res => res.json())
            .then(results => this.setState({
                results: results,
                searchTerm: searchTerm
            }));
    };

    render() {
        const {results} = this.state;
        const resultsList = results.length > 0
            ? <SearchResultsList searchTerm={this.state.searchTerm} results={results}/>
            : null;
        const placeholder = this.state.searchTerm.length > 0
            ? this.state.searchTerm
            : "Search show ...";

        return (
            <>
                <Header urlData={this.props} searchTerm={this.state.searchTerm}/>
                <form onSubmit={this.search}>
                    <div className="search">
                        <input type="text" ref={this.term} className="searchTerm" placeholder={placeholder}/>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"/>
                        </button>
                    </div>
                </form>
                {resultsList}
            </>
        )
    }
}

export default ShowsSearch;