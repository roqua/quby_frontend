Navigation = require("./navigation")
Questions  = require("./questions")

Panels = React.createClass
  getInitialState: () ->
    {currentPanel: 0}

  previousPanel: () ->
    @setState currentPanel: @state.currentPanel - 1

  nextPanel: () ->
    @setState
      currentPanel: @state.currentPanel + 1

  render: () ->
    React.DOM.div {className: "panels"},
      Panel(panel: @props.panels[@state.currentPanel], values: @props.values, setValue: @props.setValue),
      Navigation(prev: @previousPanel, next: @nextPanel)

Panel = React.createClass
  render: () ->
    classes = "panel"
    if @props.current
      classes += " current"

    React.DOM.div {className: classes},
      for item in @props.panel.items
        if item.class == "Quby::Questionnaires::Entities::Text"
          Text(item: item)
        else if item.class == "Quby::Questionnaires::Entities::Questions::RadioQuestion"
          Questions.Radio(key: item.key, item: item, value: @props.values[item.key], setValue: @props.setValue)
        else
          React.DOM.div({}, "Unknown item type: " + item.class)

Text = React.createClass
  render: () ->
    React.DOM.div
      dangerouslySetInnerHTML: {__html: @props.item.text}

module.exports = Panels;
