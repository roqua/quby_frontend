html  = React.DOM

Navigation = React.createClass
  displayName: 'Navigation'

  render: () ->
    html.div {className: 'navigation'},
      html.input className: 'nav-button nav-button-prev', type: 'submit', value: "Previous", onClick: @props.prev
      html.input className: 'nav-button nav-button-next', type: 'submit', value: "Next", onClick: @props.next

module.exports = Navigation
