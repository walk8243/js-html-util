const getElement = (selector: string, parent: HTMLElement | Document = document) => {
	return parent.querySelector(selector);
};

export {
	getElement,
};
