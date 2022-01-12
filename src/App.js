// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Headlines from './components/Headlines'

function App() {
  return (
    <React.Fragment>
    {/* The Headlines component will have the bulk of our code. 
    Because we will be using state, it will be a class component. */}
          <Headlines/>
    </React.Fragment>
  );
}

export default App;


// import useApi from './components/useApi';

// const App = () => {
//   const {isLoaded, data, error} = useApi(`https:/api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`
//   )
// }
//   if(!isLoaded) return <h1>Loading...</h1>
 
//   if(error) {return <>Error: {error.message}</>;
// // if isLoaded is false, we are in the process of loading 
// // hence render Loading...
// } else if (!isLoaded) {
//     return <>Loading...</>;
// } else {
// // otherwise, we'll return the headlines in an unordered list
// // with the title and the body using the key as the index
//     return (
//         <>
//             <div className="container">
//                 <div id="infoContainer">
//                 <h1> Headlines: </h1>
//                 <ul>
//                 {headlines.map((results, index) =>
//                     <li key={index}>
//                         <h3>{results.title}</h3>
//                         <p>{results.abstract}</p>
//                         <p>{results.published_date}</p>
//                     </li>
//                  )}
//                 </ul>
//             </div>
//             </div>
//         </>
// );
// }

// export default App;