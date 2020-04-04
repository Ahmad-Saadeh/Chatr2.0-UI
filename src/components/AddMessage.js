import React, { Component } from "react";
import { connect } from "react-redux";
import { viewChannel, addMessage } from "./../redux/actions/viewChannel";
import image from "../assets/images/send.png";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
// import styles from "../assets/js/styles.js";

class AddMessage extends Component {
  state = {
    message: "",
    showEmojis: false
  };
  showEmojis = e => {
    this.setState(
      {
        showEmojis: true
      },
      () => document.addEventListener("click", this.closeMenu)
    );
  };

  closeMenu = e => {
    console.log(this.emojiPicker);
    if (this.emojiPicker !== null && !this.emojiPicker.contains(e.target)) {
      this.setState(
        {
          showEmojis: false
        },
        () => document.removeEventListener("click", this.closeMenu)
      );
    }
  };

  addEmoji = e => {
    let emoji = e.native;
    this.setState({
      message: this.state.message + emoji
    });
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
          <form
            className="messageForm"
            name="messageForm"
            onSubmit={this.onSubmit}
          >
            <input
              type="text"
              className="form-control form-control-lg"
              id="colFormLabelLg"
              style={{
                borderColor: "black",
                borderWidth: "2px",
                marginLeft: "1%"
              }}
              name="message"
              value={this.state.message}
              placeholder="Write your message..."
              onChange={this.onTextChange}
            ></input>

            {this.state.showEmojis ? (
              <span
                style={styles.emojiPicker}
                ref={el => (this.emojiPicker = el)}
              >
                <Picker
                  onSelect={this.addEmoji}
                  emojiTooltip={true}
                  title="Hamada"
                />
              </span>
            ) : (
              <p style={styles.getEmojiButton} onClick={this.showEmojis}>
                {String.fromCodePoint(0x1f60a)}
              </p>
            )}
            <button
              type="submit"
              style={{
                marginLeft: "18px",
                backgroundColor: "white",
                border: "none"
              }}
            >
              <img
                alt="PIC !"
                src={image}
                style={{ width: "44px", marginLeft: "-3px" }}
              ></img>
            </button>
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

const styles = {
  container: {
    padding: 20,
    borderTop: "1px #4C758F solid",
    marginBottom: 20
  },
  form: {
    display: "flex"
  },
  input: {
    color: "inherit",
    background: "none",
    outline: "none",
    border: "none",
    flex: 1,
    fontSize: 16
  },
  getEmojiButton: {
    cssFloat: "right",
    border: "none",
    margin: 0,
    cursor: "pointer",
    marginLeft: "-33px",
    marginTop: "10px"
  },
  emojiPicker: {
    position: "absolute",
    bottom: 0,
    right: 0,
    cssFloat: "right",
    marginLeft: "200px"
  }
};
