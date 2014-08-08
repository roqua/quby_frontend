html  = React.DOM

Navigation = require("./navigation")
Questions  = require("./questions")

Panels = React.createClass
  displayName: 'Panels'

  getInitialState: () ->
    {currentPanel: 0}

  previousPanel: () ->
    @setState currentPanel: @state.currentPanel - 1

  nextPanel: () ->
    @setState
      currentPanel: @state.currentPanel + 1

  render: () ->
    html.div {className: "panels"},
      Panel(panel: @props.panels[@state.currentPanel], values: @props.values, setValue: @props.setValue)
      Navigation(prev: @previousPanel, next: @nextPanel)

Panel = React.createClass
  displayName: 'Panel'

  render: () ->
    classes = "panel"

    html.div {className: classes},
      for item, idx in @props.panel.items
        if item.class == "Quby::Questionnaires::Entities::Text"
          Text(key: "text-#{idx}", item: item)
        else if item.class == "Quby::Questionnaires::Entities::Questions::RadioQuestion"
          Questions.Radio(key: item.key, item: item, value: @props.values[item.key], setValue: @props.setValue)
        else
          html.div(key: "unknown-#{idx}", "Unknown item type: " + item.class)

Text = React.createClass
  displayName: 'Text'

  render: () ->
    html.div
      className: "item item-text"
      dangerouslySetInnerHTML: {__html: @props.item.text}

module.exports = Panels;
