import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from "./components/Gallery";
import ContactForm from './components/Contact';
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
  //time to lift gallery up a level!
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      {/* Time to make a nav component.in 20.3 time to up gallery up a level to interact with nav better */}
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>
        {/* Added during 20.4 */}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      </Nav>
      <main>
        {/* Out of place contact form
        <ContactForm></ContactForm>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About> */}
           {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>
    </div>
  );
}
export default App;
