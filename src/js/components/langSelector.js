import '../../css/styles.css'

import React from 'react'

import { Button } from './common/button'
import { FormattedMessage } from 'react-intl'

export class LangSelector extends React.Component {
  constructor(props) {
    super(props)
    this.clickHandler = props.i18n.changeLanguage(props.i18n.availableLanguage)
  }

  render() {
    return (
      <div className='langSelector'>
        <Button
          buttonTitle={<FormattedMessage id='langSelectorButton' />}
          onClick={this.clickHandler}
        />
      </div>
    );
  }
}
