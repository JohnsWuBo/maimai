export default function $offsetTop (obj){
	var left = 0,
		top = 0;
	while (obj){
		left +=  obj.offsetLeft;
		top += obj.offsetTop;
		obj = obj.offsetParent;
	};
	return {
		left,top
	}
}
