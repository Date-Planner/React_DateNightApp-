# Name of Project- Date Night Planner

# Group Project: Begin Wireframes & Software Requirements

## Wireframes

It is now time to begin preparations for your Group Project.

The next step for group projects is to begin to generate wireframes for each page in your application.

[Wireframe](./WIREFRAME.png)

## Tasks

Wireframes allow you to experiment with the look and feel of a website without committing any code. Create your wireframe in a digital tool. Whiteboard wireframes will not be accepted.

Provide an image of your wireframes in the readme of your project.

## User Stories

Start out by creating at least 5 user stories for your approved project. The outline/requirements for user stories can be found HERE

Each story in your project management board should contain:

1. Title
2. User Story sentence
3. Feature Tasks
4. Acceptance Tests

Provide a link to your project management board that contains your user stories in your project Readme.

[UserStories Collab](./USERSTORIES.png)

## Software Requirements

Using the Software Requirements Document, create a new file within your main GH repo named requirements.md. Include in this doc the required information for your software reqs for your project as a whole.

## Domain Modeling

Draw out the entities for your project and how they are related to each other. Determine the relationships between the functions/methods and entities of your app.

Include in your domain model the names and data types of your entities and their properties.

Do some research on domain modeling and create your own diagram that represents your app. Here are some helpful resources as a starting point:

1. Brief introduction to Domain Modeling
2. Domain Modeling
3. Domain driven architecture diagram

Include this domain model in the README.md file located in your project’s GitHub repo.

[Domain Modeling](./DOMAIN%20MODELING.png)

## Using a Database? Make an Database Schema Diagram

If you are using a database of any kind in your project, draft out what your schema will look like by creating a diagram of all your application data models, each in it’s own collection (or table).

Be sure to identify the relationships (if any) between each of your data models:

1. Does a single item in your database “belong to” just one other item in your database? For example, a person has one passport, and a passport belongs to a single person.

2. Does a item in your database “belong to” multiple other items in your database? For example, a house has many residents, and each resident has one primary house.

3. Do many items in your database relate to many other items in your database? For example, a band has many musicians, and a musician can be in many bands.

Also, include for each seperate collection:

1. The name of each property stored in the collection.

2. The required data type.

3. An indication if this collection is associated with another collection.

Include this diagram in your readme, accompanied by an explanation of each data model and it’s responsibility in the application.

[Schemas](./SCHEMAS.png)

## Submitting Your Work

This is a group submission. Only one person must submit for group credit

Submit your project repo with your readme outlined.

Upon completion of your tasks listed above, notify your instructor for approval of the content. After approval, you may begin coding. All 4 project steps must be completed before you may start coding your project.

## Summary of the idea

Introducing the ultimate date night app – perfect for couples who love spending quality time together but struggle with planning the perfect evening. Our app allows users to choose between going out or staying in, ensuring that you can always find the perfect date night! With a wide variety of options for both going out and staying in, our app provides something for every couple. From romantic dinners at the hottest restaurants to cozy nights with homemade meals and movies, we've got you covered. Our app also features a user-friendly interface, making it easy to navigate and find the perfect places for your date night.

## What problem or pain point does it solve? a. Keep it high level without going into too much detail. (3-4 sentences is enough)

The ultimate date night app solves the problem of couples struggling to plan the perfect evening. It offers a wide range of options for both going out and staying in, making it easier for couples to find the perfect dining and movie option that suits their mood and schedule with the staying in and going out options.  The app also provides past history favorites for the user that way if one special night was unforgettable you are able to easily do it all over again with the favorited items section.

## Minimum Viable Product (MVP) definition

What is the minimum required for you to present on your demo day?
Have an app that allows the user to choose between staying-in and going-out with the integration of both a movie api and yelp API, as well as have about 3 recipes that will generate based on the choice of staying and they will be random based on the data base stored recipes.

## Software Requirements

### Vision

* What is the vision of this product?<br>
Introducing the ultimate date night app – perfect for couples who love spending quality time together but struggle with planning the perfect evening. Our app allows users to choose between going out or staying in, ensuring that you can always find the perfect date night! With a wide variety of options for both going out and staying in, our app provides something for every couple. From romantic dinners at the hottest restaurants to cozy nights with homemade meals and movies, we've got you covered. Our app also features a user-friendly interface, making it easy to navigate and find the perfect places for your date night.
* What pain point does this project solve?<br>
The ultimate date night app solves the problem of couples struggling to plan the perfect evening. It offers a wide range of options for both going out and staying in, making it easier for couples to find the perfect dining and movie option that suits their mood and schedule with the staying in and going out options.  The app also provides past history favorites for the user that way if one special night was unforgettable you are able to easily do it all over again with the favorites items section.
* Why should we care about your product?<br>
You should care about our product if you are a couple who loves spending quality time together but struggle with planning the perfect evening. Our app takes the stress out of planning by providing a wide variety of options for both going out and staying in, ensuring that you can always find the perfect date night. With a user-friendly interface, our app makes it easy to navigate and find the perfect places for your date night. Whether you prefer romantic dinners at the hottest restaurants or cozy nights with homemade meals and movies, our app has something for every couple. So if you want to take the hassle out of planning your next date night and make it a memorable one, our app is the perfect solution.

