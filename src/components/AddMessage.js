import React, { Component } from "react";
import { connect } from "react-redux";
import { viewChannel, addMessage } from "./../redux/actions/viewChannel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
class AddMessage extends Component {
  state = {
    message: ""
  };
  onTextChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.addMessage(this.props.channelID, this.state);
    this.setState({ message: "" });
  };
  render() {
    return (
      <div style={{ textAlign: "center", position: "relative" }}>
        <form name="messageForm" onSubmit={this.onSubmit}>
          <div className="row" id="scroller">
            <div>
              <label forhtml="colFormLabelLg" style={{ marginLeft: "1rem " }}>
                message:
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="colFormLabelLg"
                style={{
                  borderColor: "#e30090",
                  borderWidth: "2px",
                  hight: "100px",
                  width: "30rem",
                  marginLeft: "1%",
                  selfAlign: "center"
                }}
                name="message"
                value={this.state.message}
                placeholder="Write your message..."
                onChange={this.onTextChange}
              ></input>
            </div>

            <button
              id="send"
              type="submit"
              value="Send"
              style={{ marginLeft: "1rem " }}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
            <br></br>
            <br></br>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMessage: (channelID, message) => dispatch(addMessage(channelID, message)),
  viewChannel: channelID => dispatch(viewChannel(channelID))
});

const mapStateToProps = state => ({
  channels: state.channelsReducer.channels,
  message: state.channelViewReducer.messages
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMessage);
