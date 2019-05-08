const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits button');
digits.forEach( btn => btn.addEventListener('click', digitPressed) );
function digitPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}
const opers = document.querySelectorAll('.opers button');
opers.forEach( btn => btn.addEventListener('click', operPressed) );
function operPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}

document.querySelector('.equal').addEventListener('click', equalPressed);
function equalPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
}

function deleteAll(e) {
    e.preventDefault();
    display.value = null;
}

function equalPressed(e) {
    e.preventDefault();
    if (display.value === 'wrong') {
        return;
    }
    const parsedValue = parseFloat(eval(display.value));
    if (!display.value) {
        display.value = 0;
    }
    else if (!Number.isFinite(parsedValue) || Number.isNaN(parsedValue)) {
        display.value = 'wrong';
    }
    else {
        display.value = eval(display.value);
    }
}