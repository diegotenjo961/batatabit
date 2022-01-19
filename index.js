const $ = (selector) => document.querySelector(selector);

const tablesContainer = $('.main__table--container');
const arrowButton = $('#tables-arrow');
arrowButton.addEventListener('click', () => {
	const isRight = arrowButton.classList.toggle('rotate');
	let scrollTables;
	if(!isRight) scrollTables = 0;
	else scrollTables = tablesContainer.scrollWidth;
	console.log(scrollTables);
	tablesContainer.scrollTo({
		left: scrollTables,
		behavior: 'smooth'
	});
});

const plansContainer = $('.plans-container--slider');
const scrollPlans= plansContainer.scrollWidth / 4;
plansContainer.scrollTo(scrollPlans, 0);
