import styled from 'styled-components';

export const CardContainer = styled.div`
  background: linear-gradient(0deg, #c6576e 0%, #3f5efb 100%);
  width: 100%;
  max-width: 300px;
  min-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  flex-direction: column;
  padding: 1rem;
  font-size: 20px;
  margin: 1rem;
  position: relative;
  box-shadow: 0 0 8px 2px ${props => props.color || "rgba(255, 255, 255, 0.5)"};
  transition: 0.25s;
  &:hover {
    box-shadow: 0 1px 10px 4px ${props => props.hover || "rgba(255, 255, 255, 0.8)"};
  }

  img {
    padding: 2rem 1rem 1rem 1rem;
    max-height: 300px;
    width: 100%;
  }

  button {
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 5px;
    min-width: 9vw;
    min-height: 3vh;
    font-size: 16px;
    margin: 10px 0;
    padding: 10px;
  }
`;
