import axios from "axios";
import SearchForm from "./SearchForm";
import Story from "./Story";
import React from "react";


const BASE_URL = `https://hn.algolia.com/api/v1/search?query=`

class StoryList extends React.Component{
  constructor(props){
    super(props);
    this.state = {storyList : []}
    this.getStories = this.getStories.bind(this);
  }

  async getStories(query){
    let searchResult = await axios.get(`${BASE_URL}${query}`);
    this.setState(oldState => ({storyList: searchResult.data.hits}));
  }

  async componentDidMount(){
    let searchResult = await axios.get(`${BASE_URL}react`);
    this.setState(oldState => ({storyList: searchResult.data.hits}));
  }

  render(){
    return(
      <div>
        <SearchForm getStories={this.getStories}/>
        <ul>
          {this.state.storyList.map(story=> <li key={story.created_at}><Story story={story}/></li>)}
        </ul>
  
      </div>
      
    )
  }
}

export default StoryList;