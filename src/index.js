import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//1)
// ReactDOM.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>,
//     document.getElementById('root')
// );
// 2)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
//3) all three are valid

// ReactDOM.render(<App/>,document.getElementById('root'))



