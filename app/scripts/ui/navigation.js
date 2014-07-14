var Navigation = React.createClass({
  render: function() {
    return React.DOM.div({}, [
        React.DOM.button({onClick: this.props.prev}, "Previous"),
        React.DOM.button({onClick: this.props.next}, "Next")
    ]);
  }
});


module.exports = Navigation;
