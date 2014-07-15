react = require 'react'
html  = react.DOM

RadioQuestion = react.createClass
  selectOption: (option) ->
    () => @props.setValue(@props.item.key, option.key);

  render: () ->
    name         = "answer[" + @props.item.key + "]"
    value        = @props.value;
    selectOption = @selectOption;
    createOption = (option) =>

    html.div {},
      html.div {}, @props.item.title
      for option in @props.item.options
        RadioOption name: name, value: option.key, label: option.description, selected: (value == option.key), onChange: selectOption(option)

RadioOption = react.createClass
  render: () ->
    html.div {},
      html.input name: @props.name, type: "radio", checked: @props.selected, onChange: @props.onChange
      html.label {}, @props.label

module.exports =
  Radio: RadioQuestion
