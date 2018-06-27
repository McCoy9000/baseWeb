import React from 'react'
import {BrowserRouter as Router, Route, IndexRoute, browserHistory} from 'react-router-dom'

import {IntlProvider} from 'react-intl'
import {messages, language, loadLocaleData} from './i18n/messages'

import {Layout} from './components/layout/layout'
import {Hero} from './components/hero'

export class App extends React.Component {
  constructor () {
    super()
    loadLocaleData()
    this.state = {language: language}
  }

  render () {
    return (
      <IntlProvider key={language} language={language} messages={messages[language]}>
        <Router history={browserHistory} path='/'>
          <div>
            <Route exact path='/' component={Hero}></Route>
            <Route path='/home' component={Layout}></Route>
          </div>
        </Router>
      </IntlProvider>
    )
  }
}
