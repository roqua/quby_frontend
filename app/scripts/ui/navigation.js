/** @jsx React.DOM */

var Navigation = React.createClass({
  render: function() {
    return (
      <div>
        <button onClick={this.props.prev}>Previous</button>
        <button onClick={this.props.next}>Next</button>
      </div>
    );
  }
});


module.exports = Navigation;
