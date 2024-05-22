// import './App.css';
// import Navbar from './Components/Navbar';
// import React, { Component } from 'react'
// import News from './Components/News';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

// import LoadingBar from 'react-top-loading-bar'


// // using class based components
// export default class App extends Component {
//   // apiKey = process.env.News_Api;

//   state = {
//     progress:0
//   }

//   setProgress = (progress) => {
//     this.setState({ progress: progress })
//   }

//   render() {
//     return (
//       <div>
//         <Router>
//           <LoadingBar
//             color='#f11946'
//             progress={this.state.progress}
//           // onLoaderFinished={() => setProgress(0)}
//           />
//           <Navbar />
//           <Routes>
//             <Route exact path="/" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="General" pagesize={6} country="in" category="General" />
//             } />
//             <Route exact path="/Entertainment" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="Entertainment" pagesize={6} country="in" category="Entertainment" />
//             } />
//             <Route exact path="/Health" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="Health" pagesize={6} country="in" category="Health" />
//             } />
//             <Route exact path="/Sports" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="Sports" pagesize={6} country="in" category="Sports" />
//             } />
//             <Route exact path="/Technology" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="Technology" pagesize={6} country="in" category="Technology" />
//             } />
//             <Route exact path="/Science" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="Science" pagesize={6} country="in" category="Science" />
//             } />
//           </Routes>
//         </Router>
//       </div>
//     )
//   }
// }

import './App.css';
import Navbar from './Components/Navbar';
import React, { useState } from 'react'
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'


const App = () => {
  // apiKey = process.env.News_Api;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          progress = {progress} 
        // onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="General" pagesize={6} country="in" category="General" />
          } />
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} key="Entertainment" pagesize={6} country="in" category="Entertainment" />
          } />
          <Route exact path="/Health" element={<News setProgress={setProgress} key="Health" pagesize={6} country="in" category="Health" />
          } />
          <Route exact path="/Sports" element={<News setProgress={setProgress} key="Sports" pagesize={6} country="in" category="Sports" />
          } />
          <Route exact path="/Technology" element={<News setProgress={setProgress} key="Technology" pagesize={6} country="in" category="Technology" />
          } />
          <Route exact path="/Science" element={<News setProgress={setProgress} key="Science" pagesize={6} country="in" category="Science" />
          } />
        </Routes>
      </Router>
    </div>
  )
}
export default App;
