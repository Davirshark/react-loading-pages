import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColum = ({ title, text, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading uppercase>{title}</Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColum.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  background: P.bool,
};
