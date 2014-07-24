react = require 'react'
html  = react.DOM

RadioQuestion = react.createClass
  displayName: 'RadioQuestion'

  selectOption: (option) ->
    () => @props.setValue(@props.item.key, option.key);

  render: () ->
    name         = "answer[" + @props.item.key + "]"
    value        = @props.value;
    selectOption = @selectOption;
    createOption = (option) =>

    html.div {className: 'item item-question'},
      html.div {}, @props.item.title
      for option in @props.item.options
        RadioOption name: name, key: option.key, label: option.description, selected: (value == option.key), onChange: selectOption(option)

RadioOption = react.createClass
  displayName: 'RadioOption'

  render: () ->
    html.div {},
      html.input name: @props.name, type: "radio", checked: @props.selected, onChange: @props.onChange
      html.label {}, @props.label

module.exports =
  Radio: RadioQuestion
