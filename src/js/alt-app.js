import React from 'react'
import {BrowserRouter as Router, Route, IndexRoute, browserHistory} from 'react-router-dom'

import {IntlProvider} from 'react-intl'
import {messageSource, changeLang} from './i18n/i18n'
import {Layout} from './components/layout/layout'
import {Hero} from './components/hero'

export class AltApp extends React.Component {

  constructor () {
    super()
    messageSource.init()
    this.state = {language: messageSource.language}
  }

  componentWillMount () {
    this.changeLanguage = (newLanguage) => changeLang(newLanguage)
  }

  render () {
    return (
      <IntlProvider locale={this.state.language} key={this.state.language} messages={messageSource.messages[this.state.language]}>
        <Router history={browserHistory} path='/'>
          <div>
            <Route exact path='/' component={Hero}></Route>
            <Route path='/home' render={(props) => <Layout {...props} changeLanguage={this.changeLanguage} />}></Route>
          </div>
        </Router>
      </IntlProvider>
    )
  }
}
