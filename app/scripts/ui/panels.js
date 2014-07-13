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
                <input name={this.props.name} type="radio" checked={this.props.selected} onChange={this.props.onChange} />
                <label>{this.props.label}</label>
            </div>
        );
    }
});

var RadioQuestion = React.createClass({
    selectOption: function(option) {
        var props = this.props;
        return function() {
            props.setValue(props.item.key, option.key);
        };
    },

    render: function() {
        var name = "answer[" + this.props.item.key + "]"
        var value = this.props.value;
        var selectOption = this.selectOption;
        var createOption = function(option) {
            return <RadioOption name={name} selected={value == option.key} value={option.key} label={option.description} onChange={selectOption(option)} />;
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
        var values = this.props.values;
        var setValue = this.props.setValue;
        var createItem = function(item) {
            if (item.class == "Quby::Questionnaires::Entities::Text") {
                return <Text item={item} />;
            } else if (item.class == "Quby::Questionnaires::Entities::Questions::RadioQuestion") {
                return <RadioQuestion key={item.key} item={item} value={values[item.key]} setValue={setValue} />;
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
        <Panel panel={this.props.panels[this.props.index]} values={this.props.values} setValue={this.props.setValue} />
      </div>
    );
  }
});


module.exports = Panels;
