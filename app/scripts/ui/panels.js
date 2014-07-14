var Navigation = require("./navigation");
var Questions  = require("./questions");

var Panels = React.createClass({
  getInitialState: function() {
    return {currentPanel: 0};
  },

  previousPanel: function() {
    this.setState({currentPanel: this.state.currentPanel - 1})
  },

  nextPanel: function() {
    this.setState({currentPanel: this.state.currentPanel + 1})
  },

  render: function() {
    return React.DOM.div({className: "panels"}, [
      Panel({panel: this.props.panels[this.state.currentPanel], values: this.props.values, setValue: this.props.setValue}),
      Navigation({prev: this.previousPanel, next: this.nextPanel})
      ]);
  }
});

var Panel = React.createClass({
  render: function() {
    var values = this.props.values;
    var setValue = this.props.setValue;

    var createItem = function(item) {
      if (item.class == "Quby::Questionnaires::Entities::Text") {
        return Text({item: item});
      } else if (item.class == "Quby::Questionnaires::Entities::Questions::RadioQuestion") {
        return Questions.Radio({key: item.key, item: item, value: values[item.key], setValue: setValue});
      } else {
        return React.DOM.div({}, "Unknown item type: " + item.class);
      };
    };

    var classes = "panel";
    if (this.props.current) { classes += " current"; };

    return React.DOM.div({className: classes},
      this.props.panel.items.map(createItem)
    );
  }
});

var Text = React.createClass({
  render: function() {
    return React.DOM.div({dangerouslySetInnerHTML: {__html: this.props.item.text}});
  }
});


module.exports = Panels;
