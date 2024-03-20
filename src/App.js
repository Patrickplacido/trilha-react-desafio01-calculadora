import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row, LabeledLargerButton } from './styles';
import { useState } from 'react';
const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${num}`);
  };

  const handleSumNumbers = () => {
    const result = calculateResult();
    setFirstNumber(String(result));
    setOperation('+');
    setCurrentNumber('0');
  };

  const handleMinusNumbers = () => {
    const result = calculateResult();
    setFirstNumber(String(result));
    setOperation('-');
    setCurrentNumber('0');
  };

  const handleDivisionNumbers = () => {
    const result = calculateResult();
    setFirstNumber(String(result));
    setOperation('/');
    setCurrentNumber('0');
  };

  const handleMultiplicationNumbers = () => {
    const result = calculateResult();
    setFirstNumber(String(result));
    setOperation('*');
    setCurrentNumber('0');
  };

  const handleEquals = () => {
    const result = calculateResult();
    setFirstNumber(String(result));
    setOperation('');
    setCurrentNumber(String(result));
  };

  const calculateResult = () => {
    let result = 0;
    switch (operation) {
      case '+':
        result = Number(firstNumber) + Number(currentNumber);
        break;
      case '-':
        result = Number(firstNumber) - Number(currentNumber);
        break;
      case '/':
        result = Number(firstNumber) / Number(currentNumber);
        break;
      case '*':
        result = Number(firstNumber) * Number(currentNumber);
        break;
      default:
        result = Number(currentNumber);
        break;
    }
    return result;
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <LabeledLargerButton label="c" onClick={handleOnClear} />
          <Button label="x" onClick={handleMultiplicationNumbers} />
          <Button label="/" onClick={handleDivisionNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="0" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;