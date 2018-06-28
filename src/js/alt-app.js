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
    this.state = {language: messageSource.language}
  }
  changeLang (newLanguage) {
    this.setState({
      language: newLanguage
    })
  }

  render (props) {
    return (
      <IntlProvider locale={this.state.language} key={this.state.language} messages={messageSource.messages[this.state.language]}>
        <Router history={browserHistory} path='/'>
          <div>
            <Route exact path='/' component={Hero}></Route>
            <Route path='/home' render={(props) => <Layout changeLanguage={this.changeLang.bind(this)}/>}></Route>
          </div>
        </Router>
      </IntlProvider>
    )
  }
}
