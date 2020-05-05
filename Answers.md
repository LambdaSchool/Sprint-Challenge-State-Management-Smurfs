1. What problem does the context API help solve?
    Context drastically improves the flexibility and ease with which you can pass data around. It's amazing!
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are basically just functions tht usually dispatch reducers, and give them information. Reducers execute the actions and return the information passed down from the action. A store is part of Async Redux. It's a way to store all of your state in an app and just another way to pass data around (it essentially replaces props).
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is state that is used all over an application. Component state is usually only needed in a small portion of an application. It's good for storing state that is only needed in one component.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
    I honestly love Context API. It's so simple to use and sooo much easier than props or Async Redux. I'm so glad it exists because it takes a lot of brain twisting and mind bending props levels out of the equation.
