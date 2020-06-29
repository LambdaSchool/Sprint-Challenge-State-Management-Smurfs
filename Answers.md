1. What problem does the context API help solve?
It fixes prop drilling


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

reducers take a state, and an action to perform on that state and return a new state object. actions are the actions taken in by the reducer to change the state. store is the place in an application where the application level state is held. any pieces of state that the entie application needs to know about is stored there.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

It enables us to return fuctions from our fuctions that gives us access to dispatch


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

it allows us to have multiple types of actions and it parses and passes info to them, allows redux to be asynchronous


1. What is your favorite state management system you've learned and this sprint? Please explain why!

context api, requires less work :)