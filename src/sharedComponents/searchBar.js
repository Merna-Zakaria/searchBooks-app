import React from "react";
import { onFetchSearchResult } from "../store/actions/";
import { connect } from "react-redux";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    searchBox: ""
  };

  getSearchResult = (value, e) => {
    e.preventDefault();
    this.props.onFetchSearchResult(value);
    // console.log(value, this.props)
  };

  handleChange = e => {
    return this.setState({ searchBox: e.target.value });
  };

  render() {
    console.log(this.state.searchBox, this.props.searchResult);
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <form
            className="form-inline"
            onSubmit={e => {
              this.getSearchResult(this.state.searchBox, e);
            }}
          >
            <input
            id='searchInput'
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.handleChange}
              value={this.state.searchBox}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  //  console.log('state resulted from search', state)
  return { searchResult: state.searchResult };
};

export default connect(
  mapStateToProps,
  { onFetchSearchResult }
)(SearchBar);
// export { SearchBar}

// class SearchBar extends React.Component {
// //   Counter = ({ counter }) => (
// //     <div>
// //       <p>{counter}</p>
// //     </div>
// //   );

//   render() {
//     return <div><Counter counter='1'/></div>;
//   }
// }

// export default SearchBar;

// export const Counter = ({ counter }) => (
//   <div>
//     <p>{counter}</p>
//   </div>
// );
