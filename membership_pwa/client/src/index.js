import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './styles/index.css';

// createRoot를 사용하여 루트 생성
const root = ReactDOM.createRoot(document.getElementById('root'));

// render 메서드로 컴포넌트 렌더링
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
