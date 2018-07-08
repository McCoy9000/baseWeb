import React from 'react'
import { BrowserRouter as Router, Route, IndexRoute, browserHistory } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { messageSource } from './i18n/i18n'
import { Layout } from './components/layout/layout'
import { Hero } from './components/hero'

export class AltApp extends React.Component {
  constructor(props) {
    super(props)
    messageSource.init()
    this.state = {
      language: messageSource.language,
      availableLanguage: (function (currentLanguage) {
        switch (currentLanguage) {
          case 'en':
            return 'it'
          case 'it':
            return 'en'
          default:
            return 'en'
        }
      })(messageSource.language)
    }
  }

  // componentDidUpdate() {
  //   let newState = this.state
  //   newState.availableLanguage = (function (currentLanguage) {
  //     switch (currentLanguage) {
  //       case 'en':
  //         return 'it'
  //       case 'it':
  //         return 'en'
  //       default:
  //         return 'en'
  //     }
  //   })(this.state.language)
  //   this.setState(newState)
  // }

  render() {
    return (
      <IntlProvider
        locale={this.state.language}
        key={this.state.language}
        messages={messageSource.messages[this.state.language]}
      >
        <Router history={browserHistory} path="/">
          <div>
            <Route exact path="/" component={Hero} />
            <Route path="/home" render={props => (
              <Layout {...props} i18n={{ changeLanguage: messageSource.changeLanguage.bind(this, this.state.availableLanguage), availableLanguage: this.state.availableLanguage }} />
            )}
            />
          </div>
        </Router>
      </IntlProvider>
    )
  }
}
