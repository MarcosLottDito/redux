# redux

I'm creating this repository to save my studies of the `redux library` and document them in this readme.md file so that I can assist other people in understanding it in a straightforward manner.

so, to get started, let's dive right in!

in essence, if I were to summarize redux in a single sentence, I would say that redux is a very well known library that allows you to manage states in your `react application`.

<p align="center">
  <img src="./public/readme0.png" alt="Banner" width="600">
</p>

## what is state management?

to explain the importance of state management and how redux can help us in doing that I made this simple diagram:

<p align="center" style='width:400px'>
  <img src="./public/readme1.png" alt="Diagram" width="600">
</p>

imagine that we have this `app component` that has 2 others components: `login` and `profile`.

the `login component` is where you write the code to log into an user profile, filling in your username, email, and any other information associated with an user.

on the other hand, we have the `profile component`, which is where the user can view and edit its information once it'is already logged in.

so, the main idea here is that we want to access the same state (user information) in both of these components. however, we don't want to pass this information as props to them, as it could lead to a messy and disorganized codebase.

for this reason, we want to focus on state management for different states that we need to access throughout the component tree, and redux allows us to achieve that.

## how can we hold information?

let's introduce the concept of a `store`. a store is essentially a container, something that holds information. so, when we create a store in redux, it serves as a place to store all the states you want to make `global`, allowing you to access them throughout your entire application.

to create a store, we just need to import the function called `configureStore()` from the `redux-toolkit` library and pass your reducers into it. after that, we are able to create a `provider` to wrap our `app component` so it can have access to all of the information contained in the store.

```jsx
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

but what exactly is a `reducer`? well, a reducer is just a function that takes the `previous value` of the state and an `action` so it can change the value of the state in response to that action.

that's how we hold all of the information needed for our code to work! we are going to have reducers for all of the different states we want to have in our application so we can manage them properly.
