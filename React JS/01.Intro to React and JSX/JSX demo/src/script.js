const rootElement = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootElement);

// const reactElement = React.createElement('h1', {}, 'Hello React');
// const reactElement = React.createElement(
//     'header',
//      {className: "site-header"}, 
//      React.createElement('h1', {}, 'Hello React!!!!'), 
//      React.createElement('h2', {}, 'Hello React'))

const reactElement = <header className="site-header">
    <h1>Hello React</h1>
    <h2>Hello React</h2>
</header>

reactRoot.render(reactElement)