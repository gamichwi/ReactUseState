import React, { Component } from "react";
import axios from 'axios';

class SearchList2 extends Component {
  state = {
    hits: []
  };

async componentDidMount() {
    const response = await axios.get('http://hn.algolia.com/api/v1/search?query=react');
    console.log(response);
    if (response.data) {
        this.setState({
            hits: response.data.hits
        })
    }
}

renderList() {
    if(this.state.hits.length > 0){
        return this.state.hits.map(hit => {
            return <li key={hit.objectID}>{hit.title}</li>
        })
    }
    return [];
}

  render() {
    return (
      <React.Fragment>
          <div className="card">
        <h2>Search List</h2>
        <ul>
            {this.renderList()}
        </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchList2;
