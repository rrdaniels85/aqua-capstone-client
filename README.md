[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Aquarium Tracker App

This application is targeted at aquarium enthusiasts. It allows them, after signing in, to create multiple tanks with attributes. The user can then keep an inventory of the animals that they keep in their tanks (ex. fish, snails, etc.). This allows them to keep their aquariums more organized.

![alt text](http://imgur.com/lqL9lZF.png)
![alt text](http://imgur.com/P9JjRwQ.png)
![alt text](http://imgur.com/xNTMZDT.png)

## Application URL Section
-   [Back-End Repository](https://github.com/rrdaniels85/aqua-capstone-api)
-   [Deployed Client App](https://rrdaniels85.github.io/aqua-capstone-client/)
-   [Deployed API](https://still-castle-88480.herokuapp.com/)

## Dependencies

Install with `npm install`.

-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)

## Technologies Used

The front-end of this application was developed using JavaScript, HTML, CSS,
Bootstrap and Handlebars. Boostrap was primarily used to create the layout and
feel of the page and Handlebars templates were used to render various bits of
data received from the API to the user.

## Wireframes

![alt text](http://i.imgur.com/HsYPU1J.jpg)
![alt text](http://i.imgur.com/jWik1uf.jpg)
![alt text](http://i.imgur.com/T753CCz.jpg)

[Link to Wireframes on Imgur](http://imgur.com/a/OL7fT)

## Users

In creating this application, I considered what my user would want. This application is primarily targeted at aquarium enthusiasts who keep a number of aquariums with many fish/animals in each aquarium. I knew that such a user would want a way to keep track of each individual tank and keep an inventory of the individual animals in each tank. This is particularly important when a user has a multitude of fish in each tank and it can become easy to lose track of the inhabitants or even count them as they are swimming around. This inspired my user stories which are listed below.

## User Stories

MAIN
1) As a user, I want to be able to successfully sign up and sign in so that I can use the application.
2) As a user, I want to be able to sign out when I am done using the application so that I can exit my session.
3) As a user, I want to be able to change my password after I have signed in so that I can update my password if I so desire.
4) As a user, I want my tanks to be listed upon sign in so that I can see what tanks I have.
5) As a user, I want update and delete functionality for tanks so that I can choose whether to update the information of the tank or delete the tank.
6) As a user, I want to be able to add an animal to my tank so that I can document the animals living in a tank.
7) As a user, I want to be able to update and delete the animals in my tank so that I can either change my animals information or delete them.
8) As a user, I want to be able to see what animals are inside my tanks so that I know what the inventory is.
9) As a user, if I am looking at the animals in a tank, I want to be able to return to the page with all my tanks so that I can look at other tanks if I so desire.
10) As a user, when I delete a tank, I want all the animals in the tank to be deleted so that they do not remain associated with me.

STRETCH OBJECTIVE USER STORIES:
11) As a user, I want to be able to add maintenance logs/notes about my tank and the animals in it so that I can track my activities and the animals in the tank.
12) As a user, I want to be able to delete and update my maintenace logs/notes on my tanks so I can alter them if I so choose.

[Link to User Stories](https://docs.google.com/document/d/1EMjGEPPEg43CiydPIFbEAzryOZDTLP8yAEjQREMJ3_E/edit?usp=sharing)

## General Approach

**Planning:**
Before I wrote any code, I had a brainstorming session where I wrote out possible ideas for my application and potential functionality. I then tried to consider what I actually thought I could
successfully accomplish given the time constraints of project week. This helped me to keep my scope in
check. Once I had decided on my main project goal, I created the user stories and wireframes. I then created a stretch goal for myself which I incorporated in my user stories and ERD. I indicated that this was a stretch goal that I could strive for if I had capacity over the course of the project.

**Execution:**
As I had done in the past, I first focused on getting my API functional. Once this was working for the tanks resource, I created a basic front-end layout that allowed me to connect my client with the API and confirm that the tanks CRUD functionality was working correctly with the front-end.

Then, I repeated this process with the animals resouce in my API. Once I successfully had that working, I then created a basic front end layout for animals and, like with tanks, confirmed the API was working correctly with the front-end.

After I had my basic front-end functionality working, I turned my attention to the UI. I used Bootstrap to provide a better layout and created handlebars templates to render my data to the
user. Once I had a solid layout, then I tried to add some additional nice effects such as hover and a background carousel. After I felt comfortable with the UI of my application, I then spent some time testing out my application.

## Unsolved Problems

If I had more time, I would have liked to try incorporating a front-end framework (likely Angular) into my application. I was unable to incorporate it at this point but would certainly be interested in doing so in the future.

Given that my application was a fish tank themed application, I had thought it would be cool to include a bubble type effect where the bubbles rose in the background from within the main page jumbotron. Though I got close, I was not able to get the bubbles to remain fully inside the jumbotron in time so I ended up having to back off of the idea. I would like to try this again in the future. In addition, I had hoped to incoporate some sort of fish swimming animation but ran out of time.

Finally, I would have liked to have given users the ability to add/upload a picture of their animal. If I had had more time to figure it out, I think this would have been possible using Amazon Web Services.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
