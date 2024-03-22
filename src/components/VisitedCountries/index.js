import VisitedCountryItem from '../VisitedCountryItem'

import './index.css'

const VisitedCountries = ({countriesList, clickVisitBtn}) => {
  const visitedCountriesList = countriesList.filter(
    eachCountry => eachCountry.isVisited,
  )
  const visitedCountriesContainerClassName =
    visitedCountriesList.length === 0
      ? 'no-visited-countries'
      : 'visited-countries'

  return (
    <div className="visited-countries-container">
      <h1>Visited Countries</h1>
      <div className={visitedCountriesContainerClassName}>
        {visitedCountriesList.length === 0 ? (
          <p>No Countries visited Yet!</p>
        ) : (
          <ul className="visited-countries-list">
            {visitedCountriesList.map(eachCountry => (
              <VisitedCountryItem
                key={eachCountry.id}
                countryDetails={eachCountry}
                clickRemoveBtn={clickVisitBtn}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default VisitedCountries
