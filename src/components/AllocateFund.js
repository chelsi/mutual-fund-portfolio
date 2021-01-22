import React, {useState} from "react";
import '../App.css';

const AllocateFund = (props) => {

  const [input, setInput] = useState(0);
  const [inputs,setInputs] = useState({});
  //console.log(inputs);
  return (
    <div>
      <form>
        <label> Total amount to be invested : <input value={input} onInput={e => setInput(e.target.value)}/> </label>

        </form>
        <table id="allocationTable">
          <thead>
            <tr>
              <th>Funds</th>
              <th>Percentage</th>
              <th>Amount</th>
            </tr>
          </thead>
        <tbody>
          {props.location.state.funds.map((fund,index) => (
              <tr key={fund}>
                <td>{fund}</td>
                <td><input  name={fund} onInput={({target}) => setInputs(state => ({...state, [target.name] :target.value}))} value={inputs.fund}/></td>
                <td>{input*inputs[`${fund}`]/100}</td>
              </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
}

export default AllocateFund
