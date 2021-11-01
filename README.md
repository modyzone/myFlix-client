# Purpose
The project demonstrate a list of Movies, including Directors, Genres.
it pulls informations from an external API.
Using React, build the client-side for an application called myFlix based on
its existing server-side code (REST API and database).

## Context
Client-side development hasn’t always been so prominent. In the past, pages would be generated on
the server-side and sent to the browser, resulting in a poor user experience. Thanks to modern
browsers and libraries such as React, the client-side of an application is today considered to be just
as important as the server-side. As a student of full-stack development, you need to be skilled in both
the server-side and client-side.
The code you write impacts both your users and your fellow developers. As you work through this
Achievement, you’ll need to consider, among other things, the readability and maintenance of your
codebase, and the design and usability of your application.


### The 5 Ws:
* Who—The users of your myFlix application. They will be movie enthusiasts who enjoy reading
information about different movies.
* What—A single-page, responsive application with routing, rich interactions, several interface
views, and a polished user experience. The client-side developed in this Achievement will
support the existing server-side from Achievement 2 by facilitating user requests and
rendering the response from the server-side via a number of different interface views.
* When—myFlix users will be able to use it whenever they want to read information about
different movies or update their user information—for instance, their list of “Favorite Movies.”
* Where—The application will be hosted online. The myFlix application itself is responsive and
can therefore be used anywhere and on any device, giving all users the same experience.

* Why—Movie enthusiasts like to be able to access information about different movies,
directors, and genres, whenever they want to. Having the ability to save lists of favorite
movies will ensure users always have access to the films they want to watch or recommend
to their peers.

#### Design Criteria:
##### User Stories:
1. As a user, I want to be able to access information on movies, directors, and genres so that I
can learn more about movies I’ve watched or am interested in.
1. As a user, I want to be able to create a profile so I can save data about my favorite movies.
#### Features and Requirements:
1. The feature requirements below were extracted from the user stories listed above. Your project will
only be approved if the following “essential” feature requirements are implemented in your
Achievement project.
##### Essential Views and Features:
###### Main view
1. ● Returns a list of ALL movies to the user (each listed item with an image, title, and description)
1. ● Sorting and filtering
1. ● Ability to select a movie for more details Single movie view
1. ● Returns data (description, genre, director, image) about a single movie to the user
1. ● Allows users to add a movie to their list of favorites Login view
1. ● Allows users to log in with a username and password
1. ● Registration view
1. ● Allows new users to register (username, password, email, birthday) Genre view
1. ● Returns data about a genre, with a name and description
1. ● Displays example movies Director view
1. ● Returns data about a director (name, bio, birth year, death year)
1. ● Displays example movies

##### Profile view
1. ● Allows users to update their user info (username, password, email, date of birth)
1. ● Allows existing users to deregister
1. ● Displays favorite movies
1. ● Allows users to remove a movie from their list of favorites

#### Optional Views and Features:
##### Single movie view and all movies views
1. ● Allow users to see which actors star in which movies
1. ● Allow users to view more information about different movies, such as the release date and
the movie rating Actors view
1. ● Allows users to view information about different actors
Profile view, single movie view, and all movies view
1. ● Allow users to create a “To Watch” list in addition to their “Favorite Movies” list

##### Wireframes
You can download wireframes for each of the views for your project here: www.myFlixwireframepack.com

#### Technical Requirements
1. ● The application must be a single-page application (SPA)
1. ● The application must use state routing to navigate between views and share URLs
1. ● The application must give users the option to filter movies
1. ● The application must give users the option to sort movies
1. ● The application must initially use Parcel as its build tool
1. ● The application must be written using the React library and in ES2015+
1. ● The application must be written with React Redux (hence respecting the Flux pattern)
1. ● The application must use Bootstrap as a UI library for styling and responsiveness
1. ● The application must contain a mix of class components and function components
1. ● The application may be hosted online
