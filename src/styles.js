import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    background-color: #CACACA;
    width: 50%;
    `

export const LargerButton = styled.button`
    width: 50%;
    height: 71px;
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #00AAF0;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;

    &:hover {
        opacity: 0.6;
    }
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const LabeledLargerButton = ({ label, onClick }) => {
    return (
      <LargerButton onClick={onClick}>
       {label}
      </LargerButton>
    );
  };