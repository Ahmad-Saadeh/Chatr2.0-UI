import React, { Component } from "react";
import { connect } from "react-redux";
import { viewChannel } from "../redux/actions";
import AddMessage from "./AddMessage";
import ReactImageFallback from "react-image-fallback";

class ViewMessages extends Component {
  messagesEndRef = React.createRef();

  scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  setLiveMessagesInterval() {
    this.interval = setInterval(() => {
      const messages = this.props.messages;
      let timestamp = "";
      if (messages.length) timestamp = messages[messages.length - 1].timestamp;
      this.props.viewChannel(this.props.match.params.channelID, timestamp);
    }, 3000);
  }
  componentDidMount() {
    this.props.viewChannel(this.props.match.params.channelID, "");
    this.setLiveMessagesInterval();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.channelID !== this.props.match.params.channelID
    ) {
      clearInterval(this.interval);
      this.setLiveMessagesInterval();
    }
    this.scrollToBottom();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  isUrlAndIsExtension(url) {
    const isvalid =
      url.includes("https://") ||
      url.includes("http://") ||
      url.includes("jpg") ||
      url.includes("png") ||
      url.includes("gif") ||
      url.includes("jpeg");
    return isvalid;
  }
  render() {
    let hamada;
    return (
      <div
        className="allmess"
        ref={el => {
          this.messagesEnd = el;
        }}
      >
        {this.props.messages.map(message => {
          if (this.props.user.username === message.username) {
            hamada = "message-body active";
          } else {
            hamada = "message-body";
          }
          return (
            <div
              key={message.id}
              className={hamada}
              style={{ marginLeft: "5%", marginTop: "25px" }}
            >
              <h5 style={{ marginLeft: "20px" }}>{message.username}:</h5>

              {this.isUrlAndIsExtension(message.message) ? (
                <ReactImageFallback
                  src={message.message}
                  fallbackImage="https://legacyogden.com/wp-content/uploads/2015/07/No-Image-Available1.png"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%"
                  }}
                />
              ) : (
                <p className="textMessage">{message.message}</p>
              )}
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
    messages: state.channelViewReducer,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    viewChannel: (channelID, timestamp) =>
      dispatch(viewChannel(channelID, timestamp))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMessages);
