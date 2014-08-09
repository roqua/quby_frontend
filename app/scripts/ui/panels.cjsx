Navigation = require("./navigation")
Questions  = require("./questions")

Panels = React.createClass
  displayName: 'Panels'

  getInitialState: () ->
    {currentPanel: 0}

  previousPanel: () ->
    if @state.currentPanel > 0
      @setState currentPanel: @state.currentPanel - 1

  nextPanel: () ->
    if @state.currentPanel < @props.panels.length
      @setState currentPanel: @state.currentPanel + 1

  render: () ->
    <div className="panels">
      <Panel panel={@props.panels[@state.currentPanel]} values={@props.values} setValue={@props.setValue} />
      <Navigation prev={@previousPanel} next={@nextPanel} />
    </div>

Panel = React.createClass
  displayName: 'Panel'

  render: () ->
    classes = "panel"
    items = for item, idx in @props.panel.items
      if item.class == "Quby::Questionnaires::Entities::Text"
        <Text key={"text-#{idx}"} item={item} />
      else if item.class == "Quby::Questionnaires::Entities::Questions::RadioQuestion"
        <Questions.Radio key={item.key} item={item} value={@props.values[item.key]} setValue={@props.setValue} />
      else if item.class == "Quby::Questionnaires::Entities::Questions::StringQuestion"
        <Questions.String key={item.key} item={item} value={@props.values[item.key]} setValue={@props.setValue} />
      else
        <div key={"unknown-#{idx}"}>
          "Unknown item type: #{item.class}"
        </div>

    <div className={classes}>
      {items}
    </div>

Text = React.createClass
  displayName: 'Text'

  render: () ->
    <div className="item item-text" dangerouslySetInnerHTML={{__html: @props.item.text}} />

module.exports = Panels;
