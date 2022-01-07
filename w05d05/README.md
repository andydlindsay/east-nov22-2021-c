# W05D05 - Mid-term Project Kickoff

### The Why?
* project experience
* working with others
* see how far you've come
* self-assessment
* applying what you've learned

### Pick a Project

### User Stories
* describes how/why a user will interact with our app
* As a _______, I can ______, because ______

* As a logged-in user, I can see a list of available maps, because I am interested in things in my area
* As a user, I can see the menu from a local restaurant, because I am hungry

* As a user, I can favourite a blogpost, because I want to review it later AND the heart icon turns red

### Nouns === Resources
* nouns become tables
* build out the ERD
* 3-5 tables

### Routes
* the client needs access to the data
* RESTful conventions

B GET   /cars
R GET   /cars/:id
E POST  /cars/:id
A POST  /cars
D POST  /cars/:id/delete

B GET       /cars
R GET       /cars/:id
E PUT/PATCH /cars/:id
A POST      /cars
D DELETE    /cars/:id

### MVP
* Minimum viable product
* minimum feature set that a user will find useful
* @KV Minimum Viable Demo
* What is the minimum feature set that I can demo in 5 mins
* If you're not going to show it, DON'T BUILD IT

### User Login
* DON'T DO IT

```js
app.get('/login/:id', (req, res) => {
  // set the cookie
  req.session.user_id = req.params.id;

  // plain-text cookies
  res.cookie('user_id', req.params.id);

  // send them somewhere
  res.redirect('/');
});
```

GET /login/8

### Wireframes/Mockups
* minimum amount of info so that any team member can implement
* Figma, diagrams.net, balsamiq, moqups, pen and paper

/planning
- user-stories.md
- erd.png
- wireframes.png

### Tech Choices
* Front End - HTML, CSS, JS, SCSS, jQuery
* Back End - Node, Express, Postgres

### SPA vs Multi-page
* not mutually exclusive

### Git
* plan for git workflow
* I want to exp merge conflicts
* I WILL NOT CODE ON MASTER

1. working on a branch
2. push the branch to github
3. feature is done

// cloud
4. open a pull request (PR) on github
5. review
6. the PR gets merged into master
7. checkout master locally
8. git pull origin master

// locally
4. checkout master
5. git merge my-branch
6. git push origin master
// everyone else
7. checkout master locally
8. git pull origin master


### Splitting up the Work
* Horizontal - every member is working on the same layer
* Vertical - each member working on a diff layer
* Pair Programming






