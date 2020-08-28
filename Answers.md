What problem does the context API help solve?
prop drilling

In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions define functions, reducers tell them what they do, store holds state/passes around data

What is the difference between Application state and Component state? When would be a good time to use one over the other?

Your application state is global, and your component state is local. Flux or a flux-like library like Redux, use what they call "stores" to hold application state. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it.

Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.
Essentially, it allows us to have multiple types of actions and it parses and passes info to them, and allows redux to be asynchronous.

What is your favorite state management system you've learned and this sprint? Please explain why!
context api, requires less work
