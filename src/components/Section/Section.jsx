import { Component } from 'react';
import { Container, Title } from './Section.styled';

export default class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    );
  }
}
