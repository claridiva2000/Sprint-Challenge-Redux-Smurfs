1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects?

- concat, filter, map, reduce,

  2.Which method do we use to create a new object while extending the properties of another object?

- Object.create()

3.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do?

- Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispat
- Reducers are pure functions that take in a state and action and return a new state.
- store manages the whole state of the app in an immutable object tree.
  Why is the store known as a 'single source of truth' in a redux application?
- Usually, in HTML + JS, the state/value of the <input> is controlled by the browser, not javascript. If you also keep the value of such an input in javascript (for any reason), it means there are at least "two sources of truth" - what the browser thinks the value is, and what your code thinks the value is. With React "controlled components", the two states/values always match, because React always ensures that the browser's (<input>'s) value is equal to the one you provide from javascript (using value attribute), and so effectively, there is only one "source of truth" left

4.  What is the difference between Application state and Component state? - Generally component state is stored locally within a component and is not accessible from other components unless it’s explicitly passed as props to it’s sub components. When the number of components increases, the passing of props starts becoming cumbersome. Redux state is a centralized global store which is accessible to any component that subscribes to the store.
    When would be a good time to use one over the other?
    -redux is overkill for a lot of simpler applications. On applications where you have multple uses from state by different components, redux would be better.

5.  What is middleware?

- Middlware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer. Examples of different uses for middleware include logging actions, reporting errors, making asynchronous requests, and dispatching new actions.

6.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed
- It put actions creators into a function so you don't have to re-type the actions over and over. It reduces the chances of a type error and makes the code easier to debug later on.

7.  Which `react-redux` method links up our `components` with our `redux store`?

- The connect() function connects a React component to a Redux store. It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
