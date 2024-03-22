import CountryItem from '../CountryItem'

import './index.css'

const Countries = ({countriesList, clickVisitBtn}) => (
  <div className="countries-and-btns-container">
    <h1 className="countries-heading">Countries</h1>
    <ul className="countries-list">
      {countriesList.map(eachCountry => (
        <CountryItem
          key={eachCountry.id}
          countryDetails={eachCountry}
          clickVisitBtn={clickVisitBtn}
        />
      ))}
    </ul>
  </div>
)

export default Countries
