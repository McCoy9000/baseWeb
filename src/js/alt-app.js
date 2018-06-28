import React from 'react'
import {BrowserRouter as Router, Route, IndexRoute, browserHistory} from 'react-router-dom'

import {IntlProvider} from 'react-intl'
import {messageSource} from './i18n/i18n'
import {Layout} from './components/layout/layout'
import {Hero} from './components/hero'

export class AltApp extends React.Component {
  constructor () {
    super()
    messageSource.init()
    this.changeLanguage = this.changeLanguage.bind(this)
    this.state = {language: messageSource.language}
  }
  changeLanguage (newLanguage) {
    this.state.language = newLanguage
  }
  render (props) {
    return (
      <IntlProvider locale={this.state.language} key={this.state.language} messages={messageSource.messages[this.state.language]}>
        <Router history={browserHistory} path='/'>
          <div>
            <Route exact path='/' component={Hero}></Route>
            <Route path='/home' render={(props) => <Layout {...props} changeLanguage={this.changeLanguage}/>}></Route>
          </div>
        </Router>
      </IntlProvider>
    )
  }
}
