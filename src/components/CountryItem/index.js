import './index.css'

const CountryItem = ({countryDetails, clickVisitBtn}) => {
  const {id, name, isVisited} = countryDetails
  const countryClassName = name === 'Venezuela' ? 'last-country' : ''

  const onClickVisitBtn = () => {
    clickVisitBtn(id)
  }

  return (
    <li className={`country ${countryClassName}`}>
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button type="button" onClick={onClickVisitBtn} className="visit-btn">
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
