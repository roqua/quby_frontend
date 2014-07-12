/** @jsx React.DOM */
var Text = React.createClass({
    render: function() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.props.item.text}} />
        );
    }
});

var RadioOption = React.createClass({
    render: function() {
        return (
            <div>
                <input type="radio" />
                <label>{this.props.label}</label>
            </div>
        );
    }
});

var RadioQuestion = React.createClass({
    render: function() {
        var createOption = function(option) {
            return <RadioOption label={option.description} />;
        };

        return (
            <div>
                {this.props.item.options.map(createOption)}
            </div>
        )
    }
});

var Panel = React.createClass({
    render: function() {
        var createItem = function(item) {
            if (item.class == "Quby::Questionnaires::Entities::Text") {
                return <Text item={item} />;
            } else if (item.class == "Quby::Questionnaires::Entities::Questions::RadioQuestion") {
                return <RadioQuestion item={item} />;
            } else {
                return <div>Unknown item type #{item.class}</div>;
            };
        };

        var classes = "panel";
        if (this.props.current) { classes += " current"; };

        return (
            <div className={classes}>
                {this.props.panel.items.map(createItem)}
            </div>
        );
    }
});

var Panels = React.createClass({
  render: function() {
    return (
      <div className="panels">
        <Panel panel={this.props.panels[this.props.index]} />
      </div>
    );
  }
});


module.exports = Panels;
