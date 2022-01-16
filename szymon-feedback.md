# Checklist for NC Games Front End

Well done Szymon! You've got good functionality in your app and your desktop view is well styled :)
I particularly like the delete comment feature!
Now start to implement the filtering/ordering features

## README - write your own and make sure that it:

- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

## UX

- [x] Basic styling added
- [-] Responsive design
- [FIXED] Items aligned
  - not on mobile view
- [FIXED] Content legible (not too wide, obstructed, etc)
  - not on mobile view
- [FIXED] Refreshing doesn’t cause an issue on sub-pages
  - refreshing goes back to home page
- [-] No errors in the console
  - DevTools error
- [x] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

## Functionality

### Login

- [x] Some indication of who is logged in (this can be hardcoded)
  - Only see who is the logged in user when they post a comment

### Reviews

- [x] Serves all reviews / top reviews
- [x] Can vote on reviews
- [ ] Can vote a maximum of once in either direction per page load
- [x] Votes are persistent when page is refreshed
- [x] Reviews by category pages load only relevant reviews (especially when navigating from one category page to another)
  - this works fine when clicking on the buttons but not when you navigate via the searchbar
- [ ] Can sort reviews by date created / comment_count / votes

### Individual Review / Comments

- [x] Individual reviews are served with comments
  - with reviews with lots of comments it might be nice to see individual review pages rather than have all the comments on the category page
- [x] Can vote on comments
- [ ] Can vote a maximum of once in either direction per page load
- [x] Votes are persistent when page is refreshed
- [x] Can post new comments, which are persistent

### Additional functionality:

- [x] Can only delete comments of logged in user
- [x] Deleted comments don’t re-appear on re-render/refresh
- [ ] sort comments by date created / votes
- [ ] navigate over pages of reviews (if implemented in back-end)
- [ ] navigate over pages of comments (if implemented in back-end)
- [ ] filter / display reviews by specific user
- [ ] post new review
- [ ] delete logged in user's reviews

## Error Handling

- [ ] Bad url
- [-] Bad category slug in url
  - shows all game reviews
- [n/a] Bad review_id in url
  - You haven't created individual review pages but this error handling would be required if you were to change your structure. (You have got a route for this but it doesn't work)
- [ ] Post comment: (No text in comment body / Can you post without logging in?)

## Code

- [x] Well named components
- [x] Components reused where possible (`Reviews` / `Voter`...)
- [-] Minimal state - don't hold derivable data in state
  - The way you are getting all reviews and single reviews doesn't seem very efficient. When you fetch all reviews in MainDisplay, you aren't using any of that data when you pass it down to ReviewCard. This is because you're making a new request for all single reviews at the same time. That being said, it does work for how you've set up your app.
  - No need to create currentVotes state using singleReview.votes. Instead keep track of how many times the vote button has been clicked and add that to singleReview.votes
- [x] Set state correctly, using previous state where possible
- [x] Handle asynchronicity clearly (i.e. isLoading pattern)
- [x] Functions are DRY (`handleChange` for controlled components / api calls)
- [x] Use object destructuring where possible
- [x] Tidy? If not: ESLint / Prettier
- [x] `node_modules` git ignored
- [-] No `console.log`s / comments
- [-] remove unnecessary files (e.g. App.test.js)

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

## Once everything else is complete, here are some extra challenges:

- [ ] Use `aXe` extension to check for a11y issues
- [ ] Make sure any pure functions are extracted and tested with `Jest`
- [ ] Use Context API for sharing logged in user amongst components
- [ ] Create a user page where you can change their profile information if they are "logged in as the right user". This will require having an additional PATCH endpoint on your backend
- [ ] Create a view for all the reviews a user has liked. This will require additional functionality on your backend
- [ ] Make use of [web sockets](https://en.wikipedia.org/wiki/WebSocket) to allow your page to automatically update with a little notification if there have been any recent posts. [socket.io](https://socket.io/) is quite a good one to use and has some good getting started guides. This will require additional functionality on your backend for recent reviews e.g. last 10 minutes
