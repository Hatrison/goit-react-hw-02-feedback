import React, { Component } from 'react';
import { Button } from './FeedbackOption.styled';

export default class FeedbackOption extends Component {
  render() {
    const { text, onLeaveFeedback } = this.props;

    return <Button onClick={() => onLeaveFeedback(text)}>{text}</Button>;
  }
}
