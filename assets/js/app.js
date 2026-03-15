console.log('hello world');

const DECKLIST_PREVIEW_CONTAINER = document.getElementById('decklist_preview');
const DECKLIST_PREVIEW_OUTPUT = DECKLIST_PREVIEW_CONTAINER.querySelector('output');
const IMPORT_DECKLIST = document.getElementById('import_decklist');

const GENERATE_PDF = document.getElementById('generate_pdf');

IMPORT_DECKLIST.addEventListener('click', () => {
	navigator.clipboard
		.readText()
		.then((clipText) => (DECKLIST_PREVIEW_OUTPUT.innerText = clipText))
		.then(DECKLIST_PREVIEW_CONTAINER.removeAttribute('hidden'))
		.then(GENERATE_PDF.removeAttribute('disabled'));
});

GENERATE_PDF.addEventListener('click', () => {
	html2pdf(DECKLIST_PREVIEW_OUTPUT);
});
