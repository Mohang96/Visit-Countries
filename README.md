This project aims to quickly get you off the ground with **Lists and Keys** in React JS.

### Project Sample Outlook
<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/visit-countries-output.gif" alt="visit countries" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Project Set Up Instructions
- Download dependencies by running `npm install`
- Start up the project using `npm start`

### Project Guidelines
The project has the following functionalities
- Initially, the list of given countries should be displayed.
  - If the country is not visited, it should be displayed with the **Visit** button.
  - If the country is visited, it should be displayed with the text **Visited** and also should be displayed in the visited countries.
- When a **Visit** button of the country is clicked,
  - The country should be added to the visited countries.
  - The **Visit** button of a respective country should be replaced with the text **Visited**.
- When a **Remove** button in one of the visited countries is clicked,
  - The respective visited country should be removed from the visited countries.
  - The **Visited** text of a respective visited country should be replaced with a **Visit** button.
- When all the visited countries are removed, then **No Countries Visited Yet!** text should be displayed.
- The `CountriesDisplay` component consists of the `initialCountriesList`. It consists of a list of countries with the following properties in each country object.

  |    key    | DataType |
  | :-------: | :------: |
  |    id     |  String  |
  |   name    |  String  |
  | imageUrl  |  String  |
  | isVisited | Boolean  |





