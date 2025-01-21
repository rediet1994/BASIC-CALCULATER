function updateOperationSign(sign) {
    document.getElementById('operationSign').innerText = sign;
}

function evaluateOperation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.querySelector('input[name="operation"]:checked').value;
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
            break;
        case 'modulus':
            result = num1 % num2;
            break;
        case 'exponent':
            result = Math.pow(num1, num2);
            break;
        case 'squareRoot':
            result = Math.sqrt(num1);
            break;
            case 'log':
            result = Math.log(num1);
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').innerText = result;
}