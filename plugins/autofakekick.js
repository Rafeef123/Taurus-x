//

// Config.FAKE_BAN

// Config.COUNTRY_CODE       you can add two country codes for allowed  like 94/91   devied using '/'

const QueenSew = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const fs = require('fs');

const Config = require('../config')

const RavinduManoj = 'fake number not allowed'

var _0xdc76ed=_0x2f5c;(function(_0x2c9db2,_0x2e304c){var _0x3b22a4=_0x2f5c,_0xbc445=_0x2c9db2();while(!![]){try{var _0x35077c=parseInt(_0x3b22a4(0x1b0))/0x1*(parseInt(_0x3b22a4(0x1ab))/0x2)+parseInt(_0x3b22a4(0x1c3))/0x3+-parseInt(_0x3b22a4(0x1bf))/0x4*(-parseInt(_0x3b22a4(0x1b3))/0x5)+parseInt(_0x3b22a4(0x1d0))/0x6+-parseInt(_0x3b22a4(0x1d1))/0x7*(parseInt(_0x3b22a4(0x1b6))/0x8)+-parseInt(_0x3b22a4(0x1a9))/0x9+-parseInt(_0x3b22a4(0x1c4))/0xa;if(_0x35077c===_0x2e304c)break;else _0xbc445['push'](_0xbc445['shift']());}catch(_0x18f085){_0xbc445['push'](_0xbc445['shift']());}}}(_0x5bc0,0x36067));var _0x41c81b=function(){var _0x547192=!![];return function(_0x10a97f,_0x1e522c){var _0x5508bb=_0x547192?function(){var _0x569c99=_0x2f5c;if(_0x1e522c){var _0x1fae55=_0x1e522c[_0x569c99(0x1c7)](_0x10a97f,arguments);return _0x1e522c=null,_0x1fae55;}}:function(){};return _0x547192=![],_0x5508bb;};}(),_0x3ecb91=_0x41c81b(this,function(){var _0x3d840b=_0x2f5c;return _0x3ecb91[_0x3d840b(0x1b7)]()[_0x3d840b(0x1d3)](_0x3d840b(0x1b2))[_0x3d840b(0x1b7)]()['constructor'](_0x3ecb91)['search']('(((.+)+)+)+$');});function _0x2f5c(_0x4c9cc3,_0x2023c1){var _0x3be71a=_0x5bc0();return _0x2f5c=function(_0x5a3bc3,_0x1752ed){_0x5a3bc3=_0x5a3bc3-0x1a4;var _0x3932a5=_0x3be71a[_0x5a3bc3];return _0x3932a5;},_0x2f5c(_0x4c9cc3,_0x2023c1);}_0x3ecb91();function _0x5bc0(){var _0x1b3fe0=['132KelZuJ','test','message','text','1135410VQQXnS','2374860WqcbZz','trace','COUNTRY_CODE','apply','participant','isAdmin','tosophia','table','length','sendMessage','FAKE_BAN','console','1784448MmlWoo','1072239eDYjZL','warn','search','return\x20(function()\x20','split','constructor','groupMetadata','prototype','{}.constructor(\x22return\x20this\x22)(\x20)','1815435UFbXPZ','client','2676BCPqSE','bind','info','jid','user','85oqHdyC','data','(((.+)+)+)+$','3645ayQkyV','startsWith','groupRemove','8GgpQdS','toString','true','error','map','__proto__','includes','log','participants'];_0x5bc0=function(){return _0x1b3fe0;};return _0x5bc0();}var _0x1752ed=function(){var _0x18272c=!![];return function(_0x168673,_0x5872de){var _0x970e83=_0x18272c?function(){if(_0x5872de){var _0x5e497e=_0x5872de['apply'](_0x168673,arguments);return _0x5872de=null,_0x5e497e;}}:function(){};return _0x18272c=![],_0x970e83;};}(),_0x5a3bc3=_0x1752ed(this,function(){var _0x268e91=_0x2f5c,_0x4d59ae=function(){var _0x171a7b=_0x2f5c,_0x3c581a;try{_0x3c581a=Function(_0x171a7b(0x1d4)+_0x171a7b(0x1a8)+');')();}catch(_0x2c4665){_0x3c581a=window;}return _0x3c581a;},_0x11de13=_0x4d59ae(),_0x4b62c2=_0x11de13[_0x268e91(0x1cf)]=_0x11de13['console']||{},_0x2a36be=[_0x268e91(0x1bd),_0x268e91(0x1d2),_0x268e91(0x1ad),_0x268e91(0x1b9),'exception',_0x268e91(0x1cb),_0x268e91(0x1c5)];for(var _0x38192c=0x0;_0x38192c<_0x2a36be[_0x268e91(0x1cc)];_0x38192c++){var _0x37c00a=_0x1752ed[_0x268e91(0x1a5)][_0x268e91(0x1a7)][_0x268e91(0x1ac)](_0x1752ed),_0x5f0f83=_0x2a36be[_0x38192c],_0x27a5a8=_0x4b62c2[_0x5f0f83]||_0x37c00a;_0x37c00a[_0x268e91(0x1bb)]=_0x1752ed[_0x268e91(0x1ac)](_0x1752ed),_0x37c00a[_0x268e91(0x1b7)]=_0x27a5a8[_0x268e91(0x1b7)][_0x268e91(0x1ac)](_0x27a5a8),_0x4b62c2[_0x5f0f83]=_0x37c00a;}});_0x5a3bc3();async function checkImAdmin(_0x47d6ff,_0x2d9e86=_0x47d6ff[_0xdc76ed(0x1aa)][_0xdc76ed(0x1af)]['jid']){var _0x4aa7d6=_0xdc76ed,_0x308f6a=await _0x47d6ff[_0x4aa7d6(0x1aa)][_0x4aa7d6(0x1a6)](_0x47d6ff[_0x4aa7d6(0x1ae)]),_0x85aec0=_0x308f6a[_0x4aa7d6(0x1be)][_0x4aa7d6(0x1ba)](_0x457558=>{var _0x4b4d5f=_0x4aa7d6;if(_0x457558['jid']['split']('@')[0x0]==_0x2d9e86[_0x4b4d5f(0x1a4)]('@')[0x0]&&_0x457558[_0x4b4d5f(0x1c9)])return!![];else;return![];});return _0x85aec0['includes'](!![]);}QueenSew[_0xdc76ed(0x1ca)]({'on':_0xdc76ed(0x1c2),'fromMe':![],'onlyGroup':!![]},async(_0x3b7cec,_0x4f3c31)=>{var _0x439a10=_0xdc76ed;if(Config[_0x439a10(0x1ce)]=_0x439a10(0x1b8)){var _0x36f4a1,_0xbda31c;if(Config[_0x439a10(0x1c6)][_0x439a10(0x1bc)]('/')){var _0x358db3=Config[_0x439a10(0x1c6)]['split'](';');_0x36f4a1=_0x358db3[0x1],_0xbda31c=_0x358db3[0x0];}else _0x36f4a1=Config[_0x439a10(0x1c6)],_0xbda31c='94';if(_0x3b7cec[_0x439a10(0x1ae)][_0x439a10(0x1b4)]('91')||_0x3b7cec[_0x439a10(0x1ae)][_0x439a10(0x1b4)]('94')||_0x3b7cec['jid']['startsWith'](_0x36f4a1)||_0x3b7cec[_0x439a10(0x1ae)]['startsWith'](_0xbda31c))return;else{let _0x3084ac=new RegExp('a'),_0x4e1c6b=new RegExp('e'),_0x3e649a=new RegExp('i'),_0x15b315=new RegExp('o'),_0x5350d1=new RegExp('u');if(_0x3084ac[_0x439a10(0x1c0)](_0x3b7cec[_0x439a10(0x1c1)])){var _0x3326a6=await checkImAdmin(_0x3b7cec);if(!_0x3326a6)return;await _0x3b7cec['client'][_0x439a10(0x1cd)](_0x3b7cec[_0x439a10(0x1ae)],RavinduManoj,MessageType[_0x439a10(0x1c2)],{'quoted':_0x3b7cec['data']}),await _0x3b7cec[_0x439a10(0x1aa)][_0x439a10(0x1b5)](_0x3b7cec[_0x439a10(0x1ae)],[_0x3b7cec['data'][_0x439a10(0x1c8)]]);}else{if(_0x4e1c6b[_0x439a10(0x1c0)](_0x3b7cec['message'])){var _0x3326a6=await checkImAdmin(_0x3b7cec);if(!_0x3326a6)return;await _0x3b7cec[_0x439a10(0x1aa)][_0x439a10(0x1cd)](_0x3b7cec[_0x439a10(0x1ae)],RavinduManoj,MessageType[_0x439a10(0x1c2)],{'quoted':_0x3b7cec[_0x439a10(0x1b1)]}),await _0x3b7cec['client']['groupRemove'](_0x3b7cec[_0x439a10(0x1ae)],[_0x3b7cec[_0x439a10(0x1b1)][_0x439a10(0x1c8)]]);}else{if(_0x3e649a[_0x439a10(0x1c0)](_0x3b7cec[_0x439a10(0x1c1)])){var _0x3326a6=await checkImAdmin(_0x3b7cec);if(!_0x3326a6)return;await _0x3b7cec['client'][_0x439a10(0x1cd)](_0x3b7cec[_0x439a10(0x1ae)],RavinduManoj,MessageType[_0x439a10(0x1c2)],{'quoted':_0x3b7cec[_0x439a10(0x1b1)]}),await _0x3b7cec[_0x439a10(0x1aa)][_0x439a10(0x1b5)](_0x3b7cec[_0x439a10(0x1ae)],[_0x3b7cec[_0x439a10(0x1b1)][_0x439a10(0x1c8)]]);}else{if(_0x15b315[_0x439a10(0x1c0)](_0x3b7cec['message'])){var _0x3326a6=await checkImAdmin(_0x3b7cec);if(!_0x3326a6)return;await _0x3b7cec['client'][_0x439a10(0x1cd)](_0x3b7cec[_0x439a10(0x1ae)],RavinduManoj,MessageType[_0x439a10(0x1c2)],{'quoted':_0x3b7cec[_0x439a10(0x1b1)]}),await _0x3b7cec[_0x439a10(0x1aa)][_0x439a10(0x1b5)](_0x3b7cec['jid'],[_0x3b7cec[_0x439a10(0x1b1)][_0x439a10(0x1c8)]]);}else{if(_0x5350d1[_0x439a10(0x1c0)](_0x3b7cec[_0x439a10(0x1c1)])){var _0x3326a6=await checkImAdmin(_0x3b7cec);if(!_0x3326a6)return;await _0x3b7cec[_0x439a10(0x1aa)][_0x439a10(0x1cd)](_0x3b7cec[_0x439a10(0x1ae)],RavinduManoj,MessageType[_0x439a10(0x1c2)],{'quoted':_0x3b7cec[_0x439a10(0x1b1)]}),await _0x3b7cec[_0x439a10(0x1aa)]['groupRemove'](_0x3b7cec[_0x439a10(0x1ae)],[_0x3b7cec['data']['participant']]);}}}}}}}});