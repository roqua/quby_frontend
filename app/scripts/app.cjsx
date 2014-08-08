Panels    = require("./ui/panels")

module.exports = React.createClass
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
    <div>
      <Panels panels={@props.questionnaire.panels} index={@state.currentPanel} values={@state.values} setValue={@setValue} />
    </div>
