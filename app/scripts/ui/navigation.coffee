react = require 'react'
html  = react.DOM

Navigation = react.createClass
  render: () ->
    html.div {},
      html.button onClick: @props.prev,
        "Previous"
      html.button onClick: @props.next,
        "Next"

module.exports = Navigation
