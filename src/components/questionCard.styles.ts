import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: transparent;
  border-radius: 20px;
  border: 2px solid #696969;
  padding: 20px;
  margin-top:15px;
  box-shadow: 5px 5px #696969;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.6;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #FF5656, #C16868)'
        : 'transparent'};
    border: 3px solid #696969;
    box-shadow: 3px 3px #696969;
    border-radius: 9px;
    color: #696969;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;