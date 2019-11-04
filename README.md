# LIVE URL : https://college-football-context-api.herokuapp.com/

# To view the output in the development mode, follow the steps as given below:
1) In the console, navigate to the project folder.
2) Run command "npm install". This will install all the dependencies and creates a node-modules folder.
   This process takes around 5-8 mins to complete.
3) Run command "npm start". Runs the app in the development mode.
   Opens the application in the browser
4) Run command "npm test" to run all the test cases.

# Highlights
- The entire state management is made using the Context-Api
- No props are shared across any of the components
- Every child component of CollegeFootballApp component accesses context values using useContext.
- All the event handling and setState are managed in the parent CollegeFootballApp component.
- All child components are functional components
- No logic operations are performed in any of the child functional componenets
- Used node-sass library for using scss and it's features
- The design is responsive. Works both in desktop and mobile screen.
- Used normalize.css to reset the css styles.
- Used react-hamburger-menu library to show HamburgerMenu and it's animation effect of open close. 
- Used react-promise-tracker to handle loading visibility during any async fetch calls. This could also have been implemented using a state value with bool value.
- Table is horizantally scrollable in mobile screen view.
- Initially all the response data for conferences and teams are fetched in the componentDidMount menthod.
- All pagination fetaures are handled using the pre fetched data inside the selector funciton.


# Feature:-
- By default teams table is rendered for all conference values. 
- User can filter the teams result based on the conference value from the dropdown menu. 
- Click on hamburger menu to select either teams view or conferences view. 
- Select the number of results in the table from the table footer dropdown menu.
- Can navigate to next or previous result set using the respective buttons in the table footer. 
- In the teams table division and conference columns with null value renders '-'

# NOTE: 
- This project could have been done using Redux for state management. 
- As there was no complex state values involved, context-api was decided to use. 