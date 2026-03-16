console.log('hello world');

// ==========
// set some consts and lets
// ==========
const DECKLIST_INPUT = document.querySelector('textarea');
const GENERATE_PDF = document.getElementById('generate_pdf');

let decklist = [];

// ==========
// define some functions
// ==========
function updateTextareaHeight() {
	DECKLIST_INPUT.style.blockSize = 'auto';
	DECKLIST_INPUT.style.blockSize = `${this.scrollHeight +2}px`;
}

function toggleGeneratePdfButton() {
	if (DECKLIST_INPUT.value !== '') {
		GENERATE_PDF.disabled = false;
	} else {
		GENERATE_PDF.disabled = true;
	}
}

// ==========
// listen for them events
// ==========
DECKLIST_INPUT.addEventListener('input', updateTextareaHeight);
DECKLIST_INPUT.addEventListener('input', toggleGeneratePdfButton);

// ==========
// but also do stuff right now omg
// ==========
updateTextareaHeight();
