function dis(val) {
    if (val === 'x') {
        document.getElementById("input-string").innerText += '×';
    } else if (val === '÷') {
        document.getElementById("input-string").innerText += '÷';
    } else {
        document.getElementById("input-string").innerText += val;
    }
}


function clr() {
    document.getElementById("input-string").innerText = "";
    document.getElementById("output-string").innerText = "";
}


function solve() {
    let input = document.getElementById("input-string").innerText;
    input = input.replace(/×/g, '*').replace(/÷/g, '/');
    let result;
    try {
        result = eval(input);
        if (result === Infinity || result === -Infinity) {
            result = "Error";
        }
    } catch (error) {
        result = "Error";
    }
    document.getElementById("output-string").innerText = result;
}


document.addEventListener("keydown", function(event) {
    let key = event.key;
    let validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', 'x', '÷', '.', '=', '%', 'Enter', 'Backspace'];

    if (validKeys.includes(key)) {
        event.preventDefault();
        if (key === 'Enter') {
            solve();
        } else if (key === 'Backspace') {
            clr();
        } else if (key === 'x') {
            dis('*');
        } else if (key === '÷') {
            dis('/');
        } else {
            dis(key);
        }
    }
});
