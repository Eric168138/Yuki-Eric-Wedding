import styled from 'styled-components';
import { Flex } from '../styles';
import HeartIcon from '../components/Icons/heart';
export default function Ending() {
  return (
    <Container>
      <Flex>
        <Text>
          <HeartIcon /> 我們會幸福健康,好好地生活的 <HeartIcon />{' '}
        </Text>
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Text = styled.p`
  @media (max-width: 414px) {
    font-size: 1.4rem;
  }
  @media (max-width: 375px) {
    font-size: 1.4rem;
  }
  font-size: 1.2rem;
`;
