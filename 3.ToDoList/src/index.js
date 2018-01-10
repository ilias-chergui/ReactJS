import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Css
import './index.css';

//Component
import App from './App';
// import Pseudo from './Pseudo';
// import NotFound from './NotFound';

// //Router
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//
// const Root = () => {
// 	return (
// 		<Router>
//             <div>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/Pseudo">Pseudo</Link></li>
//                     <li><Link to="/NotFound">NotFound</Link></li>
//                 </ul>
//                 <hr />
//                 <Switch>
//                     <Route exact path='/' component={ App } />
//                     <Route exact path='/Pseudo' component={ Pseudo } />
//                     <Route component={ NotFound } />
//                 </Switch>
//             </div>
//         </Router>
// 	)
// }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
// ReactDOM.render(<Root />, document.getElementById('root'));
// registerServiceWorker();
