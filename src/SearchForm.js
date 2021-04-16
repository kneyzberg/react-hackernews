import React from "react";

class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {query: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let {getStories} = this.props;
    getStories(this.state.query);
  }

  handleChange(e){
    const {value} = e.target;
    this.setState(oldState => ({query: value}));
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="query">Search HackerNews:</label>
          <input onChange={this.handleChange} type="text" name="query" id="query" value={this.state.query}></input>
          <button type="submit">Search</button>
        </form>
      </div>
      
    )
  }
}

export default SearchForm;