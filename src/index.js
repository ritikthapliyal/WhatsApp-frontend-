import React from 'react';
import App from './App';
import './Assets/Css/index.css'
import { Provider} from 'react-redux'
import { store } from './Features/Store';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(    <Provider store={store}>
                    <React.StrictMode>
                        <App/>
                    </React.StrictMode>
                </Provider>
            );
