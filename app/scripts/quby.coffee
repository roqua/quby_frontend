react     = require('react')
$         = require('jquery')
html      = react.DOM
Panels    = require("./ui/panels")
mountNode = document.getElementById("quby-app");

questionnaire = {panels: [{items: []}]}

QubyApp = react.createClass
  displayName: 'QubyApp'

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

$.getJSON "/questionnaires/sipp.json", (data) =>
  window.questionnaire = data
  React.renderComponent(QubyApp(questionnaire: data), mountNode)
