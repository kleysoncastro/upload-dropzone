import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 800px;
  height: 500px;

  margin: 0 auto;
  padding: 40px 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  border-radius: 6px;

  padding: 0;

  background-color: #3648a5;
`;

export const Box = styled.div`
  background-color: #ffff;

  border-radius: 6px;
  width: 440px;
  height: 320px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: #3648a5;
    font-size: 30px;
  }
`;
export const DragContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;

  p {
    margin-top: 20px;
    color: #43434a;
    font-size: 18px;
  }

  button {
    margin-top: 20px;
    width: 400px;
    height: 40px;
    background-color: #304ffe;
    border: 0;
    border-radius: 5px;
    color: #fff;
  }
`;

export const DropBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 400px;

  border: 1.5px dashed #777eff;
  border-radius: 5px;
  cursor: pointer;

  p {
    color: #43434a;
    font-size: 15px;
    line-height: 27px;
    white-space: nowrap;
  }
  a {
    text-decoration: none;
  }
`;
