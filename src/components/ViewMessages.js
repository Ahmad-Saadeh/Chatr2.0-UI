import React, { Component } from "react";
import { connect } from "react-redux";
import { viewChannel } from "../redux/actions";

/*
 * Remove those console logs used during development before merging into master
 */

class ViewMessages extends Component {
  componentDidMount() {
    this.props.viewChannel(this.props.match.params.channelID);
    console.log("comp did mount");
  }

  componentDidUpdate(pastChannel) {
    const channelID = this.props.match.params.channelID;
    if (pastChannel.match.params.channelID !== channelID) {
      this.props.viewChannel(channelID);
      console.log("comp did update");
    }
  }
  render() {
    if (this.props.currentChannel) {
      return this.props.currentChannel.map(message => {
        return (
          <div style={{ marginLeft: "5%" }}>
            <h5>{message.username}:</h5>
            <p style={{ marginLeft: "10%" }}>{message.message}</p>
            <br />
          </div>
        );
      });
    } else {
      return (
        <div>
          <h1 style={{ marginLeft: "10%" }}> Loading, please wait.</h1>,
          {console.log(this.props.currentChannel)}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    currentChannel: state.channelViewReducer.currentChannel
  };
};

const mapDispatchToProps = dispatch => {
  return {
    viewChannel: channelID => dispatch(viewChannel(channelID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMessages);
