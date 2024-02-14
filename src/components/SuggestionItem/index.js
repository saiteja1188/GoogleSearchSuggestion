import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onUpdate} = props
  const {suggestion} = suggestionDetails

  const onClickUpdate = () => {
    onUpdate(suggestion)
  }

  return (
    <li className="list-item">
      <p className="title">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={onClickUpdate}
      />
    </li>
  )
}

export default SuggestionItem
