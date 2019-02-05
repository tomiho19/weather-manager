import React from 'react'
import { ToastContainer } from 'react-toastify';
import AsyncApp from "./components/App"
import 'react-toastify/dist/ReactToastify.min.css';
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div>
            <AsyncApp />
            <ToastContainer />
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

