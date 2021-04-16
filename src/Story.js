import React from "react";

class Story extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {story } = this.props;
    return (
        <a href={story.url}>{story.title}</a>
    )
  }
}
export default Story;
