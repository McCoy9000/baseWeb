import '../../css/styles.css'

import React from 'react'

import Button from './common/button'
import { FormattedMessage } from 'react-intl'

export class LangSelector extends React.Component {

  render() {
    let clickHandler = this.props.changeLanguage
    return (
      <div className='langSelector'>
        <Button
          className='langSelectorButton'
          buttonTitle={<FormattedMessage id='langSelectorButton' />}
          onClick={clickHandler}
        />
      </div>
    );
  }
}
