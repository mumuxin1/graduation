import { 
  ALERT_SWITCH,
  TABLE_SWITCH,
  TRANSITION_NAME,
  STATE_SWITCH,
  CANCEL_CHECK,
  ASSIGNMENT,
} from './mutation-types'

export default {
  
  //提示框切换
  [ALERT_SWITCH] (state, type){
    state.isAlertShow = !state.isAlertShow;
    state.AlertShowType = type;
  },

  //弹框操作表
	[TABLE_SWITCH] (state, obj){
    //name: 自定义actionSheet  框架sheet_visible
		state[obj.name] = !state[obj.name];
		state.actionSheetType = obj.type;
  },
  
  //过渡动画设置
  [TRANSITION_NAME] (state, obj){
    state.transitionName = obj.toDepth < obj.fromDepth ? 'slide-right' : 'slide-left';
    // console.log(state.transitionName);
  },

  //状态切换
  [STATE_SWITCH] (state, string){
    state[string] = !state[string];
  },

  //隐藏编辑时，取消勾选
  [CANCEL_CHECK] (state) {
    state.listData.forEach((value) => {
      // console.log(value);
      value.check = false;
    });
  },

  //赋值(obj包含stateValue值，newValue值)
  [ASSIGNMENT] (state, obj) {
    state[obj.stateValue] = obj.newValue;
    // console.log(obj);
  },


}