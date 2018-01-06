export default function(left, right,num,oDiv,oUl) {
	num = num || 0;
	left.addEventListener('click', function() {
		num--;
		if(num <= 0) {
			num = 0;
		};
		oUl.style.left = -num * oDiv.offsetWidth + 'px';
	});
	right.addEventListener('click', function() {
		num++;
		if(num >= 1) {
			num = 1;
		};
		oUl.style.left = -num * oDiv.offsetWidth + 'px';
	});
}