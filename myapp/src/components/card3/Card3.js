import styled from "styled-components";

const Wrapper = styled.div`
  background-color: green;
  padding: 10px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.color ? props.color : "white")};
`;

const BorderdButton = styled(Button)`
  border: 2px solid black;
  margin-left: 10px;
`;

const Card3 = () => {
  return (
    <Wrapper>
      <Title>Card3</Title>
      <p>ini body card 3</p>
      <Button>Click me</Button>
      <Button color="yellow">Click me 2</Button>
      <BorderdButton color="pink">Click me 2</BorderdButton>
    </Wrapper>
  );
};

export default Card3;
