import React, { Component } from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import { List } from 'semantic-ui-react';
import SortableQueueItem from './SortableQueueItem';

const listItemStyle = {
  maxWidth: "120px",
  verticalAlign: "top"
}

const SortableItem = SortableElement(({value}) => {
  return (
    <List.Item style={listItemStyle}>
      <SortableQueueItem video={value} />      
      </List.Item>
  )
});



const SortableList = SortableContainer(({videos}) => {
  return (
    <List horizontal>
      {videos.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </List>
  );
});

export default class App extends Component {
  state = {
      videos: [
        { title: 'This Is A Video Title', thumbnail: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=120x90&w=120&h=90'}, 
        { title: 'Here Is Another One', thumbnail: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=120x90&w=120&h=90'}, 
        { title: 'More Video Titles Here', thumbnail: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=120x90&w=120&h=90'}, 
        { title: 'Hello World', thumbnail: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=120x90&w=120&h=90'}, 
        { title: 'Hello World', thumbnail: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=120x90&w=120&h=90'}, 
        { title: 'Hello World', thumbnail: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=120x90&w=120&h=90'}, 
        { title: 'Hello World', thumbnail: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=120x90&w=120&h=90'}, 
        { title: 'Hello World', thumbnail: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=120x90&w=120&h=90'}
      ],
    };
    onSortEnd = ({oldIndex, newIndex}) => {
      this.setState({
        videos: arrayMove(this.state.videos, oldIndex, newIndex),
      });
    };
  render() {
    return (
      <div className="App">
        <SortableList axis="x" videos={this.state.videos} onSortEnd={this.onSortEnd} />
      </div>
    );
  }
}
