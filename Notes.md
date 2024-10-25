<<<<<<< HEAD
# <center> <i> React JS </i> </center>
<p style="text-align:right;"> <b>12-01-2024</b></p>

## What is React?
- React is a JavaScript library for building user interfaces.
- It is used to create single-page applications, eliminating the need for page reloading.
- React enables the creation of reusable UI components.
- Maintained by Facebook.
- One-time loading followed by seamless execution without reloading.

## Tools Used for React JS
1. Node JS for npm 
2. VS Code: Code is written here
3. React Dev Tool: Browser extension

## VS Code Extensions
1. Thunder Client: Used to check APIs
2. ES7 React: Provides code hints
3. Bracket Pair Color: Highlights closing braces
4. Auto Rename Tag

## Creating a React App
- `npm install -g npx`
- `npx create-react-app my-app`

## Optimized File for Your React App
- Ensure inclusion of only necessary files for running the React app.
- Run `npm run build`

## Rotating Any Type of Image
```css
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}
```

### React have two type of components
1. Class based components : Pehle use hotey the
2. Function based components : At this time used

### JSX
- React app - src - App.js - return ( JSX CODE WRITEN HERE );
- JSX is an HTML but it will wear the Coat of the JS

#### Some replacement of html with jsx
- class - className
- for - htmlFor
- a - Link
- href - to

### Some note for the react
- React component names must start with an uppercase letter.
- The src folder is commonly used for writing code.
- If you are using the JSX, you should have to write only one tag for returning
- Use JSX fragments for returning more than one tag: <> </>
- Babel compiles JSX down to react.createElement() calls.
- Pascal Case is used in React: FunctionName
- Always close tags, e.g., `<div></div> <img />`
- Use curly braces in HTML {} for passing JavaScript variables.
- `this.state.loading && <Spinner />` executes the spinner if the first condition is true.
- When passing values between different files, uses <strong>props</strong> 
  1. Class :- this.props.variableName 
  2. Function :- props.variableName
- Enhance the distinctiveness of links by employing the "exact" and "keys=" parameters.
- Conceal important values using the `.env.local file` (placed at the root with the package.json file).
- Generating array from sentence where space foundied => text.split(' ')

### App.js
1. Create components using functions or import.
2. Declare multiple functions with return (UI).
3. Declared functions are used as components like <function_name />.
4. App.js returns the component located in `export default fn-name`, `export declare-fn-name`. Only this component will export to another.

### JavaScript Module Linking
- To establish connections between JavaScript files, utilize the 'import' statement to seamlessly incorporate other JavaScript modules into your project. This allows for the convenient integration of various types of JavaScript files.
- ` import VariableName from './FileName'; `

### Props
- Props stand for properties
- Props are read only
- Props are arguments passed into React components
- Props are passed to components via HTML attributes
- Example : 
```js
import PropTypes from 'prop-types'
```
```js
nav.propTypes = {
  title: PropTypes.string.isRequired,
  pack: PropTypes.number.isRequired,
}
```
```js
nav.defaultProps = {
  title: 'Enter title',
  pack: 34
}
```

### React : useState : hook
- State are used when you are changing max time any value
<br/>
#### <i>Function based</i>
  1. useState
  2. useEffect
  3. useRef
  4. useContext
```js
const [text, setText] = useState ('')
const [color, setColor] = useState ({
  color: 'black',
  backgroundColor: 'white'
})
```
- Above code
- <b>text</b> and <b>color</b> variable are used when neede
- <b>setText</b> and <b>setColor</b> used for manipulation
#### <i>Class based</i>
```js
// Declaration
this.state ({
  page: 1
})
// Updation
this.setState ({
  page: 5
})
// Use state value
this.state.page
```
- `this.state` declare inside construnctor()
- Dont set `state` directly
- In React, component properties should be kept in an object called state.

### Routing
- Managing the navigation and rendering of different components in a React application based on the URL or other conditions. 
- Single-page application (SPA), where the entire user interface is built within a single HTML page.
- Use `Routes` instead of `Switch`
- Install `npm install react-router-dom`
- ```<a href=''>``` replaced ```<Link to=''>```
```js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<Router>
  <Routes>
    <Route path='/' element=<componentName /> />
  </Routes>
</Router>    
```
```js
import { Link } from 'react-router-dom';
<Link to='/'>Route Path</Link>
```
 
### React Event
- React events are written in camelCase syntax
- Use curly braces for event handlers: `onClick={shoot}` instead of `onclick="shoot()"`
- ```onClick={shoot}``` instead of ```onclick="shoot()"```
- To pass an argument to an event handler, use the arrow function

### JSON
- Javascript object notation
- JSON is a text format for storing and transforming data
- JSON is a "self-describing" and easy to understand
- Language independent
- Used to send data between computers
- Also able to store the json data in the variable and then call allowed

### Inline Style 
- `style={{width:'40px', height:'60px'}}`
- First curly braces for javascript
- Second curly braces for Object

### Class Based Components
- `import React, { Component } from 'react'`
- OOPs concept : classes , constructor
- In a single scope wthout defining variable you can use that just type `this` keyword
- Include `extends Component` for inheritance.
- The component also requires a render() method, this method returns HTML.

```js
class Car extends Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```
- If there is a <b>constructor()</b> function in your component, this function will be called when the component gets initiated.
- Whenever you want to use the constructor, you must have to use <b>super()</b>
```js
class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}
```
#### <i>LifeCycle of js component</i>
- We use the `componentDidMount` at beginning time
- `componentDidUpdate` when update
- `componentWillUnmount` when distroy

