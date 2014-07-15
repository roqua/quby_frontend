React     = window.React = require('react')
Panels    = require("./ui/panels")
mountNode = document.getElementById("quby-app");

questionnaire = require('./example-questionnaire')

QubyApp = React.createClass
  getInitialState: () ->
    values: {}

  setValue: (key, value) ->
    newValues = {}
    for existingKey of @state.values
      newValues[existingKey] = @state.values[existingKey]
    newValues[key] = value;
    @setState values: newValues

  render: () ->
    React.DOM.div {},
      Panels
        panels: @props.questionnaire.panels
        index: @state.currentPanel
        values: @state.values
        setValue: @setValue

React.renderComponent(QubyApp(questionnaire: questionnaire), mountNode)
