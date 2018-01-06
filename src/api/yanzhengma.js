export default function huoqu(obj){
	let arr = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'o', 'm', 'n', 'o', 'p', 'q', 'l', 's', 't', 'u', 'v', 'w', 's', 'y', 'z'];
	let index = arr.length;
	let str = arr[random(0,index)] + arr[random(0,index)] + arr[random(0,index)] + arr[random(0,index)];
	obj.innerHTML = str;
};

//随机函数
function random(n,m){
	return Math.floor(Math.random() * (m - n) +　n)
}
