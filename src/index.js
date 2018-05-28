import './css/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './js/app'
import T from 'i18n-react'
import dictionary from "../resources/texts/i18n-lang.json";

T.setTexts(dictionary);

ReactDOM.render(
    <div>
      <App />
    </div>,
    document.getElementById('root')
  );