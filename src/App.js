import React from 'react';
import Nav from './components/Nav';
import About from './components/About';

//asked to comment this out and start over
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// could also use const App = () => { return ()}
function App() {
  return (
    <div>
      {/* Time to make a nav component */}
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}
export default App;
