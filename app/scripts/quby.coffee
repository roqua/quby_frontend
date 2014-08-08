react     = require('react')
# So that React Devtools know that we've loaded React
window.React = react

$         = require('jquery')
mountNode = document.getElementById("quby-app");

questionnaire = {panels: [{items: []}]}

QubyApp = require './app'

$.getJSON "/questionnaires/sipp.json", (data) =>
  window.questionnaire = data
  React.renderComponent(QubyApp(questionnaire: data), mountNode)
