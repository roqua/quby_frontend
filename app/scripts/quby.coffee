# Load css first thing. It gets injected in the <head> in a <style> element by
# the Webpack style-loader.
require '../../build/quby.css'

$         = require('jquery')

react     = require('react')
# So that React Devtools know that we've loaded React
window.React = react

QubyApp       = require './app'
mountNode     = document.getElementById("quby-app");

$.getJSON "/questionnaires/Voorbeeldvragenlijst.json", (data) =>
  window.questionnaire = data
  React.renderComponent(QubyApp(questionnaire: data), mountNode)
