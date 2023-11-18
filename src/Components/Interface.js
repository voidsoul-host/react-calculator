import React, { useState } from "react";

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaDivide } from "react-icons/fa";

const Interface = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);

    function validateInputs() {
        if (num1 === '') {
            setError("Num1 Cannot Be Empty");
            setResult(null);
            return false;
        }
        else if (isNaN(Number(num1))) {
            setError('Please enter valid number in Num1.');
            setResult(null);
            return false;
        }
        else if (num2 === '') {
            setError("Num2 Cannot Be Empty");
            setResult(null);
            return false;
        }
        else if (isNaN(Number(num2))) {
            setError('Please enter valid number in Num2.');
            setResult(null);
            return false;
        }
        setError(null);
        return true;
    };

    function handleOperation(operation) {
        if (validateInputs()) {
            const number1 = parseFloat(num1);
            const number2 = parseFloat(num2);

            switch (operation) {
                case 'add':
                    setResult(number1 + number2);
                    setNum1("")
                    setNum2("")
                    break;
                case 'subtract':
                    setResult(number1 - number2);
                    setNum1("")
                    setNum2("")
                    break;
                case 'multiply':
                    setResult(number1 * number2);
                    setNum1("")
                    setNum2("")
                    break;
                case 'divide':
                    if (number2 !== 0) {
                        setResult(number1 / number2);
                        setNum1("")
                        setNum2("")
                    } else {
                        setError('Cannot divide by zero.');
                    }
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <div className="calculator">
            <h1>React Calculator</h1>

            <input type="text" placeholder="Num 1" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <input type="text" placeholder="Num 2" value={num2} onChange={(e) => setNum2(e.target.value)} />

            <div >
                <FaPlus className="btn" onClick={() => handleOperation('add')} />
                <FaMinus className="btn" onClick={() => handleOperation('subtract')}/>
                <FaXmark className="btn" onClick={() => handleOperation('multiply')}/>
                <FaDivide className="btn" onClick={() => handleOperation('divide')}/>
            </div>

            {
                error &&
                <div>
                    <h3 style={{ color: 'red' }}>Error! </h3>
                    <h3>{error}</h3>
                </div>
            }
            {
                result !== null &&
                <div>
                    <h3 style={{ color: 'green' }}>Success!</h3>
                    <h3>Result: {result}</h3>
                </div>
            }
        </div>
    );
}

export default Interface;