## Scope (In/Out)

### IN - What will your product do

* The application will provide the ability to log in and out of the application, while it saves the information of the user and securely stores it, making only accessible to user. It will also provide the option to delete the user profile.
* The application will provide the ability to make recommendation to where to take the user based on user selections.
* The application will provide user access to recipes.
* The application will provide a mechanical to tailored user's dates from a set of predetermined options.
* The application will provide date recommendations based of the weather.

### OUT - What will your product not do

* The application will not make recommendations based on predetermined preferences.
* The application will not take dietary restrictions.

## Minimum Viable Product

* What will your MVP functionality be?<br>
To have a tailored experience for the user based on staying-in and going out. Allows the user to get a recipe, dinner places, and a movie.
* What are your stretch goals?<br>
Have a user experience that has data listed as dates and past selections that they have rated for a possible future idea.
* What stretch goals are you going to aim for?<br>
To have two separate versions one being for couples and the other being for self care.

## Functional Requirements

List the functionality of your product. This will consist of tasks such as the following:

1. An admin can create and delete user accounts
2. A user can update their profile information
3. A user can search all of the products in the inventory

## Data Flow

Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.

## Non-Functional Requirements (301 & 401 only)

Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.

Examples include:

1. Security
2. Usability
3. Testability
etc….

Pick 2 non-functional requirements and describe their functionality in your application.

If you are stuck on what non-functional requirements are, do a quick online search and do some research. Write a minimum of 3-5 sentences to describe how the non-functional requirements fits into your app.

You MUST describe what the non-functional requirement is and how it will be implemented. Simply saying “Our project will be testable for testibility” is NOT acceptable. Tell us how, why, and what.

1. As a user, I want the ability to log in and out of the application, while it saves my information and securely stores it, making only accessible to me. I also want the option to delete my profile.

2. As a user, I want an intuitive experience where it is easy to get recommendation for my date.

# User Stories

Create at least 5 user stories for your project to start out. Divide them amoungst all team members.

## What are User Stories?

User stories are a device commonly used in software development to identify what the functionality and design of a product should be by considering the interests and motivations of people with varied multiple points of view. They are presented in the manner of

As a __, I want__, so that ___

This layout allows a client to communicate to a team what type of behavior they are looking for and allow the team to think up a solution that best fits the the clients need.

The team will then create sub-bullets called Feature Tasks which are individual tasks that must be completed by a team member to complete the user story. Once all of the feature tasks for a user story are completed, so is the story.

User stories can be described as:

* Short, simple, and open for interpretation

* Presented to the developer (from the client) as the behavior they wish to see in their app. The user story should not present a solution.

* Should clearly communicate the end goal of the user

* Includes Acceptance Testing

## INVEST In Your User Stories

* Independent: The user story should be self-contained, in a way that there is no inherent dependency on another user story

* Negotiable: user stories, up until they are part of an iteration, can always be changed and rewritten
Valuable to users or Customers: a user story must deliver value to the end user

* Estimable: You must always be able to estimate the size of a user story.

* Small: User stories should not be so big as to become impossible to plan/task/prioritize with a certain level of certainty

* Testable: the user story or it’s related description must provide the necessary information to make test development possible.

## What Does It Look like?

* “As a <role>, I want <goal> so that <benefit>” (“so that …” is optional if no explanation is needed)

* As a user, I want to search for my customers by their first and last names so that I can quickly navigate to their accounts.

* As a non-administrative user, I want to modify my own schedules but not the schedules of other users.

## Example

* As an administrative user, I want the ability to modify all employee’s schedules.

## Feature Tasks

* Admin can choose which users schedules to view/edit

* Show the options for all employees schedules

* Select ability to have recurring schedules
* Save schedule changes

## Acceptance Tests

* Ensure that the employee the admin picked links to the correct schedule

* Ensure the scheduling does not interfere with requested time off

* Ensure that the schedules successfully save into database

* Provide error message and abort transaction if system becomes unavailable

## Estimate your User Strories

Once your user stories have been completed. Estimate each of them on a scale of of “extra small” all the way to “extra large”. This means take a look at each story and determine how long you expect the user story to take to be completed.

You should anticipate an “extra small” user story to just take a 0-2 hours, while an “extra large” would take a day or two. Write your estimates on each user story, and keep track of your actual time once completed.

1. As a user, I want the ability to log in and out of the application, while it saves my information and securely stores it, making only accessible to me. I also want the option to delete my profile.

* Medium/ Estimation- 3hours/ Actual

2. As a user, I want an app that can make recommendation to where to take my partner for a date night.

* Medium/ Estimation- 4 Hours/ Actual

3. As a user, I want access to recipes that I can cook with or for my loved one.

* Large/ Estimation- 5 hours/ Actual

4. As a user, I want an intuitive experience where it is easy to get recommendation for my date.

* Medium/ Estimation- 6 Hours/ Actual

5. As a user, I want my experience to be tailored based if I want to date in or date out.

* Large/ Estimation- 6 Hours/ Actual
