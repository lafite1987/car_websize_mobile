/*! jksq 2016-05-30  isales@柳 */
!function(a,b,c){"undefined"!=typeof module&&module.exports?module.exports=c():"function"==typeof define&&define.amd?define(c):b[a]=c()}("Fingerprint",this,function(){"use strict";var a=function(a){var b,c;b=Array.prototype.forEach,c=Array.prototype.map,this.each=function(a,c,d){if(null!==a)if(b&&a.forEach===b)a.forEach(c,d);else if(a.length===+a.length){for(var e=0,f=a.length;f>e;e++)if(c.call(d,a[e],e,a)==={})return}else for(var g in a)if(a.hasOwnProperty(g)&&c.call(d,a[g],g,a)==={})return},this.map=function(a,b,d){var e=[];return null==a?e:c&&a.map===c?a.map(b,d):(this.each(a,function(a,c,f){e[e.length]=b.call(d,a,c,f)}),e)},"object"==typeof a?(this.hasher=a.hasher,this.screen_resolution=a.screen_resolution,this.screen_orientation=a.screen_orientation,this.canvas=a.canvas,this.ie_activex=a.ie_activex):"function"==typeof a&&(this.hasher=a)};return a.prototype={get:function(){var a=[];if(a.push(navigator.userAgent),a.push(navigator.language),a.push(screen.colorDepth),this.screen_resolution){var b=this.getScreenResolution();"undefined"!=typeof b&&a.push(b.join("x"))}return a.push((new Date).getTimezoneOffset()),a.push(this.hasSessionStorage()),a.push(this.hasLocalStorage()),a.push(!!window.indexedDB),document.body?a.push(typeof document.body.addBehavior):a.push("undefined"),a.push(typeof window.openDatabase),a.push(navigator.cpuClass),a.push(navigator.platform),a.push(navigator.doNotTrack),a.push(this.getPluginsString()),this.canvas&&this.isCanvasSupported()&&a.push(this.getCanvasFingerprint()),this.hasher?this.hasher(a.join("###"),31):this.murmurhash3_32_gc(a.join("###"),31)},murmurhash3_32_gc:function(a,b){var c,d,e,f,g,h,i,j;for(c=3&a.length,d=a.length-c,e=b,g=3432918353,h=461845907,j=0;d>j;)i=255&a.charCodeAt(j)|(255&a.charCodeAt(++j))<<8|(255&a.charCodeAt(++j))<<16|(255&a.charCodeAt(++j))<<24,++j,i=(65535&i)*g+(((i>>>16)*g&65535)<<16)&4294967295,i=i<<15|i>>>17,i=(65535&i)*h+(((i>>>16)*h&65535)<<16)&4294967295,e^=i,e=e<<13|e>>>19,f=5*(65535&e)+((5*(e>>>16)&65535)<<16)&4294967295,e=(65535&f)+27492+(((f>>>16)+58964&65535)<<16);switch(i=0,c){case 3:i^=(255&a.charCodeAt(j+2))<<16;case 2:i^=(255&a.charCodeAt(j+1))<<8;case 1:i^=255&a.charCodeAt(j),i=(65535&i)*g+(((i>>>16)*g&65535)<<16)&4294967295,i=i<<15|i>>>17,i=(65535&i)*h+(((i>>>16)*h&65535)<<16)&4294967295,e^=i}return e^=a.length,e^=e>>>16,e=2246822507*(65535&e)+((2246822507*(e>>>16)&65535)<<16)&4294967295,e^=e>>>13,e=3266489909*(65535&e)+((3266489909*(e>>>16)&65535)<<16)&4294967295,e^=e>>>16,e>>>0},hasLocalStorage:function(){try{return!!window.localStorage}catch(a){return!0}},hasSessionStorage:function(){try{return!!window.sessionStorage}catch(a){return!0}},isCanvasSupported:function(){var a=document.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},isIE:function(){return"Microsoft Internet Explorer"===navigator.appName?!0:"Netscape"===navigator.appName&&/Trident/.test(navigator.userAgent)?!0:!1},getPluginsString:function(){return this.isIE()&&this.ie_activex?this.getIEPluginsString():this.getRegularPluginsString()},getRegularPluginsString:function(){return this.map(navigator.plugins,function(a){var b=this.map(a,function(a){return[a.type,a.suffixes].join("~")}).join(",");return[a.name,a.description,b].join("::")},this).join(";")},getIEPluginsString:function(){if(window.ActiveXObject){var a=["ShockwaveFlash.ShockwaveFlash","AcroPDF.PDF","PDF.PdfCtrl","QuickTime.QuickTime","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","RealPlayer","SWCtl.SWCtl","WMPlayer.OCX","AgControl.AgControl","Skype.Detection"];return this.map(a,function(a){try{return new ActiveXObject(a),a}catch(b){return null}}).join(";")}return""},getScreenResolution:function(){var a;return a=this.screen_orientation?screen.height>screen.width?[screen.height,screen.width]:[screen.width,screen.height]:[screen.height,screen.width]},getCanvasFingerprint:function(){var a=document.createElement("canvas"),b=a.getContext("2d"),c="http://valve.github.io";return b.textBaseline="top",b.font="14px 'Arial'",b.textBaseline="alphabetic",b.fillStyle="#f60",b.fillRect(125,1,62,20),b.fillStyle="#069",b.fillText(c,2,15),b.fillStyle="rgba(102, 204, 0, 0.7)",b.fillText(c,4,17),a.toDataURL()}},a});