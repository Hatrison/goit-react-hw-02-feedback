import FeedbackOption from 'components/FeedbackOption';
import { Component } from 'react';
import { OptionsList } from './FeedbackOptions.styled';

export default class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <OptionsList>
        {options.map((option, index) => (
          <li key={index}>
            <FeedbackOption text={option} onLeaveFeedback={onLeaveFeedback} />
          </li>
        ))}
      </OptionsList>
    );
  }
}
