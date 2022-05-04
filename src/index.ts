export const getElement = (selector: string, parent: Element | Document = document) => {
	return parent.querySelector(selector);
};
export const getElementByClass = (className: string, parent: Element | Document = document) => {
	const collections = parent.getElementsByClassName(className);
	return collections.length > 0 ? collections[0] : null;
};
export const getElementByTag = <K extends keyof HTMLElementTagNameMap>(tag: K, parent: Element | Document = document) => {
	const collections = parent.getElementsByTagName(tag);
	return collections.length > 0 ? collections[0] : null;
};

export const downloadCanvas = (canvas: HTMLCanvasElement, filename: string, target?: HTMLAnchorElement) => {
	const aTag = target || document.createElement('a');
	aTag.download = filename + '.png';
	aTag.href = canvas.toDataURL('image/png');
	aTag.click();
}

const utils = {
	getElement,
	getElementByClass,
	getElementByTag,

	downloadCanvas,
};

export default utils;
