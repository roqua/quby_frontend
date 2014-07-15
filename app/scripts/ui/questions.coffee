RadioQuestion = React.createClass
  selectOption: (option) ->
    () => @props.setValue(@props.item.key, option.key);

  render: () ->
    name         = "answer[" + this.props.item.key + "]"
    value        = this.props.value;
    selectOption = this.selectOption;
    createOption = (option) ->
      RadioOption(name: name, selected: (value == option.key), value: option.key, label: option.description, onChange: selectOption(option))

    React.DOM.div {},
      React.DOM.div({}, this.props.item.title)
      this.props.item.options.map(createOption)

RadioOption = React.createClass
  render: () ->
    React.DOM.div {},
      React.DOM.input({name: this.props.name, type: "radio", checked: this.props.selected, onChange: this.props.onChange}),
      React.DOM.label({}, this.props.label)

module.exports = {Radio: RadioQuestion};
