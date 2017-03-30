import React, { Component } from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import {Grid, List} from 'semantic-ui-react';
import SortableQueueItem from './SortableQueueItem';
import {rearrangeQueueItems} from 'APP/app/reducers/queue';
import { connect } from 'react-redux'

class SortableQueue extends Component {
  constructor(props) {
    super(props)
    this.onSortEnd = this.onSortEnd.bind(this)
    this.state = {
      queueLeft: props.queueLeft,
      queueRight: props.queueRight
    }
  }

  onSortEnd({oldIndex, newIndex}) {
    console.log('Old index:', oldIndex);
      console.log('New index:', newIndex);
    
    this.props.rearrangeQueueItems(oldIndex, newIndex)
  };

  render() {
    const listItemStyle = {
      maxWidth: "120px",
      verticalAlign: "top",
      wordWrap: "break-word",
      whiteSpace: "normal",
    }

    const SortableItem = SortableElement(({value, idx, direction}) => {
      // console.log(idx)
      return (
        <List.Item style={listItemStyle}>
          <SortableQueueItem
            video={value}
            style={{wordWrap: "break-word", whiteSpace: "normal"}}
            direction={direction}
            index={idx}
          />      
        </List.Item>
      )
    });

    const SortableList = SortableContainer(({queueLeft, queueRight}) => {
      return (
        <Grid
          columns='two'
          style={{MozUserSelect: 'none',
                  WebkitUserSelect: 'none',
                  msUserSelect: 'none'}}
        >
          <Grid.Row>
            <Grid.Column>
              <List horizontal style={{whiteSpace: "nowrap", overflowX: "auto", overflowY: "hidden"}}>
                {queueLeft.map((value, index) => {
                  return (
                  <SortableItem
                    key={`item-${index}`}
                    idx={index}
                    index={index}
                    value={value}
                    direction='Left'
                  />
                )})}
              </List>
            </Grid.Column>
            <Grid.Column>
              <List horizontal style={{whiteSpace: "nowrap", overflowX: "auto", overflowY: "hidden"}}>
                {queueRight.map((value, index) => {
                  return (
                  <SortableItem
                    key={`item-${index + 2 * queueLeft.length}`}
                    idx={index + 2 * queueLeft.length}
                    index={index + 2 * queueLeft.length}
                    value={value} 
                    direction='Right'
                  />
                )})}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>   
      );
    });
    
    return (
      <SortableList
        axis="x"
        queueLeft={this.props.queueLeft}
        queueRight={this.props.queueRight}
        onSortEnd={this.onSortEnd}
        distance={30}
        useWindowAsScrollContainer={true}
        lockAxis="x"
      />
    );
  }
}

const mapStateToProps = state => ({
  queueLeft: state.queue['Left'],
  queueRight: state.queue['Right']
});

const mapDispatchToProps = dispatch => ({
  rearrangeQueueItems: (oldIndex, newIndex) => {
    dispatch(rearrangeQueueItems(oldIndex, newIndex))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SortableQueue);
