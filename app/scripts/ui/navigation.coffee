react = require 'react'
html  = react.DOM

Navigation = react.createClass
  render: () ->
    html.div {className: 'navigation'},
      html.input type: 'submit', value: "Previous", onClick: @props.prev
      html.input type: 'submit', value: "Next", onClick: @props.next


module.exports = Navigation
