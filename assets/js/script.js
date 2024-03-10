console.log('Estoy Conectado al script');

// Event listeners

document
	.querySelector('#btn_to_change')
	.addEventListener('click', handleChangeStyleBtn);

document
	.querySelectorAll('input')
	.forEach((element) => element.addEventListener('input', handleGetCategories));

document.getElementById('calcular').addEventListener('click', verifyCategories);





// functions
let category_1 = 0,
	category_2 = 0,
	category_3 = 0;

function handleGetCategories(event) {
	const element = event.target;
	const id = element.id;
	const value = Number(element.value);

	if (id === 'category_1') {
		category_1 = value;
	} else if (id === 'category_2') {
		category_2 = value;
	} else {
		category_3 = value;
	}
}

function verifyCategories() {
	if (!category_1 && !category_2 && !category_3) {
		if (
			category_1 == -1 ||
			category_1 == 0 ||
			category_1 > 10 ||
			category_2 == -1 ||
			category_2 == 0 ||
			category_2 > 10 ||
			category_3 == -1 ||
			category_3 == 0 ||
			category_3 > 10
		) {
			alert('Agrega un número entre 1 y 10');
		}
	}

	if (
		category_1 == undefined &&
		category_2 == undefined &&
		category_3 == undefined
	) {
		alert('Agrega un número entre 1 y 10');
	} else if (
		category_1 == -1 ||
		category_1 > 10 ||
		category_2 == -1 ||
		category_2 > 10 ||
		category_3 == -1 ||
		category_3 > 10
	) {
		alert('Agrega un número entre 1 y 10');
	} else {
		const suma = category_1 + category_2 + category_3;
		console.log("Holaaaaa")
		if (suma > 10) {

			document.getElementById("show-message").innerHTML = "<strong>Llevas más de 10 prodcutos</strong>";
		} else {
			document.getElementById("show-message").innerHTML =  `<strong>Llevas ${suma} de prodcutos</strong>`;
		}
	}
}

function handleChangeStyleBtn() {
	const element = this;
	const classList = element.classList;

	const hasClassActive = classList.contains('btn_active');

	if (hasClassActive) {
		// Quitamos la clase
		classList.remove('btn_active');
	} else {
		// Ponemos la clase
		classList.add('btn_active');
	}
}



/* Código tercera parte */


document.getElementById('password-result').addEventListener('click', verifyPassword);

// Obtén los elementos select
let select1 = document.getElementById('password_digit_1');
let select2 = document.getElementById('password_digit_2');
let select3 = document.getElementById('password_digit_3');

// Agrega listeners a cada select
select1.addEventListener('change', handlePassword);
select2.addEventListener('change', handlePassword);
select3.addEventListener('change', handlePassword);

let password_value1 = 1,
    password_value2 = 1,
    password_value3 = 1;

function handlePassword(event) {
    const element = event.target;
    const id = element.id;
    const value = Number(element.value);

    if (id === 'password_digit_1') {
        password_value1 = value;
    } else if (id === 'password_digit_2') {
        password_value2 = value;
    } else if (id === 'password_digit_3') {
        password_value3 = value;
    }
}

function verifyPassword() {
	if (password_value1 == 9 && password_value2 == 1 && password_value3 == 1) {
		document.getElementById("result-password").innerHTML = "<strong>Password 1 correcto</strong>";
	} else if (password_value1 == 7 && password_value2 == 1 && password_value3 == 4) {
		document.getElementById("result-password").innerHTML = "<strong>Password 2 correcto</strong>";
	}
	else {
		document.getElementById("result-password").innerHTML = "<strong>Password incorrecto</strong>";
	}
}

