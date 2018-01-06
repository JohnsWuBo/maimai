import pailouCom from './pailou'

const pailou = {
	install : function(Vue){
		Vue.component('pa',pailouCom)
	}
}

export default pailou
