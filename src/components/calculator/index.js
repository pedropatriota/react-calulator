import React from "react";
import "./index.css";

export default function Calculator() {
  const [form, setForm] = React.useState({
    input1:'', input2: ''
  });

  console.log({form})

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOperation = (operation)=>{
    switch(operation){
      case '+':
        return Number(form['input1']) + Number(form['input2']);
      case '-':
        return Number(form['input1']) - Number(form['input2']);
      case '*':
        return Number(form['input1']) * Number(form['input2']);
      default:
        return Number(form['input1']) / Number(form['input2']);
    }
  }

  const handleReset = (e)=>{
    setForm({...form,[e.target.name]: ''})
  }

  return (
    <div className="layout-column align-items-center">
      <div
        data-testid="total-operations"
        className="pt-50 total-operations"
      ></div>
      <div className="card">
        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input
              type="number"
              className="ml-3 mr-3"
              data-testid="app-input1"
              autoComplete="off"
              placeholder="Eg: 1"
              name="input1"
              value = {form["input1"]}
              onChange = {onChangeForm}
            />
            <label
              className="ml-2 mr-2 symbol text-center"
              data-testid="selected-operator"
            ></label>

            <input
              type="number"
              data-testid="app-input2"
              autoComplete="off"
              className="ml-3 mr-3"
              placeholder="Eg: 2"
              name='input2'
              value = {form["input2"]}
              onChange = {onChangeForm}
            />
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button
              className="operationFont"
              type="submit"
              data-testid="addButton"
              onClick = {()=>handleOperation('+')}
            >
              +
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="subtractButton"
              onClick = {()=>handleOperation('-')}
            >
              -
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="multiplyButton"
              onClick = {()=>handleOperation('*')}
            >
              *
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="divideButton"
              onClick = {()=>handleOperation('/')}
            >
              /
            </button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button
              type="reset"
              data-testid="resetButton"
              className="outline danger"
              onClick = {handleReset}
            >
              Reset
            </button>
            <div className="layout-row justify-content-center align-items-center result-container">
              <div
                data-testid="result"
                className="result-value ma-0 slide-up-fade-in"
              >{`Result: ${handleOperation()}`}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
