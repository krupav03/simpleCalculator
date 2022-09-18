import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const handler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <center>
        <h1 className="m-3">Simple Calculator</h1>
        <input
          type="text"
          value={input}
          name="input"
          onChange={handler}
          placeholder="Enter"
        />
        <br />
        <Button
          className="mt-3"
          variant="info"
          onClick={() => setResult(eval(input))}
        >
          Result
        </Button>
        <h4 className="m-2">Result is : {result}</h4>
        <Button variant="info" onClick={() => setInput(input + "1")}>
          1
        </Button>{" "}
        <Button variant="info" onClick={() => setInput(input + "2")}>
          2
        </Button>{" "}
        <Button variant="info" onClick={() => setInput(input + "3")}>
          3
        </Button>{" "}
        <Button variant="info" onClick={() => setInput(input + "4")}>
          4
        </Button>{" "}
        <Button variant="info" onClick={() => setInput(input + "5")}>
          5
        </Button>{" "}
        <br />
        <Button variant="info" onClick={() => setInput(input + "6")}>
          6
        </Button>{" "}
        <Button variant="info" onClick={() => setInput(input + "7")}>
          7
        </Button>{" "}
        <Button variant="info" onClick={() => setInput(input + "8")}>
          8
        </Button>{" "}
        <Button variant="info" onClick={() => setInput(input + "9")}>
          9
        </Button>{" "}
        <Button variant="info" onClick={() => setInput(input + "0")}>
          0
        </Button>{" "}
        <br />
        <Button variant="info" onClick={() => setInput(input + "+")}>
          +
        </Button>{" "}
        <Button variant="info" onClick={() => setInput(input + "-")}>
          -
        </Button>{" "}
        <Button variant="info" onClick={() => setInput(input + "*")}>
          *
        </Button>{" "}
        <Button variant="info" onClick={() => setInput(input + "/")}>
          /
        </Button>{" "}
        <Button variant="info" onClick={() => setInput("")}>
          clr
        </Button>{" "}
      </center>
    </div>
  );
};

export default App;
