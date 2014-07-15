RadioQuestion = React.createClass
  selectOption: (option) ->
    () => @props.setValue(@props.item.key, option.key);

  render: () ->
    name         = "answer[" + @props.item.key + "]"
    value        = @props.value;
    selectOption = @selectOption;
    createOption = (option) =>

    React.DOM.div {},
      React.DOM.div {}, @props.item.title
      for option in @props.item.options
        RadioOption name: name, value: option.key, label: option.description, selected: (value == option.key), onChange: selectOption(option)

RadioOption = React.createClass
  render: () ->
    React.DOM.div {},
      React.DOM.input name: @props.name, type: "radio", checked: @props.selected, onChange: @props.onChange
      React.DOM.label {}, @props.label

module.exports =
  Radio: RadioQuestion
