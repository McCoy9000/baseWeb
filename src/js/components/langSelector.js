import '../../css/styles.css'

import React from 'react'

import { Button } from './common/button'
import { FormattedMessage } from 'react-intl'

export class LangSelector extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let clickHandler = this.props.changeLanguage
    return (
      <div className='langSelector'>
        <Button
          buttonTitle={<FormattedMessage id='langSelectorButton' />}
          onClick={clickHandler}
        />
      </div>
    );
  }
}
