Navigation = React.createClass
  render: () ->
    React.DOM.div {},
      React.DOM.button onClick: @props.prev,
        "Previous"
      React.DOM.button onClick: @props.next,
        "Next"

module.exports = Navigation
