const imgur = require("imgur");
const fs = require("fs");
const { downloadFile } = require("../../utils/index");
const axios = require('axios');
const path = require('path');
const moment = require('moment-timezone');

module.exports.config = {
  name: "ve",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "Đặng Hoàng Ân",//cũng phải procode hay gì :v
  description: "Veanime",
  commandCategory: "Tiện ích",
  usages: "reply",
  cooldowns: 0
};
function _0x53e1(_0x34d060,_0x1b2de9){const _0x5745c5=_0x36fc();return _0x53e1=function(_0x2898ee,_0x512f7a){_0x2898ee=_0x2898ee-(0x2*-0xdcd+0x19eb+-0x2*-0x151);let _0x174178=_0x5745c5[_0x2898ee];if(_0x53e1['MiSmUP']===undefined){var _0x14cf7f=function(_0x45cac0){const _0x523673='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2d2688='',_0x55de51='',_0x46c380=_0x2d2688+_0x14cf7f;for(let _0x3a7067=-0x21d9*-0x1+-0x36*-0x7+-0x2353,_0x595e74,_0x696512,_0x3050ed=-0x11e4+-0x2a*-0xe3+-0x135a;_0x696512=_0x45cac0['charAt'](_0x3050ed++);~_0x696512&&(_0x595e74=_0x3a7067%(-0x49+0x2066+-0x2019)?_0x595e74*(-0x1eeb+-0x949*-0x3+-0x1a8*-0x2)+_0x696512:_0x696512,_0x3a7067++%(-0x8*-0x454+0xee1+-0x317d))?_0x2d2688+=_0x46c380['charCodeAt'](_0x3050ed+(-0x197d*-0x1+-0xb19+-0x16*0xa7))-(0x7df+0x77f+-0xf54)!==-0x4ca+0x6f+0x45b?String['fromCharCode'](-0x7*-0x3d8+-0x18b7+-0x132&_0x595e74>>(-(-0x6*0x3d6+-0x8ed+0x1ff3)*_0x3a7067&0x106f+-0x25d+0x2*-0x706)):_0x3a7067:0x16ba*-0x1+0x13*0x191+-0x1*0x709){_0x696512=_0x523673['indexOf'](_0x696512);}for(let _0x3991cf=0xc15+0x225e+-0x2e73,_0x638382=_0x2d2688['length'];_0x3991cf<_0x638382;_0x3991cf++){_0x55de51+='%'+('00'+_0x2d2688['charCodeAt'](_0x3991cf)['toString'](0x98f+-0x4f*-0x21+-0x13ae))['slice'](-(-0x1*-0x1a68+-0xd5*-0x2e+-0x40ac));}return decodeURIComponent(_0x55de51);};const _0xca7288=function(_0x33fe5c,_0x884973){let _0x3b1915=[],_0x435cb7=-0x96*0x41+0x1d4*0x2+0x226e,_0x5db9bf,_0x4089e5='';_0x33fe5c=_0x14cf7f(_0x33fe5c);let _0x2018c9;for(_0x2018c9=-0x3d1*-0x9+-0x1c1*0x7+-0x19*0xe2;_0x2018c9<0x1769+0x65*0x11+0xe8f*-0x2;_0x2018c9++){_0x3b1915[_0x2018c9]=_0x2018c9;}for(_0x2018c9=-0x1f17+-0x936+0xb5*0x39;_0x2018c9<0x9d5+0x1aed+-0x23c2;_0x2018c9++){_0x435cb7=(_0x435cb7+_0x3b1915[_0x2018c9]+_0x884973['charCodeAt'](_0x2018c9%_0x884973['length']))%(-0x1*0xdd5+-0x4*-0x2b6+0x3fd),_0x5db9bf=_0x3b1915[_0x2018c9],_0x3b1915[_0x2018c9]=_0x3b1915[_0x435cb7],_0x3b1915[_0x435cb7]=_0x5db9bf;}_0x2018c9=-0x1c9f+-0xb95*0x3+0x3f5e,_0x435cb7=0x1795+-0x6cc+-0x10c9;for(let _0x5e37bc=-0x1767+0x15b0+-0x1*-0x1b7;_0x5e37bc<_0x33fe5c['length'];_0x5e37bc++){_0x2018c9=(_0x2018c9+(-0x121*0x15+-0x539*-0x5+-0xcd*0x3))%(-0x1152+0x145c+-0x57*0x6),_0x435cb7=(_0x435cb7+_0x3b1915[_0x2018c9])%(0x1a5f+-0x1113+-0x24*0x3b),_0x5db9bf=_0x3b1915[_0x2018c9],_0x3b1915[_0x2018c9]=_0x3b1915[_0x435cb7],_0x3b1915[_0x435cb7]=_0x5db9bf,_0x4089e5+=String['fromCharCode'](_0x33fe5c['charCodeAt'](_0x5e37bc)^_0x3b1915[(_0x3b1915[_0x2018c9]+_0x3b1915[_0x435cb7])%(0x145a+0x19*0x146+-0x3330)]);}return _0x4089e5;};_0x53e1['batjLn']=_0xca7288,_0x34d060=arguments,_0x53e1['MiSmUP']=!![];}const _0x5afee1=_0x5745c5[0x27*0xdf+-0x1*0xb82+-0x1677*0x1],_0x14a9f9=_0x2898ee+_0x5afee1,_0x6df5f0=_0x34d060[_0x14a9f9];if(!_0x6df5f0){if(_0x53e1['dmfFBw']===undefined){const _0x39bd8d=function(_0x4c5da0){this['FuIBfx']=_0x4c5da0,this['gBkLEq']=[0x1775+0x9f*-0x3e+0xf0e,-0xb*0x19b+-0x21c7*0x1+0x19b8*0x2,0x18b*0x17+0x16*0x155+-0x40cb],this['kXrOBT']=function(){return'newState';},this['tLXYQW']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['CkdkRT']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x39bd8d['prototype']['JATMDE']=function(){const _0x56643f=new RegExp(this['tLXYQW']+this['CkdkRT']),_0x590ae2=_0x56643f['test'](this['kXrOBT']['toString']())?--this['gBkLEq'][-0x76*-0x35+-0x1*0x263+0x1a*-0xd9]:--this['gBkLEq'][-0xa9*-0x1f+0x1*0x2047+-0x34be*0x1];return this['VslVce'](_0x590ae2);},_0x39bd8d['prototype']['VslVce']=function(_0x4ede8e){if(!Boolean(~_0x4ede8e))return _0x4ede8e;return this['vPXJOq'](this['FuIBfx']);},_0x39bd8d['prototype']['vPXJOq']=function(_0x986a28){for(let _0x1eeb63=-0x10a9+-0x35c+-0x401*-0x5,_0x354dbe=this['gBkLEq']['length'];_0x1eeb63<_0x354dbe;_0x1eeb63++){this['gBkLEq']['push'](Math['round'](Math['random']())),_0x354dbe=this['gBkLEq']['length'];}return _0x986a28(this['gBkLEq'][-0x2159*-0x1+0x1b9d+-0x3cf6]);},new _0x39bd8d(_0x53e1)['JATMDE'](),_0x53e1['dmfFBw']=!![];}_0x174178=_0x53e1['batjLn'](_0x174178,_0x512f7a),_0x34d060[_0x14a9f9]=_0x174178;}else _0x174178=_0x6df5f0;return _0x174178;},_0x53e1(_0x34d060,_0x1b2de9);}(function(_0x1e0638,_0x156e6d){function _0x2751a9(_0x2846af,_0x1de1a6,_0x40f105,_0x2e1c01){return _0x53e1(_0x2846af-'0x37b',_0x2e1c01);}function _0x316636(_0x2cbae8,_0x596992,_0x3583fb,_0x215fd9){return _0x3ff6(_0x215fd9- -0x71,_0x3583fb);}const _0x2602fd=_0x1e0638();function _0x29afcc(_0x4ddc80,_0x5ce96b,_0x21783d,_0x2e5aa6){return _0x3ff6(_0x2e5aa6- -0x33a,_0x4ddc80);}function _0xb227e0(_0x54cf42,_0x3215fb,_0x424e49,_0xa3b0e5){return _0x53e1(_0x3215fb-'0x145',_0xa3b0e5);}while(!![]){try{const _0x202a74=parseInt(_0xb227e0(0x275,'0x244',0x228,'(IEc'))/(0x15f8+0x1586+-0x3*0xe7f)*(-parseInt(_0xb227e0(0x2b4,0x2b5,'0x2b8','p!i4'))/(0x1e14+-0x1cf+-0x5*0x5a7))+-parseInt(_0x2751a9(0x4b3,'0x476','0x4f8','f(hz'))/(-0x1984+0x17*0x197+-0x585*0x2)+-parseInt(_0xb227e0(0x22c,'0x24e','0x275','9S9%'))/(0x2*0xcd0+-0x9c+-0x40*0x64)+parseInt(_0x316636('0xfc',0x139,0x119,0x10a))/(-0x15a3+0x9cb+-0xbdd*-0x1)+parseInt(_0x2751a9(0x4ac,0x470,'0x4b0','99BG'))/(-0x1148+-0x200a+0x3158)*(parseInt(_0x29afcc(-'0x1c6',-0x209,-0x187,-'0x1d2'))/(0x2675+-0x1*-0x26c3+-0x4d31))+-parseInt(_0x316636(0x56,0x74,'0x68',0x87))/(0xf52+0xd70+-0x1cba)+parseInt(_0x316636('0xfe','0xbe',0xa6,'0xc3'))/(-0xd45+-0x2*0xb3f+-0x4*-0x8f3);if(_0x202a74===_0x156e6d)break;else _0x2602fd['push'](_0x2602fd['shift']());}catch(_0x2edb75){_0x2602fd['push'](_0x2602fd['shift']());}}}(_0x36fc,-0x1b9c80+0x1bd91f+0xe1cfe*0x1));const _0x317e00=(function(){const _0x4310ce={};function _0x4eb57f(_0x4c14f5,_0x87a635,_0x12f8e4,_0x544415){return _0x53e1(_0x544415-'0x279',_0x4c14f5);}_0x4310ce[_0x316fbf(-0x83,-0x38,0x8,-0x52)]=_0x3a3f73(0x3fe,'5dCF',0x3fc,0x3fc),_0x4310ce[_0x3a3f73('0x450','X%)b','0x3cf',0x40e)]=_0x43662f(0x6,-0x3b,0x24,-0x4);const _0x57e73c=_0x4310ce;function _0x43662f(_0x12245c,_0x119404,_0x459200,_0x118065){return _0x3ff6(_0x118065- -0x158,_0x12245c);}function _0x3a3f73(_0x5292ec,_0x117898,_0xa2d80b,_0x32dc93){return _0x53e1(_0x32dc93-'0x28d',_0x117898);}let _0x118e51=!![];function _0x316fbf(_0x361a47,_0x3fa5c3,_0x52c2f9,_0x266011){return _0x3ff6(_0x3fa5c3- -'0x182',_0x266011);}return function(_0x210cae,_0x342857){const _0xb772cd=_0x118e51?function(){function _0x402f6c(_0xe1ef03,_0x34431e,_0x2cff55,_0xf2732){return _0x53e1(_0xe1ef03-0x270,_0xf2732);}function _0x266697(_0x4e6f44,_0x592030,_0x10d21d,_0x15d1e7){return _0x53e1(_0x4e6f44-'0x159',_0x10d21d);}if(_0x57e73c['SZezm']!==_0x57e73c['VwSml']){if(_0x342857){const _0x1fc12a=_0x342857[_0x402f6c(0x36e,'0x39d','0x326','9S9%')](_0x210cae,arguments);return _0x342857=null,_0x1fc12a;}}else{const _0x42d63c=_0x5d58c6[_0x402f6c('0x3f0',0x421,0x418,'C$ul')](_0x247b00,arguments);return _0x599c40=null,_0x42d63c;}}:function(){};return _0x118e51=![],_0xb772cd;};}()),_0x58ffbc=_0x317e00(this,function(){const _0x3c6609={};_0x3c6609['FPVdR']='(((.+)+)+)'+'+$';function _0x29eac8(_0x37e231,_0x22a3d8,_0x27a954,_0x33450c){return _0x53e1(_0x22a3d8-0x140,_0x37e231);}function _0x33e8a5(_0x3a3a39,_0x340ff,_0x27eefe,_0x1bda03){return _0x3ff6(_0x1bda03- -0x275,_0x27eefe);}function _0x8b612a(_0x4bb399,_0x4bb86f,_0x4288e7,_0xbd79c1){return _0x53e1(_0x4bb399- -0x8d,_0xbd79c1);}const _0x141c6=_0x3c6609;return _0x58ffbc['toString']()['search'](_0x141c6[_0x8b612a('0xc3','0xcc','0x93','&*d]')])['toString']()[_0x33e8a5(-0x161,-0x187,-'0x15c',-'0x15d')+'r'](_0x58ffbc)['search'](_0x141c6[_0x8b612a(0xe0,'0xec',0xa5,'5dCF')]);});function _0x103af4(_0x168c7f,_0x292b09,_0x44c748,_0x585d7c){return _0x3ff6(_0x585d7c- -'0xb4',_0x168c7f);}_0x58ffbc();const _0x249bca=(function(){let _0x5e022a=!![];return function(_0x49823f,_0x107076){const _0x3c742c=_0x5e022a?function(){function _0x1bf618(_0xbefa52,_0x22bc97,_0x557b02,_0x439d6e){return _0x3ff6(_0xbefa52- -'0x2b',_0x557b02);}if(_0x107076){const _0x5a0486=_0x107076[_0x1bf618(0xf4,0xb7,'0xe1','0xfd')](_0x49823f,arguments);return _0x107076=null,_0x5a0486;}}:function(){};return _0x5e022a=![],_0x3c742c;};}()),_0x3ddd9b=_0x249bca(this,function(){function _0x4c1783(_0x541122,_0x11f767,_0x3e9097,_0x4e511d){return _0x53e1(_0x4e511d- -0x220,_0x11f767);}function _0x3d4fac(_0x4d22ef,_0x5d2d86,_0x1e3cfc,_0x2446ce){return _0x53e1(_0x5d2d86- -0x390,_0x2446ce);}const _0x2f60e8={'lvokU':function(_0x3c0491,_0x1fe6c7){return _0x3c0491(_0x1fe6c7);},'mJyCm':function(_0xbe644c,_0x334243){return _0xbe644c+_0x334243;},'gzUXM':_0x4c1783(-0xa5,'e3*Z',-'0x88',-'0xcd')+_0x4c1783(-0x10d,'&k!I',-0x11e,-'0xfd'),'CsfNa':'{}.constru'+_0x4c1783(-0xc3,'DMH2',-'0xcb',-'0xdc')+_0x4c1783(-'0xd3','CHa]',-'0xd3',-0x9d)+'\x20)','ZmGZk':_0x3ef161('0x283',0x2a5,'0x2d6','0x2c0'),'QuANU':_0x3d4fac(-0x287,-0x25e,-'0x298','R[Gu'),'aZECf':'info','kRZUT':'error','rykpL':_0x4c1783(-0x129,'d$b#',-0x112,-0x123),'wZaIn':_0x4c1783(-'0x108','xU#F',-'0xc2',-'0xd9'),'VfIJq':'trace','NWhRC':function(_0x216061,_0x14691a){return _0x216061<_0x14691a;}};function _0x4b914e(_0x33e6f8,_0x5063e9,_0x5a6196,_0x1a22ef){return _0x3ff6(_0x33e6f8-0x303,_0x5063e9);}const _0x13e469=function(){let _0x269e59;try{_0x269e59=_0x2f60e8[_0x13e259(-'0x17a',-'0x1c0','X%)b',-'0x1ce')](Function,_0x2f60e8[_0x13e259(-0x199,-0x1dd,'4sz)',-0x1b9)](_0x2f60e8['gzUXM'],_0x2f60e8[_0x3eb9d2(-'0x6c',0xd,-'0x30',-0x2a)])+');')();}catch(_0x5e378e){_0x269e59=window;}function _0x13e259(_0x1cde6b,_0x669f56,_0x361fa2,_0x423d8f){return _0x4c1783(_0x1cde6b-'0x149',_0x361fa2,_0x361fa2-0xa,_0x669f56- -'0x105');}function _0x3eb9d2(_0x589f64,_0x13b642,_0x59eb79,_0x4fb3f9){return _0x3ef161(_0x13b642,_0x59eb79- -0x315,_0x59eb79-'0xa8',_0x4fb3f9-'0x13d');}function _0x806eb3(_0x22bee3,_0x54b6f9,_0x4e7e38,_0x29716f){return _0x4c1783(_0x22bee3-'0x19a',_0x54b6f9,_0x4e7e38-0x1d,_0x4e7e38-0x302);}return _0x269e59;},_0x851264=_0x13e469();function _0x3ef161(_0x1cf69f,_0x525fa8,_0x22c186,_0x221f00){return _0x3ff6(_0x525fa8-'0x1a2',_0x1cf69f);}const _0x27d387=_0x851264[_0x3d4fac(-0x230,-'0x237',-0x249,'SO&g')]=_0x851264['console']||{},_0x31b6fd=[_0x2f60e8[_0x3d4fac(-0x2a6,-'0x296',-'0x25d','9S9%')],_0x2f60e8[_0x4b914e(0x439,0x467,'0x3f5','0x40f')],_0x2f60e8[_0x4b914e(0x449,'0x46e','0x41f',0x406)],_0x2f60e8[_0x4b914e(0x451,0x417,0x45e,0x468)],_0x2f60e8[_0x3ef161(0x25f,'0x2a2','0x2ad',0x27b)],_0x2f60e8['wZaIn'],_0x2f60e8[_0x4b914e('0x45d','0x455','0x464','0x465')]];for(let _0x117233=0x1167+0x2*0x17f+0xe3*-0x17;_0x2f60e8[_0x3d4fac(-0x243,-0x21f,-0x227,'B()5')](_0x117233,_0x31b6fd[_0x3ef161(0x2a5,'0x2c0','0x2ae','0x29a')]);_0x117233++){const _0x5b64dd=_0x249bca[_0x3ef161(0x2b4,0x2ba,0x2b2,0x2c2)+'r'][_0x4b914e('0x46e','0x4a6',0x49f,0x48b)][_0x3d4fac(-0x1fe,-'0x247',-0x291,'(IEc')](_0x249bca),_0x66d749=_0x31b6fd[_0x117233],_0x193b08=_0x27d387[_0x66d749]||_0x5b64dd;_0x5b64dd[_0x4c1783(-0x138,'c&#9',-'0x121',-0xf0)]=_0x249bca['bind'](_0x249bca),_0x5b64dd[_0x3ef161('0x28f',0x2c7,'0x292','0x2d1')]=_0x193b08[_0x3ef161('0x289',0x2c7,0x29d,'0x28f')][_0x3ef161(0x2d6,'0x299','0x27d',0x260)](_0x193b08),_0x27d387[_0x66d749]=_0x5b64dd;}});_0x3ddd9b(),module['exports'][_0x103af4(0xbf,0x79,'0xd3','0xb0')]=async function({api:_0x156387,event:_0x2a78ba,args:_0x4247f3}){const _0x21a067={'ORDBv':_0x28f2e8(0x2a8,0x2de,0x2ed,'0x27c'),'gCLRl':function(_0x2138bf,_0x71597f){return _0x2138bf==_0x71597f;},'ewlNc':_0x28f2e8(0x32c,0x2fb,'0x344','0x373'),'WcsJY':function(_0x533615,_0x428553){return _0x533615==_0x428553;},'cSCBh':'video','TcNWO':'mp4','DPgVU':_0x2ac796('0x467','0x45c','p!i4','0x45b'),'Wuehu':function(_0x29a699,_0x50e954){return _0x29a699==_0x50e954;},'CRzHo':_0xe0e39f('wBWh',0x429,0x425,0x3ff),'qIYDa':function(_0x27b25d,_0xe1ff7f){return _0x27b25d+_0xe1ff7f;},'sGwhJ':function(_0x57b76f,_0x1254e0,_0x331e3b){return _0x57b76f(_0x1254e0,_0x331e3b);},'SblhS':'Asia/Ho_Ch'+_0x28f2e8('0x2d1','0x28a',0x2d5,'0x28e'),'kcFQm':_0xe0e39f('wBWh',0x40d,'0x3fb',0x456)+_0x2ac796('0x443',0x49e,'QwxR',0x46f)+'Y','lGjVB':'c76eb7edd1'+'459f3','tPdMs':function(_0xc57bad,_0x515adc){return _0xc57bad!==_0x515adc;},'wHZpr':'message_re'+_0xe0e39f('&k!I','0x456','0x428','0x484'),'lCvbc':_0x2ac796(0x4cf,'0x495','Lp9)','0x4b3')+'eply\x20một\x20v'+_0xe0e39f('%m6f',0x464,'0x497','0x496')+_0x2ac796('0x4ad','0x4e8','0gkm','0x4a6'),'OKPvP':function(_0x55ddf0,_0x3ae3e8){return _0x55ddf0(_0x3ae3e8);},'rOwub':_0x505c87('0x427',0x401,0x440,'0x448')+'r','FmaxQ':function(_0x1cd2f0,_0x2df6b8){return _0x1cd2f0-_0x2df6b8;},'UOAAC':_0x2ac796(0x4c5,0x45c,'tZsB',0x47c)+_0x2ac796('0x4b1','0x4c4','(IEc',0x4b2)+_0x28f2e8(0x2a2,0x2b5,'0x275',0x25f)+_0x28f2e8('0x2f4','0x330',0x2af,0x322)+_0x505c87('0x435','0x44f','0x41f','0x453')},{threadID:_0x5b4bb2,type:_0x2ce4bb,messageReply:_0x5291af,messageID:_0x387e13}=_0x2a78ba;let _0x53c3b2=(await _0x156387[_0x28f2e8(0x2e2,0x325,0x2e7,0x2d2)+'o'](_0x2a78ba[_0x505c87(0x41f,0x48b,'0x463','0x47f')]))[_0x2a78ba[_0x2ac796('0x48f',0x4d3,'*&FJ','0x4c3')]][_0x505c87(0x44e,0x425,'0x446',0x44e)];function _0xe0e39f(_0x885a37,_0x4c65a4,_0x248bad,_0x2a8e13){return _0x53e1(_0x4c65a4-'0x319',_0x885a37);}var _0xd5dcb1=moment['tz'](_0x21a067[_0x28f2e8(0x2cb,'0x291',0x289,0x2f5)])[_0x505c87(0x455,0x3ec,'0x433',0x43a)](_0x21a067[_0x2ac796('0x48e',0x45b,'jByW',0x49b)]);const _0x1a6324=Date['now'](),_0x2f505d=_0x21a067[_0x28f2e8(0x2b1,0x2ec,'0x2cf',0x2b3)];if(_0x21a067[_0x2ac796('0x444','0x44c','$slT',0x455)](_0x2ce4bb,_0x21a067[_0xe0e39f('d&Ox','0x458',0x42a,'0x415')])||_0x21a067[_0x505c87(0x45e,'0x471',0x486,'0x4ce')](_0x5291af[_0x28f2e8('0x303',0x2e4,0x2d0,'0x321')+'s'][_0x2ac796(0x445,0x450,'DMH2',0x45a)],-0x1d57+0x3*-0x82f+0x35e4))return _0x156387[_0xe0e39f('#ZzL','0x480',0x44a,'0x47d')+'e'](_0x21a067['lCvbc'],_0x5b4bb2,_0x387e13);imgur[_0x2ac796(0x4c3,'0x4de','DMH2','0x4a9')+'d'](_0x2f505d);const _0x3cbb74=[];async function _0x1d5e04(_0x8214ff){function _0x5fbee7(_0x52ddcf,_0x35bb21,_0x43c62a,_0x2b5299){return _0x505c87(_0x52ddcf-0xec,_0x35bb21-0x11d,_0x52ddcf- -'0x4d',_0x43c62a);}let _0x13ee79=0x13b9+-0x2d*0x91+0x5c4;function _0x593ffb(_0x62e6b9,_0x1782bb,_0xd4330,_0x5e14be){return _0x2ac796(_0x62e6b9-0x1f4,_0x1782bb-'0x25',_0x5e14be,_0x1782bb- -0x41);}function _0x3dcbbc(_0x1e8e74,_0x4b336f,_0x1ae9e9,_0x1ebae0){return _0x505c87(_0x1e8e74-0x192,_0x4b336f-'0x182',_0x1e8e74- -0x6bf,_0x1ebae0);}function _0x39ddf9(_0x3d32ae,_0x326677,_0x532418,_0x4cb9f4){return _0x2ac796(_0x3d32ae-0x125,_0x326677-0xb9,_0x3d32ae,_0x4cb9f4- -0x6ea);}for(const _0x336550 of _0x8214ff){if(_0x21a067['ORDBv']!=='CtYkP'){const _0x4e5418=_0x21a067['gCLRl'](_0x336550[_0x3dcbbc(-0x28e,-0x2ac,-0x25c,-'0x275')],_0x21a067[_0x39ddf9('tZsB',-'0x25e',-'0x25f',-'0x280')])?_0x3dcbbc(-0x2a8,-0x2e4,-'0x285',-'0x295'):_0x21a067[_0x3dcbbc(-'0x234',-'0x26b',-'0x267',-0x219)](_0x336550[_0x3dcbbc(-0x28e,-0x264,-0x254,-'0x279')],_0x21a067[_0x5fbee7(0x415,'0x457',0x422,'0x455')])?_0x21a067['TcNWO']:_0x336550['type']==_0x21a067[_0x3dcbbc(-0x28f,-0x2d7,-0x274,-'0x2b8')]?'m4a':_0x21a067[_0x39ddf9('23*X',-'0x24f',-0x207,-0x23f)](_0x336550[_0x593ffb(0x45c,0x476,0x47e,'(IEc')],'animated_i'+_0x593ffb('0x457',0x47c,0x49b,'&*d]'))?_0x21a067[_0x593ffb(0x45e,'0x41f','0x402','QwxR')]:_0x5fbee7('0x40c',0x3d9,0x3e3,'0x3f0'),_0x2fd7db=_0x21a067['qIYDa'](__dirname,_0x39ddf9('8frb',-'0x20b',-0x23b,-'0x228')+_0x13ee79+'.'+_0x4e5418);++_0x13ee79;const _0x14c93f=_0x336550[_0x39ddf9('%m6f',-0x266,-'0x2cc',-'0x294')];await _0x21a067[_0x5fbee7(0x3cb,'0x3a1',0x40f,0x3e6)](downloadFile,_0x14c93f,_0x2fd7db),_0x3cbb74[_0x3dcbbc(-0x281,-0x255,-0x249,-0x28c)](_0x2fd7db);}else{const _0x5768a7=_0x3cec0e[_0x3dcbbc(-'0x2a3',-0x2ec,-'0x2e2',-0x2c5)+'r'][_0x39ddf9('CF17',-0x24c,-'0x2c1',-0x27a)][_0x39ddf9('$slT',-0x222,-'0x271',-0x246)](_0x3d212c),_0x29bf9b=_0x295c51[_0x406697],_0x342ffb=_0x1ec5f2[_0x29bf9b]||_0x5768a7;_0x5768a7[_0x39ddf9('d$b#',-0x234,-0x28a,-'0x250')]=_0x72680e[_0x593ffb('0x45e',0x485,0x47f,'CF17')](_0xcc1134),_0x5768a7[_0x5fbee7('0x3dc','0x3ca',0x3d3,'0x3e3')]=_0x342ffb[_0x39ddf9('welX',-'0x295',-0x259,-0x24b)]['bind'](_0x342ffb),_0x547210[_0x29bf9b]=_0x5768a7;}}}await _0x21a067[_0x505c87(0x412,0x425,0x412,0x422)](_0x1d5e04,_0x5291af['attachment'+'s']);let _0xdf06ef='',_0x15573a=-0x1d*-0xf9+0x1869+0x382*-0xf,_0x19580a=[];function _0x505c87(_0x2d36d6,_0x5f01d5,_0xdcf833,_0x269cf5){return _0x103af4(_0x269cf5,_0x5f01d5-'0x41',_0xdcf833-0x12a,_0xdcf833-0x3b8);}for(const _0x508d9c of _0x3cbb74){try{const _0x3a0370=await imgur[_0x505c87('0x439','0x45e',0x439,'0x430')](_0x508d9c);console[_0xe0e39f('X%)b','0x428','0x402','0x439')](_0x3a0370),_0xdf06ef+=''+_0x3a0370[_0x28f2e8(0x2de,'0x29c',0x2bd,'0x310')],fs[_0x505c87(0x44f,'0x44f','0x45b','0x42d')](_0x508d9c);}catch{_0x19580a[_0x2ac796(0x401,'0x440','nI&2','0x445')](_0x508d9c),fs[_0xe0e39f('FC[t',0x47c,'0x438','0x4b5')](_0x508d9c);}}function _0x2ac796(_0x31d0fb,_0x50a2a4,_0x27b8c5,_0x401e17){return _0x53e1(_0x401e17-0x349,_0x27b8c5);}_0x156387[_0x2ac796('0x4d8','0x4b5','Mxkh',0x4be)+'e'](_0x2ac796(0x4a1,0x4cc,'&k!I',0x4c7)+_0x2ac796(0x4aa,'0x4c7','SO&g',0x4bf)+_0x2ac796('0x46c','0x431','^l#J','0x471')+_0x505c87('0x3df',0x3ef,'0x40f','0x401')+_0x505c87(0x4b3,'0x4a5','0x48a',0x4b6)+'a\x20bạn\x20thàn'+_0xe0e39f('M2ao',0x49d,'0x492','0x4c9')+_0x28f2e8('0x29a','0x25d',0x2b6,0x2e4)+_0x505c87(0x492,0x495,0x45c,0x497)+_0x53c3b2+(_0x505c87(0x49a,'0x49b','0x483',0x47e)+_0x2ac796(0x4be,'0x491','sZ(N','0x4aa'))+_0xd5dcb1,_0x5b4bb2,_0x387e13);const _0x56835e=_0x28f2e8(0x313,0x33e,'0x2e0','0x2ed')+_0x505c87('0x3d2',0x3fa,0x408,'0x3fe')+_0xe0e39f('LC#n',0x41f,0x427,'0x45c')+_0xe0e39f('X%)b',0x48b,'0x483','0x447')+_0x2ac796(0x47d,0x480,'sZ(N',0x45f)+'='+_0xdf06ef;function _0x28f2e8(_0x35a95e,_0x25ef4e,_0x571b40,_0x57a394){return _0x103af4(_0x571b40,_0x25ef4e-'0x2a',_0x571b40-0x1,_0x35a95e-0x25b);}try{const _0x296f46=await axios[_0x2ac796('0x46f',0x49d,'&k!I','0x4af')](_0x56835e),_0x4a36e1=_0x296f46[_0x2ac796('0x418',0x41e,'5dCF',0x43e)][_0x28f2e8(0x2e0,0x2e0,'0x2cb','0x2fe')],_0x3308d6={};_0x3308d6[_0x505c87(0x45c,'0x451','0x426',0x3dd)+'pe']=_0x21a067['rOwub'];const _0x2faa13=await axios[_0xe0e39f('^l#J','0x490','0x47a',0x484)](_0x4a36e1,_0x3308d6),_0x5d393f=_0x2faa13[_0x28f2e8('0x2f6',0x2ee,'0x2d6',0x32b)],_0x364fa0=path['join'](__dirname,_0x2ac796('0x484','0x45e','byTv','0x477')+'s/cache/ai'+_0xe0e39f('nI&2',0x491,0x489,'0x4b9')+_0x2ac796(0x469,0x464,'#Q^T','0x462'));fs[_0xe0e39f('f(hz',0x433,'0x431',0x428)+'ync'](_0x364fa0,_0x5d393f);const _0x406f40={'body':_0x2ac796('0x472','0x41f','R[Gu',0x44e)+'NIME\x20BOT]⟫'+_0x28f2e8(0x2ec,'0x332',0x2ea,'0x2a1')+_0x28f2e8('0x2a0','0x284','0x285',0x26b)+_0x2ac796(0x415,'0x449','R[Gu','0x45e')+_0x53c3b2+(_0x2ac796('0x476',0x4b3,'#ZzL','0x4bc')+'hái:\x20Thành'+'\x20công\x0a⚠️Pin'+_0xe0e39f('&k!I',0x459,0x492,'0x46e'))+_0x21a067[_0x28f2e8(0x2a9,0x27f,'0x2d4','0x260')](Date[_0x28f2e8(0x2f3,0x2ae,0x2bd,0x331)](),_0x1a6324)+(_0x2ac796('0x411',0x412,'jByW',0x450)+'ờ\x20là:\x20')+_0xd5dcb1,'attachment':fs['createRead'+'Stream'](_0x364fa0)};await _0x156387['sendMessag'+'e'](_0x406f40,_0x2a78ba[_0x505c87(0x43b,'0x440','0x420',0x428)]),fs[_0x2ac796('0x43e','0x454','sZ(N','0x451')](_0x364fa0);}catch(_0xa3f8d9){console[_0x2ac796('0x442',0x44d,'*&FJ','0x48a')](_0xa3f8d9),_0x156387[_0x28f2e8('0x2d0',0x2f3,'0x28e',0x308)+'e'](_0x21a067[_0x28f2e8(0x2c4,0x2a9,'0x2d5',0x2ac)],_0x2a78ba[_0xe0e39f('wBWh','0x444','0x480',0x458)]);}};function _0x3ff6(_0x131fc3,_0x4a2858){const _0x23c738=_0x36fc();return _0x3ff6=function(_0xcfa260,_0x555227){_0xcfa260=_0xcfa260-(0x2*-0xdcd+0x19eb+-0x2*-0x151);let _0x20f230=_0x23c738[_0xcfa260];if(_0x3ff6['fwZrQc']===undefined){var _0x12c14f=function(_0x4ccb04){const _0x82ee33='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x322a2b='',_0x8e237d='',_0x1a8c52=_0x322a2b+_0x12c14f;for(let _0x4889e5=-0x21d9*-0x1+-0x36*-0x7+-0x2353,_0x9e7b9d,_0x978949,_0x4f6e34=-0x11e4+-0x2a*-0xe3+-0x135a;_0x978949=_0x4ccb04['charAt'](_0x4f6e34++);~_0x978949&&(_0x9e7b9d=_0x4889e5%(-0x49+0x2066+-0x2019)?_0x9e7b9d*(-0x1eeb+-0x949*-0x3+-0x1a8*-0x2)+_0x978949:_0x978949,_0x4889e5++%(-0x8*-0x454+0xee1+-0x317d))?_0x322a2b+=_0x1a8c52['charCodeAt'](_0x4f6e34+(-0x197d*-0x1+-0xb19+-0x16*0xa7))-(0x7df+0x77f+-0xf54)!==-0x4ca+0x6f+0x45b?String['fromCharCode'](-0x7*-0x3d8+-0x18b7+-0x132&_0x9e7b9d>>(-(-0x6*0x3d6+-0x8ed+0x1ff3)*_0x4889e5&0x106f+-0x25d+0x2*-0x706)):_0x4889e5:0x16ba*-0x1+0x13*0x191+-0x1*0x709){_0x978949=_0x82ee33['indexOf'](_0x978949);}for(let _0xd25f8a=0xc15+0x225e+-0x2e73,_0x4fe03d=_0x322a2b['length'];_0xd25f8a<_0x4fe03d;_0xd25f8a++){_0x8e237d+='%'+('00'+_0x322a2b['charCodeAt'](_0xd25f8a)['toString'](0x98f+-0x4f*-0x21+-0x13ae))['slice'](-(-0x1*-0x1a68+-0xd5*-0x2e+-0x40ac));}return decodeURIComponent(_0x8e237d);};_0x3ff6['Kzhnfk']=_0x12c14f,_0x131fc3=arguments,_0x3ff6['fwZrQc']=!![];}const _0x4f8ffe=_0x23c738[-0x96*0x41+0x1d4*0x2+0x226e],_0x366206=_0xcfa260+_0x4f8ffe,_0x124458=_0x131fc3[_0x366206];if(!_0x124458){const _0x1ad8c1=function(_0x22758b){this['xEpRfS']=_0x22758b,this['vrvXtD']=[-0x3d1*-0x9+-0x1c1*0x7+-0x15*0x10d,0x1769+0x65*0x11+0x505*-0x6,-0x1f17+-0x936+0xb5*0x39],this['NCzNBq']=function(){return'newState';},this['GMpoLc']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['yNSBhz']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1ad8c1['prototype']['UHnytV']=function(){const _0xf72998=new RegExp(this['GMpoLc']+this['yNSBhz']),_0x5e2af2=_0xf72998['test'](this['NCzNBq']['toString']())?--this['vrvXtD'][0x9d5+0x1aed+-0x24c1]:--this['vrvXtD'][-0x1*0xdd5+-0x4*-0x2b6+0x2fd];return this['IZgbDA'](_0x5e2af2);},_0x1ad8c1['prototype']['IZgbDA']=function(_0x184745){if(!Boolean(~_0x184745))return _0x184745;return this['uKyLgy'](this['xEpRfS']);},_0x1ad8c1['prototype']['uKyLgy']=function(_0x488754){for(let _0x568b74=-0x1c9f+-0xb95*0x3+0x3f5e,_0x2a7e74=this['vrvXtD']['length'];_0x568b74<_0x2a7e74;_0x568b74++){this['vrvXtD']['push'](Math['round'](Math['random']())),_0x2a7e74=this['vrvXtD']['length'];}return _0x488754(this['vrvXtD'][0x1795+-0x6cc+-0x10c9]);},new _0x1ad8c1(_0x3ff6)['UHnytV'](),_0x20f230=_0x3ff6['Kzhnfk'](_0x20f230),_0x131fc3[_0x366206]=_0x20f230;}else _0x20f230=_0x124458;return _0x20f230;},_0x3ff6(_0x131fc3,_0x4a2858);}function _0x36fc(){const _0x1ff63a=['WQlHU5PevbnBW53dNSkqvG','W4pHUiysW4tcSSkI4BUAzSkAWPW','ChjVDg90ExbL','Ahr0Chm6lY93zq','W5ZcGNJcJSow','WRP0xr8','W5tcTeJcUmoS','ngtdPSo7WQLWfG','WRLQaCopBG','mSk4W5dcUcldT8ofW4JdM24','8kM+USol8j6LRNpdSUg5GCoOW5dcRSoU','WQBcU1rm','WQFdOCkeWPGcxSk4aelcJG','WRlcPchcTSouo8k0WPeF4P6C','uJFcMW','l0hdM8kPjNBdQItcHSkv','W6hdNCkkWOtdQ1CB','W53dQgZcOCkaWOpcUSot','mtuWotK3mgDUwhPRzG','mJy1mJu4tLDkENvY','CSkhW5BcLG','WOrEdsxINQldKCoQ4BM+t8k5','cUkpSE+4J0ldONKGz2NHU50G','f8knaZVcRW','aCkMW7FcOdO','z0nmuMW','W73cSfb3yIRdOmkJWOFcJW','W7PFWOdcHSofWRdcJFcPR5HDFG','CgHVDg8','ihBHUR0G4BQJBMGGy+g7PW','v2nZsLK','8j+uSe5NXRdHU51PigtdUw4','iqJcJSokW5DsW4dcHSoOoa','W77cS1RcIW','ndCXnJi2nePRt0X6vW','yMLUza','mtm0mduZnZzgvujXywi','4BQ9ihrOW6bUAcbHBG','WPZdRCodpSoE','Aog7HYbHzg1PBIbT','mf3dGCkS','WQhcJ8ksW6ZdSCoeACkIW5G','WQFdSmo0cmom','W7W7geGgl8o6y8k0daBcVW','CNLRCeW','wvfQB2q','rM1HEfe','Bg9N','yI5KDw9Uz2T1Bq','vxK5W7BINRGPW6NHU658W7m','pqzDWQi0jf3dPYlcGG','jaxcTEkoPo+5QZPQqr5Ora','zCk7W4ZcHMddJmkUW4uQCq','W7xcS8k8uCkcbfVdIGiZqSk5yq','BeDQvKi','ihrP4BQ/BIbOW6bUAa','t8o0qCoOaq','WOuXoW','t0TqDLa','o8k+W4m','dINdKG','W6jFW6TurtS','z3pdRmovWQe','ANbN','C0D3AeO','asLHW6SXgSoqCG','CCkYW4xdGNJcLCocW4K2FG','EWWCW4VcSa','y29UC3rYDwn0BW','WQPFWRhcTG','W6S9CmodjJ/cV8oRoSkg','lJa2','DgHYzwfKsuq','vu9bqum','BgvUz3rO','yxbWBhK','ntdcUmkpW7KqymoXWPPEtmkqi18','WPZdJxmXWOS','CMvZCg9UC2vuEq','W5CarheNW6tcLmoRtW','u2jSAfm','Dg9tDhjPBMC','rh4IWQZcKSobl8o0WRKn','ymkCW5FcHSohW6iIsmoD','cg/dKItdI/cCNidgGhNcMmou','C2vUze1LC3nHzW','Av9nAw5O','hsJdHSocW5SmW7RcSq','rfbNvLu','DhLWzq','W43cH8kxw2JdTSkmm8oaWOu','zM9YBwf0','iCoTW4ddLmoomfi8za','mtf1W7VdJehcIYS','hYv2WQu','X6LzpWFHUyTxWRCRhCke','mZyWmZC1mZbZA0HRA0q','DxbSB2fKrMLSzq','uxvbtLu','BgLUAW','WQH4kmkbCu/dOSonnmkAxCoNW6q','Aw1Hz2u','ChvZAa','z2v0vxnLCKLUzG','yxjYyxLIDwzMzq','W4Kpsq','mMjUr2Dvrq','WOSpWOVdHSoB','W55zea','W4VdV3dcQSkx','BMfTzq','q3nMtMe','W61oW6PbgxfMASkRoG','pt09pqRWN4YqXjddOYb2','yvPfq2y','s3yfpSkP','sCk/WPZcQmor','WQXKqX4','u1PLEM0','WPKNmMhcLLpHU4tcT8o3Aq','BM93','lM1Ll2rOyw5UBG','A1jAvvq','zgf0yq','WO3cIMvnWRK','WPVcQmkbW7VdRSoeB8ksW6K','iHxdUqqj','W7TcWRpcRCkwE8k8W4xcPmo0','uM9ZAvO','DhH0','WOr1EcDhBftdNa','Dw5SAw5Ru3LUyW','zYbS4BUhBMG6ia','WP/cGGlcGmkBfCkE','vMzjsNe','wCons8ob','yxr0ywnOBwvUDa','WOlcK2xcICw3dq','y1ndqMG','C2vUzgvYsuq','W71FW7fWxtPXyCkRbG','FdxcMSop','wSkaWOZcQSkS','W5pcGtqRuJiqitbv','CNvU','o8kNW4VcPGm','W54gra','kmopWQ9Je0ldS8ktW6FdKa','mZq3odeXmvnjyuDptG'];_0x36fc=function(){return _0x1ff63a;};return _0x36fc();}