<hr />
<center>Finished notes 1</center>
=======
# <center> <i> React JS </i> </center>
<p style="text-align:right;"> <b>12-01-2024</b></p>

## What is React?
- React is a JavaScript library for building user interfaces.
- It is used to create single-page applications, eliminating the need for page reloading.
- React enables the creation of reusable UI components.
- Maintained by Facebook.
- One-time loading followed by seamless execution without reloading.

## Tools Used for React JS
1. Node JS for npm 
2. VS Code: Code is written here
3. React Dev Tool: Browser extension

## VS Code Extensions
1. Thunder Client: Used to check APIs
2. ES7 React: Provides code hints
3. Bracket Pair Color: Highlights closing braces
4. Auto Rename Tag

## Creating a React App
- `npm install -g npx`
- `npx create-react-app my-app`

## Optimized File for Your React App
- Ensure inclusion of only necessary files for running the React app.
- Run `npm run build`

## Rotating Any Type of Image
```css
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}
```

### React have two type of components
1. Class based components : Pehle use hotey the
2. Function based components : At this time used

### JSX
- React app - src - App.js - return ( JSX CODE WRITEN HERE );
- JSX is an HTML but it will wear the Coat of the JS

#### Some replacement of html with jsx
- class - className
- for - htmlFor
- a - Link
- href - to

### Some note for the react
- React component names must start with an uppercase letter.
- The src folder is commonly used for writing code.
- If you are using the JSX, you should have to write only one tag for returning
- Use JSX fragments for returning more than one tag: <> </>
- Babel compiles JSX down to react.createElement() calls.
- Pascal Case is used in React: FunctionName
- Always close tags, e.g., `<div></div> <img />`
- Use curly braces in HTML {} for passing JavaScript variables.
- `this.state.loading && <Spinner />` executes the spinner if the first condition is true.
- When passing values between different files, uses <strong>props</strong> 
  1. Class :- this.props.variableName 
  2. Function :- props.variableName
- Enhance the distinctiveness of links by employing the "exact" and "keys=" parameters.
- Conceal important values using the `.env.local file` (placed at the root with the package.json file).
- Generating array from sentence where space foundied => text.split(' ')

### App.js
1. Create components using functions or import.
2. Declare multiple functions with return (UI).
3. Declared functions are used as components like <function_name />.
4. App.js returns the component located in `export default fn-name`, `export declare-fn-name`. Only this component will export to another.

### JavaScript Module Linking
- To establish connections between JavaScript files, utilize the 'import' statement to seamlessly incorporate other JavaScript modules into your project. This allows for the convenient integration of various types of JavaScript files.
- ` import VariableName from './FileName'; `

### Props
- Props stand for properties
- Props are read only
- Props are arguments passed into React components
- Props are passed to components via HTML attributes
- Example : 
```js
import PropTypes from 'prop-types'
```
```js
nav.propTypes = {
  title: PropTypes.string.isRequired,
  pack: PropTypes.number.isRequired,
}
```
```js
nav.defaultProps = {
  title: 'Enter title',
  pack: 34
}
```

### React : useState : hook
- State are used when you are changing max time any value
<br/>
#### <i>Function based</i>
  1. useState
  2. useEffect
  3. useRef
  4. useContext
```js
const [text, setText] = useState ('')
const [color, setColor] = useState ({
  color: 'black',
  backgroundColor: 'white'
})
```
- Above code
- <b>text</b> and <b>color</b> variable are used when neede
- <b>setText</b> and <b>setColor</b> used for manipulation
#### <i>Class based</i>
```js
// Declaration
this.state ({
  page: 1
})
// Updation
this.setState ({
  page: 5
})
// Use state value
this.state.page
```
- `this.state` declare inside construnctor()
- Dont set `state` directly
- In React, component properties should be kept in an object called state.

### Routing
- Managing the navigation and rendering of different components in a React application based on the URL or other conditions. 
- Single-page application (SPA), where the entire user interface is built within a single HTML page.
- Use `Routes` instead of `Switch`
- Install `npm install react-router-dom`
- ```<a href=''>``` replaced ```<Link to=''>```
```js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<Router>
  <Routes>
    <Route path='/' element=<componentName /> />
  </Routes>
</Router>    
```
```js
import { Link } from 'react-router-dom';
<Link to='/'>Route Path</Link>
```
 
### React Event
- React events are written in camelCase syntax
- Use curly braces for event handlers: `onClick={shoot}` instead of `onclick="shoot()"`
- ```onClick={shoot}``` instead of ```onclick="shoot()"```
- To pass an argument to an event handler, use the arrow function

### JSON
- Javascript object notation
- JSON is a text format for storing and transforming data
- JSON is a "self-describing" and easy to understand
- Language independent
- Used to send data between computers
- Also able to store the json data in the variable and then call allowed

### Inline Style 
- `style={{width:'40px', height:'60px'}}`
- First curly braces for javascript
- Second curly braces for Object

### Class Based Components
- `import React, { Component } from 'react'`
- OOPs concept : classes , constructor
- In a single scope wthout defining variable you can use that just type `this` keyword
- Include `extends Component` for inheritance.
- The component also requires a render() method, this method returns HTML.

```js
class Car extends Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```
- If there is a <b>constructor()</b> function in your component, this function will be called when the component gets initiated.
- Whenever you want to use the constructor, you must have to use <b>super()</b>
```js
class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}
```
#### <i>LifeCycle of js component</i>
- We use the `componentDidMount` at beginning time
- `componentDidUpdate` when update
- `componentWillUnmount` when distroy

<hr />
<center>Finished notes 1</center>
>>>>>>> 991ae607c122531e44e24435c10f5246dcdfc4c7
<hr />