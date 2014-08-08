$         = require('jquery')

react     = require('react')
# So that React Devtools know that we've loaded React
window.React = react

QubyApp   = require './app'

mountNode = document.getElementById("quby-app");
questionnaire = {panels: [{items: []}]}
$.getJSON "/questionnaires/sipp.json", (data) =>
  window.questionnaire = data
  React.renderComponent(QubyApp(questionnaire: data), mountNode)
