import styled from "styled-components";

const ControlContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 9999;
  opacity: 0.1;
  position: absolute;
  width: 100%;

  & * {
    display: flex;
    align-items: center;
    margin: 5px;
    padding: 5px;
    min-height: 20px;
    color: #fff;
    font-size: 1em;
    font-family: Arial, Helvetica, sans-serif;

    border: none;
    background: none;
  }

  & button {
    font-size: 2em;

    &:first-of-type {
      padding-bottom: 10px;
    }

    &.disabled {
      color: #f00;
    }
  }
`;

export default ControlContainer;
