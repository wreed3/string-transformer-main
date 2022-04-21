import { useState } from 'react';
import './App.css';

function Radio({ value, group, onChange, checked }) {
  const isChecked = checked === value;

  return (
    <label className={isChecked ? 'radio checked' : 'radio'}>
      <input type="radio" name={group} onChange={onChange} value={value} checked={isChecked} />
      <span className="radio-box" />
      <span>{value}</span>
    </label>
  );
}

function transformString(string, transform) {
  switch(transform) {
    case 'reverse':
      return string.split('').reverse().join('');
    case 'uppercase':
      return string.toUpperCase();
    case 'lowercase': // TODO
    case 'reverse word order': // TODO
    default:
      return string;
  }
}

function styleString(string, transform) {
  switch(transform) {
    case 'red':
      return { color: 'red' };
    default:
      return {};
  }
}

function App() {
  const [string, setString] = useState('');
  const [transform, setTransform] = useState('reverse');

  const updateString = (e) => setString(e.target.value);
  const updateTransform = (e) => setTransform(e.target.value);

  const output = transformString(string, transform);
  const style = styleString(string, transform);

  return (
    <div className="app">
      <div>
        <h4>Your String</h4>
        <input aria-label="your string" type="text" placeholder="your string" onChange={updateString} />
      </div>
      <div>
        <h4>Transformation Method</h4>
        <Radio group="transform" onChange={updateTransform} checked={transform} value="reverse" />
        <Radio group="transform" onChange={updateTransform} checked={transform} value="uppercase" />
        <Radio group="transform" onChange={updateTransform} checked={transform} value="lowercase" />
        <Radio group="transform" onChange={updateTransform} checked={transform} value="reverse word order" />
        <Radio group="transform" onChange={updateTransform} checked={transform} value="red" />
      </div>
      <div>
        <h4>Output</h4>
        <p data-testid="output" style={style}>{output}</p>
      </div>
    </div>
  );
}

export default App;
