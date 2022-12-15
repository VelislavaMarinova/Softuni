var rootElement = document.getElementById('root');
var reactRoot = ReactDOM.createRoot(rootElement);

// const reactElement = React.createElement('h1', {}, 'Hello React');
// const reactElement = React.createElement(
//     'header',
//      {className: "site-header"}, 
//      React.createElement('h1', {}, 'Hello React!!!!'), 
//      React.createElement('h2', {}, 'Hello React'))

var reactElement = React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
        "h1",
        null,
        "Hello React"
    ),
    React.createElement(
        "h2",
        null,
        "Hello React"
    )
);

reactRoot.render(reactElement);