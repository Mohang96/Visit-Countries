import './index.css'

const VisitedCountryItem = ({countryDetails, clickRemoveBtn}) => {
  const {id, name, imageUrl} = countryDetails

  const onClickRemoveBtn = () => {
    clickRemoveBtn(id)
  }

  return (
    <li className="visited-country-item">
      <img src={imageUrl} alt="thumbnail" className="country-flag-image" />
      <div className="visited-country-name-and-btn-container">
        <p>{name}</p>
        <button type="button" onClick={onClickRemoveBtn}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryItem
