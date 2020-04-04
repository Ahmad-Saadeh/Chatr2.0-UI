import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import ReactImageFallback from "react-image-fallback";
import { clearMessages } from "./../../redux/actions/viewChannel";

const ChannelNavLink = props => (
  <li
    className="nav-item"
    data-toggle="tooltip"
    data-placement="right"
    title={props.channel.owner}
    onClick={props.clearMessages}
  >
    <NavLink className="nav-link" to={`/channel/${props.channel.id}`}>
      <ReactImageFallback
        src={props.channel.image_url}
        fallbackImage="https://legacyogden.com/wp-content/uploads/2015/07/No-Image-Available1.png"
        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
      />
      <span className="nav-link-text"> {props.channel.name}</span>
    </NavLink>
  </li>
);

const mapDispatchToProps = dispatch => {
  return {
    clearMessages: () => dispatch(clearMessages())
  };
};

export default connect(null, mapDispatchToProps)(ChannelNavLink);
