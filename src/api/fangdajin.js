import off from './offsetTop'

export default function fangdajin(smallbox,mask,bigImg,_bigImg,smallImg) {
	smallbox.addEventListener('mouseenter', function(e) {
		mask.style.display = 'block';
		bigImg.style.display = 'block';
		_bigImg.style.display = 'block';
		document.addEventListener('mousemove', move);

	});
	smallbox.addEventListener('mouseleave', function() {
		mask.style.display = 'none';
		bigImg.style.display = 'none';
		_bigImg.style.display = 'none';
		document.removeEventListener('mousemove', move)
	});

	function move(e) {
		let left = e.pageX - off(smallImg).left - mask.offsetWidth / 2;
		let top = e.pageY - off(smallImg).top - mask.offsetHeight / 2;
		if(left <= 0) {
			left = 0;
		};
		if(left >= smallImg.offsetWidth - mask.offsetWidth) {
			left = smallImg.offsetWidth - mask.offsetWidth;
		};
		if(top <= 0) {
			top = 0;
		};
		if(top >= smallImg.offsetHeight - mask.offsetHeight) {
			top = smallImg.offsetHeight - mask.offsetHeight
		};
		//遮罩移动完成
		mask.style.left = left + 'px';
		mask.style.top = top + 'px';
		// 遮罩当前的top / 遮罩最大的top  =  大图当前的top / 大图最大的top
		var w = (left / (smallImg.offsetWidth - mask.offsetWidth)) * (_bigImg.offsetWidth - bigImg.offsetWidth);
		var h = (top / (smallImg.offsetHeight - mask.offsetHeight)) * (_bigImg.offsetHeight - bigImg.offsetHeight);
		_bigImg.style.left = -w + 'px';
		_bigImg.style.top = -h + 'px'

	}
}