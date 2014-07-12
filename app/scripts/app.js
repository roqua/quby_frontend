/** @jsx React.DOM */

var React = window.React = require('react'),
    Timer = require("./ui/Timer");
    mountNode = document.getElementById("quby-app");

var QubyApp = React.createClass({
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <Timer />
      </div>
    );
  }
});


React.renderComponent(<QubyApp />, mountNode);

