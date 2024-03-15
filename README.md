# Carefinder 💚

Carefinder is an application that gives access to healthcare in Nigeria. It is a tool built using ReactJs and helps users to find, export and share hospitals within Nigeria. This Project was built in partial fulfillment of the Diploma Degree in FrontEnd Development at AltSchool Africa.

## Contents

- [GettingStarted] (#getting-started)
- [Component and Pages](#component-pages)
- [Styling](#styling)

## Getting Started

1. This project was created using a React + Vite template. The templates was installed using the necessary commands and the environment set up for implementing the code.

2. The dependencies were installed using the npm install command and various dependencies were installed such as "react-router-dom", firebase (for the backend deployment), markdown syntax and many more.

3. The project overview is in line with the partial fulfilment of Diploma in FrontEnd Engineering at AltSchool Africa. This project has been built with the overall information learnt during my stay with the school.


## Components and Pages

1. App Page
This project include the use of route to deploy multiple pages in the app.The routes are created in the (`./src/App.jsx`) file. This is where each components and pages are wrapped in a router to create multiple browser roots. This includesthe layout and structure of the application and render the appropriate page and components based on the route.

2. Root Page
The root page (`./src/Routes/Roots.jsx`) is the landing page if the application. It consist of the header of the application and other components built for the landing page. This consist of the call to action (`./src/Components/CallToAction.jsx`) and the footer (`./src/Components/Footer.jsx`) components.
The call to action (`./src/Components/CallToAction.jsx`) displays a slideshow of some healthcare personnel and workers and also a sign up button for users.
THe footer (`./src/Components/Footer.jsx`) displays other information about the organization and how to reach out through various social media outlet.
From the Root Page, the Users and Admins can sign up (`./src/Components/SignUp.jsx` and `./src/Components/Admin/adminSignup.jsx`) into different dashboards because each login and sign up buttons refers the users to their respective pages.

3. The User Dashboard Page
The user dashboard (`./src/Pages/Dashboard.jsx`) contain the landing interface afer signup or login. The user dashboard contains the project name and the profile dropdown menu which leads to the dashboard, search hospitals (`./src/Pages/Search.jsx`), Profile (`./src/Pages/Profile.jsx`), LogOut (`./src/Components/LogOut.jsx`), notifications and many more.

The Search Hospital allow users to search for hospitals within their region using the Name of the hospital, State or local government area.
Carefinder also allows users to ecport the list of hospitals to a CSV file making it easy to save and share information.

The dashboard also consist of the offer that Carefinder gives to all users such as the Medical Care and Pharmaceutical Care. Users can also subscribbe to newsletter from Carefinder.

The profile page helps the users to save information about themselves on the page. This include the state, local government, profile picture

The Users also are able to shate list of hospitals using the email.


4. The Admin Dashboard Page
The admin users are abe to create an account to access the platform admin features with the aid of the admin sign up and login page. The admin users are able to write content with markdown features.


## Styling

Each component and page have there respective cascade style sheet (CSS) where the styling is saved. Some styling are applicable in other component and pages so they are not repeated.

# capstone-project
# capstone-project
