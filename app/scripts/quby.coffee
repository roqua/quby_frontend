react     = require('react')
html      = react.DOM
Panels    = require("./ui/panels")
mountNode = document.getElementById("quby-app");

questionnaire = require('./example-questionnaire')

QubyApp = react.createClass
  getInitialState: () ->
    values: {}

  setValue: (key, value) ->
    newValues = {}
    for existingKey of @state.values
      newValues[existingKey] = @state.values[existingKey]
    newValues[key] = value;
    @setState values: newValues

  render: () ->
    html.div {},
      Panels
        panels: @props.questionnaire.panels
        index: @state.currentPanel
        values: @state.values
        setValue: @setValue

# So that React Devtools know that we've loaded React
window.React = react

React.renderComponent(QubyApp(questionnaire: questionnaire), mountNode)
