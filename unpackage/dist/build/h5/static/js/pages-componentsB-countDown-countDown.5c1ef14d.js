(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsB-countDown-countDown"],{"0681":function(i,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3");var e={props:{name:{type:String,default:uni.$u.props.icon.name},color:{type:String,default:uni.$u.props.icon.color},size:{type:[String,Number],default:uni.$u.props.icon.size},bold:{type:Boolean,default:uni.$u.props.icon.bold},index:{type:[String,Number],default:uni.$u.props.icon.index},hoverClass:{type:String,default:uni.$u.props.icon.hoverClass},customPrefix:{type:String,default:uni.$u.props.icon.customPrefix},label:{type:[String,Number],default:uni.$u.props.icon.label},labelPos:{type:String,default:uni.$u.props.icon.labelPos},labelSize:{type:[String,Number],default:uni.$u.props.icon.labelSize},labelColor:{type:String,default:uni.$u.props.icon.labelColor},space:{type:[String,Number],default:uni.$u.props.icon.space},imgMode:{type:String,default:uni.$u.props.icon.imgMode},width:{type:[String,Number],default:uni.$u.props.icon.width},height:{type:[String,Number],default:uni.$u.props.icon.height},top:{type:[String,Number],default:uni.$u.props.icon.top},stop:{type:Boolean,default:uni.$u.props.icon.stop}}};t.default=e},"23dc5":function(i,t,n){"use strict";function e(i){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n="".concat(i);while(n.length<t)n="0".concat(n);return n}n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.isSameSecond=function(i,t){return Math.floor(i/1e3)===Math.floor(t/1e3)},t.parseFormat=function(i,t){var n=t.days,o=t.hours,c=t.minutes,u=t.seconds,a=t.milliseconds;-1===i.indexOf("DD")?o+=24*n:i=i.replace("DD",e(n));-1===i.indexOf("HH")?c+=60*o:i=i.replace("HH",e(o));-1===i.indexOf("mm")?u+=60*c:i=i.replace("mm",e(c));-1===i.indexOf("ss")?a+=1e3*u:i=i.replace("ss",e(u));return i.replace("SSS",e(a,3))},t.parseTimeData=function(i){var t=Math.floor(i/864e5),n=Math.floor(i%864e5/36e5),e=Math.floor(i%36e5/6e4),o=Math.floor(i%6e4/1e3),c=Math.floor(i%1e3);return{days:t,hours:n,minutes:e,seconds:o,milliseconds:c}},n("c975"),n("ac1f"),n("5319")},3130:function(i,t,n){"use strict";n.r(t);var e=n("5340"),o=n("d759");for(var c in o)["default"].indexOf(c)<0&&function(i){n.d(t,i,(function(){return o[i]}))}(c);n("3fad");var u=n("f0c5"),a=Object(u["a"])(o["default"],e["b"],e["c"],!1,null,"59765974",null,!1,e["a"],void 0);t["default"]=a.exports},3583:function(i,t,n){"use strict";n.r(t);var e=n("5203"),o=n("616f");for(var c in o)["default"].indexOf(c)<0&&function(i){n.d(t,i,(function(){return o[i]}))}(c);n("8dfa");var u=n("f0c5"),a=Object(u["a"])(o["default"],e["b"],e["c"],!1,null,"596af3fe",null,!1,e["a"],void 0);t["default"]=a.exports},"3c4f":function(i,t,n){var e=n("bfa7");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var o=n("4f06").default;o("063dcbcb",e,!0,{sourceMap:!1,shadowMode:!1})},"3c93":function(i,t,n){"use strict";n.r(t);var e=n("5468"),o=n.n(e);for(var c in e)["default"].indexOf(c)<0&&function(i){n.d(t,i,(function(){return e[i]}))}(c);t["default"]=o.a},"3fad":function(i,t,n){"use strict";var e=n("e77a"),o=n.n(e);o.a},5203:function(i,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return e}));var e={uCountDown:n("a269").default,uGrid:n("e156").default,uGridItem:n("4b24").default,uIcon:n("3130").default},o=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("v-uni-view",{staticClass:"u-page"},[n("v-uni-view",{staticClass:"u-demo-block"},[n("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("基础用法")]),n("v-uni-view",{staticClass:"u-demo-block__content"},[n("u-count-down",{attrs:{time:108e6,format:"HH:mm:ss",autoStart:!0,millisecond:!0},on:{finish:function(t){arguments[0]=t=i.$handleEvent(t),i.finish.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"u-demo-block"},[n("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("自定义格式")]),n("v-uni-view",{staticClass:"u-demo-block__content"},[n("u-count-down",{attrs:{time:108e6,format:"DD:HH:mm:ss",autoStart:!0,millisecond:!0},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.onChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"time"},[n("v-uni-text",{staticClass:"time__item"},[i._v(i._s(i.timeData.days)+" 天")]),n("v-uni-text",{staticClass:"time__item"},[i._v(i._s(i.timeData.hours>10?i.timeData.hours:"0"+i.timeData.hours)+" 时")]),n("v-uni-text",{staticClass:"time__item"},[i._v(i._s(i.timeData.minutes)+" 分")]),n("v-uni-text",{staticClass:"time__item"},[i._v(i._s(i.timeData.seconds)+" 秒")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"u-demo-block"},[n("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("毫秒级渲染")]),n("v-uni-view",{staticClass:"u-demo-block__content"},[n("u-count-down",{attrs:{time:108e6,format:"HH:mm:ss:SSS",autoStart:!0,millisecond:!0}})],1)],1),n("v-uni-view",{staticClass:"u-demo-block"},[n("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("自定义样式")]),n("v-uni-view",{staticClass:"u-demo-block__content"},[n("u-count-down",{attrs:{time:108e6,format:"HH:mm:ss",autoStart:!0,millisecond:!0},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.onChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"time"},[n("v-uni-view",{staticClass:"time__custom"},[n("v-uni-text",{staticClass:"time__custom__item"},[i._v(i._s(i.timeData.hours>10?i.timeData.hours:"0"+i.timeData.hours))])],1),n("v-uni-text",{staticClass:"time__doc"},[i._v(":")]),n("v-uni-view",{staticClass:"time__custom"},[n("v-uni-text",{staticClass:"time__custom__item"},[i._v(i._s(i.timeData.minutes))])],1),n("v-uni-text",{staticClass:"time__doc"},[i._v(":")]),n("v-uni-view",{staticClass:"time__custom"},[n("v-uni-text",{staticClass:"time__custom__item"},[i._v(i._s(i.timeData.seconds))])],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"u-demo-block"},[n("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("手动控制")]),n("v-uni-view",{staticClass:"u-demo-block__content"},[n("u-count-down",{ref:"countDown",attrs:{time:3e3,format:"ss:SSS",autoStart:!1,millisecond:!0}})],1),n("u-grid",{attrs:{border:!0,customStyle:{marginTop:"10px"}}},[n("u-grid-item",{on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.reset.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"count-down__grid-item"},[n("u-icon",{attrs:{name:"reload",size:22}}),n("v-uni-text",{staticClass:"count-down__grid-item__grid-text"},[i._v("重置")])],1)],1),n("u-grid-item",{on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.start.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"count-down__grid-item"},[n("v-uni-view",{staticClass:"count-down__grid-item__circle"},[n("u-icon",{attrs:{color:"#fff",name:"play-right-fill",size:22}})],1),n("v-uni-text",{staticClass:"count-down__grid-item__grid-text"},[i._v("开始")])],1)],1),n("u-grid-item",{on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.pause.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"count-down__grid-item"},[n("u-icon",{attrs:{name:"pause-circle",size:22}}),n("v-uni-text",{staticClass:"count-down__grid-item__grid-text"},[i._v("暂停")])],1)],1)],1)],1)],1)},c=[]},5340:function(i,t,n){"use strict";n.d(t,"b",(function(){return e})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var e=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("v-uni-view",{staticClass:"u-icon",class:["u-icon--"+i.labelPos],on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.clickHandler.apply(void 0,arguments)}}},[i.isImg?n("v-uni-image",{staticClass:"u-icon__img",style:[i.imgStyle,i.$u.addStyle(i.customStyle)],attrs:{src:i.name,mode:i.imgMode}}):n("v-uni-text",{staticClass:"u-icon__icon",class:i.uClasses,style:[i.iconStyle,i.$u.addStyle(i.customStyle)],attrs:{"hover-class":i.hoverClass}},[i._v(i._s(i.icon))]),""!==i.label?n("v-uni-text",{staticClass:"u-icon__label",style:{color:i.labelColor,fontSize:i.$u.addUnit(i.labelSize),marginLeft:"right"==i.labelPos?i.$u.addUnit(i.space):0,marginTop:"bottom"==i.labelPos?i.$u.addUnit(i.space):0,marginRight:"left"==i.labelPos?i.$u.addUnit(i.space):0,marginBottom:"top"==i.labelPos?i.$u.addUnit(i.space):0}},[i._v(i._s(i.label))]):i._e()],1)},o=[]},5468:function(i,t,n){"use strict";n("7a82");var e=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d401"),n("d3b7"),n("25f0");var o=e(n("f76b")),c=n("23dc5"),u={name:"u-count-down",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{timer:null,timeData:(0,c.parseTimeData)(0),formattedTime:"0",runing:!1,endTime:0,remainTime:0}},watch:{time:function(i){this.reset()}},mounted:function(){this.init()},methods:{init:function(){this.reset()},start:function(){this.runing||(this.runing=!0,this.endTime=Date.now()+this.remainTime,this.toTick())},toTick:function(){this.millisecond?this.microTick():this.macroTick()},macroTick:function(){var i=this;this.clearTimeout(),this.timer=setTimeout((function(){var t=i.getRemainTime();(0,c.isSameSecond)(t,i.remainTime)&&0!==t||i.setRemainTime(t),0!==i.remainTime&&i.macroTick()}),30)},microTick:function(){var i=this;this.clearTimeout(),this.timer=setTimeout((function(){i.setRemainTime(i.getRemainTime()),0!==i.remainTime&&i.microTick()}),50)},getRemainTime:function(){return Math.max(this.endTime-Date.now(),0)},setRemainTime:function(i){this.remainTime=i;var t=(0,c.parseTimeData)(i);this.$emit("change",t),this.formattedTime=(0,c.parseFormat)(this.format,t),i<=0&&(this.pause(),this.$emit("finish"))},reset:function(){this.pause(),this.remainTime=this.time,this.setRemainTime(this.remainTime),this.autoStart&&this.start()},pause:function(){this.runing=!1,this.clearTimeout()},clearTimeout:function(i){function t(){return i.apply(this,arguments)}return t.toString=function(){return i.toString()},t}((function(){clearTimeout(this.timer),this.timer=null}))},beforeDestroy:function(){this.clearTimeout()}};t.default=u},5920:function(i,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={"uicon-level":"","uicon-column-line":"","uicon-checkbox-mark":"","uicon-folder":"","uicon-movie":"","uicon-star-fill":"","uicon-star":"","uicon-phone-fill":"","uicon-phone":"","uicon-apple-fill":"","uicon-chrome-circle-fill":"","uicon-backspace":"","uicon-attach":"","uicon-cut":"","uicon-empty-car":"","uicon-empty-coupon":"","uicon-empty-address":"","uicon-empty-favor":"","uicon-empty-permission":"","uicon-empty-news":"","uicon-empty-search":"","uicon-github-circle-fill":"","uicon-rmb":"","uicon-person-delete-fill":"","uicon-reload":"","uicon-order":"","uicon-server-man":"","uicon-search":"","uicon-fingerprint":"","uicon-more-dot-fill":"","uicon-scan":"","uicon-share-square":"","uicon-map":"","uicon-map-fill":"","uicon-tags":"","uicon-tags-fill":"","uicon-bookmark-fill":"","uicon-bookmark":"","uicon-eye":"","uicon-eye-fill":"","uicon-mic":"","uicon-mic-off":"","uicon-calendar":"","uicon-calendar-fill":"","uicon-trash":"","uicon-trash-fill":"","uicon-play-left":"","uicon-play-right":"","uicon-minus":"","uicon-plus":"","uicon-info":"","uicon-info-circle":"","uicon-info-circle-fill":"","uicon-question":"","uicon-error":"","uicon-close":"","uicon-checkmark":"","uicon-android-circle-fill":"","uicon-android-fill":"","uicon-ie":"","uicon-IE-circle-fill":"","uicon-google":"","uicon-google-circle-fill":"","uicon-setting-fill":"","uicon-setting":"","uicon-minus-square-fill":"","uicon-plus-square-fill":"","uicon-heart":"","uicon-heart-fill":"","uicon-camera":"","uicon-camera-fill":"","uicon-more-circle":"","uicon-more-circle-fill":"","uicon-chat":"","uicon-chat-fill":"","uicon-bag-fill":"","uicon-bag":"","uicon-error-circle-fill":"","uicon-error-circle":"","uicon-close-circle":"","uicon-close-circle-fill":"","uicon-checkmark-circle":"","uicon-checkmark-circle-fill":"","uicon-question-circle-fill":"","uicon-question-circle":"","uicon-share":"","uicon-share-fill":"","uicon-shopping-cart":"","uicon-shopping-cart-fill":"","uicon-bell":"","uicon-bell-fill":"","uicon-list":"","uicon-list-dot":"","uicon-zhihu":"","uicon-zhihu-circle-fill":"","uicon-zhifubao":"","uicon-zhifubao-circle-fill":"","uicon-weixin-circle-fill":"","uicon-weixin-fill":"","uicon-twitter-circle-fill":"","uicon-twitter":"","uicon-taobao-circle-fill":"","uicon-taobao":"","uicon-weibo-circle-fill":"","uicon-weibo":"","uicon-qq-fill":"","uicon-qq-circle-fill":"","uicon-moments-circel-fill":"","uicon-moments":"","uicon-qzone":"","uicon-qzone-circle-fill":"","uicon-baidu-circle-fill":"","uicon-baidu":"","uicon-facebook-circle-fill":"","uicon-facebook":"","uicon-car":"","uicon-car-fill":"","uicon-warning-fill":"","uicon-warning":"","uicon-clock-fill":"","uicon-clock":"","uicon-edit-pen":"","uicon-edit-pen-fill":"","uicon-email":"","uicon-email-fill":"","uicon-minus-circle":"","uicon-minus-circle-fill":"","uicon-plus-circle":"","uicon-plus-circle-fill":"","uicon-file-text":"","uicon-file-text-fill":"","uicon-pushpin":"","uicon-pushpin-fill":"","uicon-grid":"","uicon-grid-fill":"","uicon-play-circle":"","uicon-play-circle-fill":"","uicon-pause-circle-fill":"","uicon-pause":"","uicon-pause-circle":"","uicon-eye-off":"","uicon-eye-off-outline":"","uicon-gift-fill":"","uicon-gift":"","uicon-rmb-circle-fill":"","uicon-rmb-circle":"","uicon-kefu-ermai":"","uicon-server-fill":"","uicon-coupon-fill":"","uicon-coupon":"","uicon-integral":"","uicon-integral-fill":"","uicon-home-fill":"","uicon-home":"","uicon-hourglass-half-fill":"","uicon-hourglass":"","uicon-account":"","uicon-plus-people-fill":"","uicon-minus-people-fill":"","uicon-account-fill":"","uicon-thumb-down-fill":"","uicon-thumb-down":"","uicon-thumb-up":"","uicon-thumb-up-fill":"","uicon-lock-fill":"","uicon-lock-open":"","uicon-lock-opened-fill":"","uicon-lock":"","uicon-red-packet-fill":"","uicon-photo-fill":"","uicon-photo":"","uicon-volume-off-fill":"","uicon-volume-off":"","uicon-volume-fill":"","uicon-volume":"","uicon-red-packet":"","uicon-download":"","uicon-arrow-up-fill":"","uicon-arrow-down-fill":"","uicon-play-left-fill":"","uicon-play-right-fill":"","uicon-rewind-left-fill":"","uicon-rewind-right-fill":"","uicon-arrow-downward":"","uicon-arrow-leftward":"","uicon-arrow-rightward":"","uicon-arrow-upward":"","uicon-arrow-down":"","uicon-arrow-right":"","uicon-arrow-left":"","uicon-arrow-up":"","uicon-skip-back-left":"","uicon-skip-forward-right":"","uicon-rewind-right":"","uicon-rewind-left":"","uicon-arrow-right-double":"","uicon-arrow-left-double":"","uicon-wifi-off":"","uicon-wifi":"","uicon-empty-data":"","uicon-empty-history":"","uicon-empty-list":"","uicon-empty-page":"","uicon-empty-order":"","uicon-man":"","uicon-woman":"","uicon-man-add":"","uicon-man-add-fill":"","uicon-man-delete":"","uicon-man-delete-fill":"","uicon-zh":"","uicon-en":""}},6068:function(i,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{timeData:{}}},onLoad:function(){},methods:{start:function(){this.$refs.countDown.start()},pause:function(){this.$refs.countDown.pause()},reset:function(){this.$refs.countDown.reset()},onChange:function(i){this.timeData=i},finish:function(){console.log("finish")}}};t.default=e},"616f":function(i,t,n){"use strict";n.r(t);var e=n("6068"),o=n.n(e);for(var c in e)["default"].indexOf(c)<0&&function(i){n.d(t,i,(function(){return e[i]}))}(c);t["default"]=o.a},"63d1":function(i,t,n){var e=n("bf24");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var o=n("4f06").default;o("973c6f12",e,!0,{sourceMap:!1,shadowMode:!1})},"8dfa":function(i,t,n){"use strict";var e=n("63d1"),o=n.n(e);o.a},a269:function(i,t,n){"use strict";n.r(t);var e=n("b115"),o=n("3c93");for(var c in o)["default"].indexOf(c)<0&&function(i){n.d(t,i,(function(){return o[i]}))}(c);n("ffd0");var u=n("f0c5"),a=Object(u["a"])(o["default"],e["b"],e["c"],!1,null,"9803901c",null,!1,e["a"],void 0);t["default"]=a.exports},b115:function(i,t,n){"use strict";n.d(t,"b",(function(){return e})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var e=function(){var i=this.$createElement,t=this._self._c||i;return t("v-uni-view",{staticClass:"u-count-down"},[this._t("default",[t("v-uni-text",{staticClass:"u-count-down__text"},[this._v(this._s(this.formattedTime))])])],2)},o=[]},bd3b:function(i,t,n){var e=n("24fb");t=e(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-view[data-v-59765974], uni-scroll-view[data-v-59765974], uni-swiper-item[data-v-59765974]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}@font-face{font-family:uicon-iconfont;src:url(https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf) format("truetype")}.u-icon[data-v-59765974]{display:flex;align-items:center}.u-icon--left[data-v-59765974]{flex-direction:row-reverse;align-items:center}.u-icon--right[data-v-59765974]{flex-direction:row;align-items:center}.u-icon--top[data-v-59765974]{flex-direction:column-reverse;justify-content:center}.u-icon--bottom[data-v-59765974]{flex-direction:column;justify-content:center}.u-icon__icon[data-v-59765974]{font-family:uicon-iconfont;position:relative;display:flex;flex-direction:row;align-items:center}.u-icon__icon--primary[data-v-59765974]{color:#3c9cff}.u-icon__icon--success[data-v-59765974]{color:#5ac725}.u-icon__icon--error[data-v-59765974]{color:#f56c6c}.u-icon__icon--warning[data-v-59765974]{color:#f9ae3d}.u-icon__icon--info[data-v-59765974]{color:#909399}.u-icon__img[data-v-59765974]{height:auto;will-change:transform}.u-icon__label[data-v-59765974]{line-height:1}',""]),i.exports=t},bf24:function(i,t,n){var e=n("24fb");t=e(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.time[data-v-596af3fe]{display:flex;flex-direction:row;align-items:center}.time__custom[data-v-596af3fe]{margin-top:4px;width:22px;height:22px;background-color:#3c9cff;border-radius:4px;display:flex;justify-content:center;align-items:center}.time__custom__item[data-v-596af3fe]{color:#fff;font-size:12px;text-align:center}.time__doc[data-v-596af3fe]{color:#3c9cff;padding:0 4px}.time__item[data-v-596af3fe]{color:#606266;font-size:15px;margin-right:4px}.u-view[data-v-596af3fe]{padding:40px 20px 0 20px}.u-view__title[data-v-596af3fe]{font-size:14px;color:#8f9ca2;margin-bottom:10px}.count-down__grid-item[data-v-596af3fe]{width:70px;height:70px;display:flex;flex-direction:row;justify-content:center;align-items:center}.count-down__grid-item__circle[data-v-596af3fe]{width:32px;height:32px;border-radius:32px;background-color:#3c9cff;display:flex;justify-content:center;align-items:center;box-shadow:1px 1px 4px rgba(155,191,255,.7)}.count-down__grid-item__grid-text[data-v-596af3fe]{font-size:14px;color:#909399;box-sizing:border-box;margin-left:6px}',""]),i.exports=t},bfa7:function(i,t,n){var e=n("24fb");t=e(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-view[data-v-9803901c], uni-scroll-view[data-v-9803901c], uni-swiper-item[data-v-9803901c]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-count-down__text[data-v-9803901c]{color:#606266;font-size:15px;line-height:22px}',""]),i.exports=t},d759:function(i,t,n){"use strict";n.r(t);var e=n("f7f9"),o=n.n(e);for(var c in e)["default"].indexOf(c)<0&&function(i){n.d(t,i,(function(){return e[i]}))}(c);t["default"]=o.a},e77a:function(i,t,n){var e=n("bd3b");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var o=n("4f06").default;o("744203ab",e,!0,{sourceMap:!1,shadowMode:!1})},f76b:function(i,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3");var e={props:{time:{type:[String,Number],default:uni.$u.props.countDown.time},format:{type:String,default:uni.$u.props.countDown.format},autoStart:{type:Boolean,default:uni.$u.props.countDown.autoStart},millisecond:{type:Boolean,default:uni.$u.props.countDown.millisecond}}};t.default=e},f7f9:function(i,t,n){"use strict";n("7a82");var e=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("14d9"),n("caad"),n("2532"),n("c975");var o=e(n("5920")),c=e(n("0681")),u={name:"u-icon",data:function(){return{}},mixins:[uni.$u.mpMixin,uni.$u.mixin,c.default],computed:{uClasses:function(){var i=[];return i.push(this.customPrefix+"-"+this.name),this.color&&uni.$u.config.type.includes(this.color)&&i.push("u-icon__icon--"+this.color),i},iconStyle:function(){var i={};return i={fontSize:uni.$u.addUnit(this.size),lineHeight:uni.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:uni.$u.addUnit(this.top)},this.color&&!uni.$u.config.type.includes(this.color)&&(i.color=this.color),i},isImg:function(){return-1!==this.name.indexOf("/")},imgStyle:function(){var i={};return i.width=this.width?uni.$u.addUnit(this.width):uni.$u.addUnit(this.size),i.height=this.height?uni.$u.addUnit(this.height):uni.$u.addUnit(this.size),i},icon:function(){return o.default["uicon-"+this.name]||this.name}},methods:{clickHandler:function(i){this.$emit("click",this.index),this.stop&&this.preventEvent(i)}}};t.default=u},ffd0:function(i,t,n){"use strict";var e=n("3c4f"),o=n.n(e);o.a}}]);