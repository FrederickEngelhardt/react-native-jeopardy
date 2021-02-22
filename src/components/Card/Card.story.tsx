import { storiesOf } from '@storybook/react-native'
import * as React from 'react'
import { ThemeProvider } from 'styled-components/native'

import Card, { ANSWER_STATE, QUESTION_STATE } from './Card'
import cardProps from './Card.props'
import { number, select, text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Card
      {...cardProps}
      title={text('Title Text', cardProps.title)}
      cardState={select(
        'Switch Card State',
        { points: null, question: QUESTION_STATE, answer: ANSWER_STATE },
        null
      )}
      points={number('Card Points', cardProps.points)}
      handleToggle={action('called toggleCard action')}
    />
  ))
