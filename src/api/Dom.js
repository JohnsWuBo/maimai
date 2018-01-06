export default function $huo(el) {
	var el = document.querySelectorAll(el);
	return el.length > 1 ? el : el[0];
};