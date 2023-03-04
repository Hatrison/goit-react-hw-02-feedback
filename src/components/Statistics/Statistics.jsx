import Notification from 'components/Notification';
import React, { PureComponent } from 'react';
import { Container, Option } from './Statistics.styled';

export default class Statistics extends PureComponent {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <Container>
        {total ? (
          <>
            <Option>good: {good}</Option>
            <Option>neutral: {neutral}</Option>
            <Option>bad: {bad}</Option>
            <Option>total: {total}</Option>
            <Option>positive feedback: {positivePercentage}</Option>
          </>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    );
  }
}
