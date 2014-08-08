Navigation = React.createClass
  displayName: 'Navigation'

  render: () ->
    <div className="navigation">
      <input className='nav-button nav-button-prev' type='submit' value="Previous" onClick={@props.prev} />
      <input className='nav-button nav-button-next' type='submit' value="Next"     onClick={@props.next} />
    </div>

module.exports = Navigation
