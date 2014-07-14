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
            return RadioOption({name: name, selected: (value == option.key), value: option.key, label: option.description, onChange: selectOption(option)});
        };

        return React.DOM.div({},
            [React.DOM.div({}, this.props.item.title)].concat(this.props.item.options.map(createOption))
        );
    }
});

var RadioOption = React.createClass({
    render: function() {
        return React.DOM.div({}, [
            React.DOM.input({name: this.props.name, type: "radio", checked: this.props.selected, onChange: this.props.onChange}),
            React.DOM.label({}, this.props.label)
        ]);
    }
});

module.exports = {Radio: RadioQuestion};
