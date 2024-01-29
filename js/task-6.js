const inputNum = document.querySelector('#controls>input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const boxes = document.querySelector('#boxes')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttomCreate.addEventListener("clik", () => {
	if (Number(inputNumber.value) >= 1 && Number(inputNumber.value) <=100) {
		createBoxes(Number(inputNumber.value));}
	else {alert"Enter 1 and 100"}
}
)

const createBoxes = amount => {
	const elementsToAdd = []
	for (let i = 0; i < amount; i++) {
		const div = document.createElement('div')
		div.style.height = `${30 + 10 * i}px`
		div.style.width = `${30 + 10 * i}px`
		div.style.background = getRandomHexColor()
		elementsToAdd.push(div)
	}
	return elementsToAdd
}

const destroyBoxes = () => {
	boxes.innerHTML = ''
}

btnCreate.addEventListener('click', () => {
	let boxesToAdd = createBoxes(Number(inputNum.value))
	boxes.append(...boxesToAdd)
})

// console.log(inputNum.value)

btnDestroy.addEventListener('click', destroyBoxes);


btnCreate.addEventListener('click', () => {
	const amount = Number(inputNum.value);
	if (amount >= 1 && amount <= 100) {
	  destroyBoxes(); // Очистити існуючі блоки перед створенням нових
	  let boxesToAdd = createBoxes(amount); 
	  boxes.append(...boxesToAdd);
	  inputNum.value = ''; // Очистити значення поля вводу після створення блоків
	}
  });