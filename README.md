# Challenge React with HackerNews API

**Context:** We would like you to build a small responsive web application to test your knowledge of React Development and related technologies.

**STACK**
You must use the following technologies to build the app:
- The latest version of the React framework.
- HTML/CSS only for building the UI components (no 3rd party components library).
- Styled components or CSS Stylesheets.
- Deployment of the web app on Netlify from your Git repository using the New Site
from Git workflow.

**API**
The web application must request data to the [Hackers News public API](https://hn.algolia.com/api). The dropdown Apply Digital selector component should use the URL parameter “query” from the “search by date” API in order to filter the posts, for example:

- Angular: [https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0](https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0)
- React: [https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0](https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0)
- Vuejs: [https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=0](https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=0)

The pagination should be implemented using the “page” URL parameter from this API.

The attributes to use for the post UI are author, story_title, story_url, created_at. If any of these attributes are not present in the object response, the post should be
discarded from the data.

**FUNCTIONALITY**
- The selected filter should persist on the local storage
- The favorited posts should persist on the local storage
- The web app is expected to work as a responsive web application
- If you decide to implement the pagination component, it should behave like this
one: https://material-ui.com/components/pagination/
- When clicking on the row, a new tab should be open with the link of the post
(story_url)
- Clicking on the “like button” should not trigger the opening of the post URL link
- When hovering on the row, apply opacity to the entire row and its children (texts,
icons, like button, etc)

**BONUS**
- Implement unit testing
- Good use of Typescript
- Pagination as infinite scroll

WHAT WILL BE EVALUATED?
- Documentation
- Testing
- Clean code
- Software design
- Git history
- Solution deployed

**DELIVERABLES**
- Netlify link to the deployed web application
- Public GitHub / GitLab / Bitbucket repository URL

The deliverable should be returned to the recruiter who emailed the test

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
