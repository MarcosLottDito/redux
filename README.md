# redux

Im building this repository to save my studies of <span style="color: #8be9fd;">redux library</span> and document it into this reademe.md file so I can help other people to understand it in a simple way.

So, getting started, lets jump into it!

Basically, if I could resume redux in a sentence, I could say that redux is a very well known library that allows you to conduct some state management in your react application.

## what is state management?

To explain the importance of state management and how redux can help us in doing that I made this simple diagram:

<p align="center">
  <img src="./public/readme1.png" alt="Alt text">
</p>

Imagine that we have this <span style="color: #ff79c6;">app</span> component that has 2 others components: <span style="color: #ff79c6;">login</span> and <span style="color: #ff79c6;">profile</span>.

The <span style="color: #ff79c6;">login component</span> is where you write the code to log into a profile, filling in your username, email, and any other information associated with a profile.

On the other hand, we have the <span style="color: #ff79c6;">profile component</span>, which is where you can view and edit the information in your profile once you're already logged in.

So, the main idea here is that we want to access the same state (profile information) in both of these components. However, we don't want to pass this information as props to them, as it could lead to a messy and disorganized codebase.

For this reason, we want to focus on state management for different states that we need to access throughout the component tree, and redux allows us to achieve that.
