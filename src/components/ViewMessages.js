import React, { Component } from "react";
import { connect } from "react-redux";
import { viewChannel } from "../redux/actions";
import AddMessage from "./AddMessage";
class ViewMessages extends Component {
  /**
   * This state isn't being used. Get rid of it.
   */
  state = {
    channelID: this.props.match.params.channelID
  };
  componentDidMount() {
    this.props.viewChannel(this.state.channelID);
    this.interval = setInterval(
      () => this.props.viewChannel(this.state.channelID),
      5000
    );
  }

  componentDidUpdate(prevProps) {
    const channelID = this.props.match.params.channelID;
    if (prevProps.match.params.channelID !== channelID) {
      clearInterval(this.interval);
      this.props.viewChannel(channelID);
      this.interval = setInterval(
        () => this.props.viewChannel(channelID),
        5000
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        {this.props.messages.map(message => {
          return (
            <div
              class="message-body"
              key={message}
              style={{ marginLeft: "5%" }}
            >
              <h5>{message.username}:</h5>
              <p style={{ marginLeft: "10%" }}>{message.message}</p>
              <br />
            </div>
          );
        })}
        <AddMessage channelID={this.props.match.params.channelID} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.channelViewReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    viewChannel: channelID => dispatch(viewChannel(channelID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMessages);
