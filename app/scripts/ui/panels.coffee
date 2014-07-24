react = require 'react'
html  = react.DOM

Navigation = require("./navigation")
Questions  = require("./questions")

Panels = react.createClass
  getInitialState: () ->
    {currentPanel: 0}

  previousPanel: () ->
    @setState currentPanel: @state.currentPanel - 1

  nextPanel: () ->
    @setState
      currentPanel: @state.currentPanel + 1

  render: () ->
    html.div {className: "panels"},
      Panel(panel: @props.panels[@state.currentPanel], values: @props.values, setValue: @props.setValue),
      Navigation(prev: @previousPanel, next: @nextPanel)

Panel = react.createClass
  render: () ->
    classes = "panel"

    html.div {className: classes},
      for item in @props.panel.items
        if item.class == "Quby::Questionnaires::Entities::Text"
          Text(item: item)
        else if item.class == "Quby::Questionnaires::Entities::Questions::RadioQuestion"
          Questions.Radio(key: item.key, item: item, value: @props.values[item.key], setValue: @props.setValue)
        else
          html.div({}, "Unknown item type: " + item.class)

Text = react.createClass
  render: () ->
    html.div
      className: "item item-text"
      dangerouslySetInnerHTML: {__html: @props.item.text}

module.exports = Panels;
