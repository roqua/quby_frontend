RadioQuestion = React.createClass
  displayName: 'RadioQuestion'

  selectOption: (option) ->
    () => @props.setValue(@props.item.key, option.key);

  render: () ->
    name         = "answer[" + @props.item.key + "]"
    value        = @props.value;
    selectOption = @selectOption;
    createOption = (option) =>

    options = for option in @props.item.options
      <RadioOption name={name} key={option.key} label={option.description} selected={value == option.key} onChange={selectOption(option)} />

    <div className="item item-question">
      <div>{@props.item.title}</div>
      {options}
    </div>

RadioOption = React.createClass
  displayName: 'RadioOption'

  render: () ->
    id = "#{@props.name}[#{@props.key}]"

    <div>
      <input id={id} name={@props.name} type={"radio"} checked={@props.selected} onChange={@props.onChange} />
      <label htmlFor={id}>{@props.label}</label>
    </div>

StringQuestion = React.createClass
  displayName: 'String'

  handleChange: (event) ->
    @props.setValue(@props.item.key, event.target.value)

  render: () ->
    <div className="item item-question">
      <div>{@props.item.title}</div>
      <input name={@props.item.key} type="text" value={@props.value} onChange={@handleChange} />
    </div>

module.exports =
  Radio: RadioQuestion
  String: StringQuestion
