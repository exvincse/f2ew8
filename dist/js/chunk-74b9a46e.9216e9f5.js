(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74b9a46e"],{"02f4":function(t,e,a){var r=a("4588"),i=a("be13");t.exports=function(t){return function(e,a){var n,s,c=String(i(e)),o=r(a),l=c.length;return o<0||o>=l?t?"":void 0:(n=c.charCodeAt(o),n<55296||n>56319||o+1===l||(s=c.charCodeAt(o+1))<56320||s>57343?t?c.charAt(o):n:t?c.slice(o,o+2):s-56320+(n-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var r=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?r(t,e).length:1)}},"0bfb":function(t,e,a){"use strict";var r=a("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"1da6":function(t,e,a){},"214f":function(t,e,a){"use strict";a("b0c5");var r=a("2aba"),i=a("32e9"),n=a("79e5"),s=a("be13"),c=a("2b4c"),o=a("520a"),l=c("species"),f=!n(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var u=c(t),p=!n(function(){var e={};return e[u]=function(){return 7},7!=""[t](e)}),h=p?!n(function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[l]=function(){return a}),a[u](""),!e}):void 0;if(!p||!h||"replace"===t&&!f||"split"===t&&!d){var b=/./[u],m=a(s,u,""[t],function(t,e,a,r,i){return e.exec===o?p&&!i?{done:!0,value:b.call(e,a,r)}:{done:!0,value:t.call(a,e,r)}:{done:!1}}),v=m[0],g=m[1];r(String.prototype,t,v),i(RegExp.prototype,u,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},2437:function(t,e,a){t.exports=a.p+"img/file-upload-solid.2dc3f58b.svg"},"28a5":function(t,e,a){"use strict";var r=a("aae3"),i=a("cb7c"),n=a("ebd6"),s=a("0390"),c=a("9def"),o=a("5f1b"),l=a("520a"),f=a("79e5"),d=Math.min,u=[].push,p="split",h="length",b="lastIndex",m=4294967295,v=!f(function(){RegExp(m,"y")});a("214f")("split",2,function(t,e,a,f){var g;return g="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[h]||2!="ab"[p](/(?:ab)*/)[h]||4!="."[p](/(.?)(.?)/)[h]||"."[p](/()()/)[h]>1||""[p](/.?/)[h]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return a.call(i,t,e);var n,s,c,o=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,p=void 0===e?m:e>>>0,v=new RegExp(t.source,f+"g");while(n=l.call(v,i)){if(s=v[b],s>d&&(o.push(i.slice(d,n.index)),n[h]>1&&n.index<i[h]&&u.apply(o,n.slice(1)),c=n[0][h],d=s,o[h]>=p))break;v[b]===n.index&&v[b]++}return d===i[h]?!c&&v.test("")||o.push(""):o.push(i.slice(d)),o[h]>p?o.slice(0,p):o}:"0"[p](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,r){var i=t(this),n=void 0==a?void 0:a[e];return void 0!==n?n.call(a,i,r):g.call(String(i),a,r)},function(t,e){var r=f(g,t,this,e,g!==a);if(r.done)return r.value;var l=i(t),u=String(this),p=n(l,RegExp),h=l.unicode,b=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(v?"y":"g"),y=new p(v?l:"^(?:"+l.source+")",b),x=void 0===e?m:e>>>0;if(0===x)return[];if(0===u.length)return null===o(y,u)?[u]:[];var k=0,C=0,w=[];while(C<u.length){y.lastIndex=v?C:0;var _,O=o(y,v?u:u.slice(C));if(null===O||(_=d(c(y.lastIndex+(v?0:C)),u.length))===k)C=s(u,C,h);else{if(w.push(u.slice(k,C)),w.length===x)return w;for(var j=1;j<=O.length-1;j++)if(w.push(O[j]),w.length===x)return w;C=k=_}}return w.push(u.slice(k)),w}]})},"2f21":function(t,e,a){"use strict";var r=a("79e5");t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},"2fdb":function(t,e,a){"use strict";var r=a("5ca1"),i=a("d2c8"),n="includes";r(r.P+r.F*a("5147")(n),"String",{includes:function(t){return!!~i(this,t,n).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"320c":function(t,e,a){"use strict";var r=a("1da6"),i=a.n(r);i.a},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"456d":function(t,e,a){var r=a("4bf8"),i=a("0d58");a("5eda")("keys",function(){return function(t){return i(r(t))}})},"504c":function(t,e,a){var r=a("9e1e"),i=a("0d58"),n=a("6821"),s=a("52a7").f;t.exports=function(t){return function(e){var a,c=n(e),o=i(c),l=o.length,f=0,d=[];while(l>f)a=o[f++],r&&!s.call(c,a)||d.push(t?[a,c[a]]:c[a]);return d}}},5147:function(t,e,a){var r=a("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[r]=!1,!"/./"[t](e)}catch(i){}}return!0}},"520a":function(t,e,a){"use strict";var r=a("0bfb"),i=RegExp.prototype.exec,n=String.prototype.replace,s=i,c="lastIndex",o=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[c]||0!==e[c]}(),l=void 0!==/()??/.exec("")[1],f=o||l;f&&(s=function(t){var e,a,s,f,d=this;return l&&(a=new RegExp("^"+d.source+"$(?!\\s)",r.call(d))),o&&(e=d[c]),s=i.call(d,t),o&&s&&(d[c]=d.global?s.index+s[0].length:e),l&&s&&s.length>1&&n.call(s[0],a,function(){for(f=1;f<arguments.length-2;f++)void 0===arguments[f]&&(s[f]=void 0)}),s}),t.exports=s},"55dd":function(t,e,a){"use strict";var r=a("5ca1"),i=a("d8e8"),n=a("4bf8"),s=a("79e5"),c=[].sort,o=[1,2,3];r(r.P+r.F*(s(function(){o.sort(void 0)})||!s(function(){o.sort(null)})||!a("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(n(this)):c.call(n(this),i(t))}})},"5eda":function(t,e,a){var r=a("5ca1"),i=a("8378"),n=a("79e5");t.exports=function(t,e){var a=(i.Object||{})[t]||Object[t],s={};s[t]=e(a),r(r.S+r.F*n(function(){a(1)}),"Object",s)}},"5f1b":function(t,e,a){"use strict";var r=a("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var n=a.call(t,e);if("object"!==typeof n)throw new TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},6762:function(t,e,a){"use strict";var r=a("5ca1"),i=a("c366")(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},"6b54":function(t,e,a){"use strict";a("3846");var r=a("cb7c"),i=a("0bfb"),n=a("9e1e"),s="toString",c=/./[s],o=function(t){a("2aba")(RegExp.prototype,s,t,!0)};a("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?o(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!n&&t instanceof RegExp?i.call(t):void 0)}):c.name!=s&&o(function(){return c.call(this)})},"74f0":function(t,e,a){t.exports=a.p+"img/icon-star.ce880248.svg"},"7f7f":function(t,e,a){var r=a("86cc").f,i=Function.prototype,n=/^\s*function ([^ (]*)/,s="name";s in i||a("9e1e")&&r(i,s,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},8615:function(t,e,a){var r=a("5ca1"),i=a("504c")(!1);r(r.S,"Object",{values:function(t){return i(t)}})},"86d6":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"py-5 px-3 bg-primary",staticStyle:{position:"fixed",width:"210px",height:"100%"}},[r("div",{staticClass:"logo"}),t.flag?r("label",{staticClass:"btn btn-uploadbg upload text-left px-3 py-2 my-4",staticStyle:{cursor:"pointer"},attrs:{for:"file"}},[r("input",{ref:"file",staticStyle:{width:"0",height:"0",opacity:"0"},attrs:{type:"file",id:"file"},on:{change:function(e){return t.uploadfile()}}}),r("img",{attrs:{src:a("2437"),width:"24px",height:"24px",alt:""}}),r("span",{staticClass:"ml-3"},[t._v("上傳檔案")])]):t._e(),r("router-link",{staticClass:"btn text-white upload text-left px-3 py-2 mb-3",attrs:{to:"/index"}},[r("img",{attrs:{src:a("c0f6"),width:"24px",height:"24px",alt:""}}),r("span",{staticClass:"ml-3"},[t._v("所有檔案")])]),t.flag?r("label",{staticClass:"btn text-white upload text-left px-3 py-2 mb-3",staticStyle:{cursor:"pointer"},attrs:{for:"folder"}},[r("input",{ref:"folder",staticStyle:{width:"0",height:"0",opacity:"0"},attrs:{type:"file",id:"folder",webkitdirectory:""},on:{change:function(e){return t.uploadfolder()}}}),r("img",{attrs:{src:a("c0f6"),width:"24px",height:"24px",alt:""}}),r("span",{staticClass:"ml-3"},[t._v("上傳資料夾")])]):t._e(),r("router-link",{staticClass:"btn text-white upload text-left px-3 py-2 mb-3",attrs:{to:"/index/star"}},[r("img",{attrs:{src:a("74f0"),width:"24px",height:"24px",alt:""}}),r("span",{staticClass:"ml-3"},[t._v("已標記星號")])]),r("router-link",{staticClass:"btn text-white upload text-left px-3 py-2 mb-4",attrs:{to:"/index/trash"}},[r("img",{attrs:{src:a("bfe5"),width:"24px",height:"24px",alt:""}}),r("span",{staticClass:"ml-3"},[t._v("垃圾桶")])])],1),r("div",{staticClass:"text-white p-4 right-bg",staticStyle:{"margin-left":"210px","min-height":"100vh"}},[t.flag?r("div",[r("uploadfolder",{attrs:{propsfolder:t.propsfolder,buspath:t.$route.query.path},on:{uploadmsg:t.uploadmsg}}),r("uploadfile",{attrs:{propsfile:t.propsfile},on:{uploadmsg:t.uploadmsg}})],1):r("router-view")],1),t.uploadprogress.progressshow?r("div",[r("div",{staticClass:"helper-upload"}),r("div",{staticClass:"upload-msg d-flex flex-column text-center py-3 px-5"},[r("h3",[t._v("檔案上傳")]),r("span",[t._v("剩餘5秒")]),r("div",{staticClass:"d-flex justify-content-between mb-3"},[r("span",[t._v("\n        "+t._s(t.uploadprogress.start)+"MB\n      ")]),r("span",[t._v("\n        "+t._s(t.uploadprogress.total)+"MB\n      ")])]),r("div",{staticClass:"progess",style:{width:t.uploadprogress.progress+"px"}})])]):r("div",{staticClass:"helper"})])},i=[],n=a("1157"),s=a.n(n),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"mb-3"},[t._v("檔案")]),r("div",{staticClass:"d-flex flex-wrap folder-wrap"},t._l(t.totaldata,function(e,i){return r("div",{key:i,staticClass:"d-flex flex-column file"},[r("div",{staticClass:"text-center p-3"},[r("div",{staticClass:"file-choose mb-3 d-flex justify-content-between"},[e.star?r("a",{staticClass:"file-menu-click",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.stared(e)}}},[r("img",{attrs:{src:a("bc32"),alt:""}})]):r("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.stared(e)}}},[r("img",{attrs:{src:a("74f0"),alt:""}})]),r("a",{staticClass:"file-menu-click",attrs:{href:"#"}},[r("img",{attrs:{src:a("890c"),width:"24px",height:"24px",alt:""}}),r("ul",{staticClass:"file-menu"},[r("li",[r("a",{attrs:{href:e.fileUrl}},[t._v("下載")])]),r("li",[r("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.edit=e.id,t.editname=e.name}}},[t._v("重新命名")])]),r("li",[r("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.throwtrash(e)}}},[t._v("刪除")])])])])]),"pdf"===e.type?r("i",{staticClass:"fas fa-file-pdf fa-5x"}):"zip"===e.type||"rar"===e.type?r("i",{staticClass:"fas fa-file-archive fa-5x"}):t._e()]),e.id===t.edit?r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.editname,expression:"editname"}],staticClass:"form-control input-group-prepend",attrs:{type:"text"},domProps:{value:t.editname},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.editfilename(e)},input:function(e){e.target.composing||(t.editname=e.target.value)}}}),r("a",{staticClass:"btn btn-uploadbg",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.editfilename(e)}}},[t._v("更改")])]):r("span",[t._v(t._s(e.name))])])}),0)])},o=[],l=(a("28a5"),a("7f7f"),a("8615"),a("ac6a"),a("456d"),a("55dd"),{props:["propsfile"],data:function(){return{filedata:[],file:{},edit:"",editname:""}},watch:{propsfile:function(){this.uploadfile()}},created:function(){this.getfile()},computed:{totaldata:function(){return this.filedata.filter(function(t){return!1===t.trash}).sort(function(t,e){return e.star-t.star})}},methods:{editfilename:function(t){var e=this;this.$firebase.database().ref("file/".concat(t.id)).update({name:this.editname}).then(function(){e.getfile(),e.edit=""})},getfile:function(){var t=this;this.$firebase.database().ref("/file").on("value",function(e){if(null===e.val())return!1;t.filedata=[];var a=Object.keys(e.val()),r=Object.values(e.val());return a.forEach(function(e,a){t.filedata.push({id:e,name:r[a].name,fileUrl:r[a].fileUrl,type:r[a].type,star:r[a].star,trash:r[a].trash})}),!0})},updatefile:function(){var t=this,e=this.$firebase.database().ref("file");e.push(this.file).then(function(){t.getfile()})},uploadfile:function(){var t=this,e=this.propsfile.type.split("/")[1];if("pdf"!==e&&"zip"!==e&&"rar"!==e)return alert("請暫時不要上傳不是PDF,zip,rar格式檔案"),s()("#file").val(""),!1;var a=this.$firebase.storage().ref(),r=a.child("file/".concat(this.propsfile.name)).put(this.propsfile);r.on("state_changed",function(e){var a=(e.bytesTransferred/1e6).toFixed(1),r=(e.totalBytes/1e6).toFixed(1),i=e.bytesTransferred/e.totalBytes*234;t.$emit("uploadmsg",a,r,i,!0)},function(){},function(){r.snapshot.ref.getDownloadURL().then(function(e){t.file={fileUrl:e,name:t.propsfile.name,type:t.propsfile.type.split("/")[1],star:!1,trash:!1}}).then(function(){t.$emit("uploadmsg",0,0,0,!1),t.updatefile()})}),s()("#file").val("")},stared:function(t){this.$firebase.database().ref("file/".concat(t.id)).update({star:!t.star}),this.getfile()},throwtrash:function(t){this.$firebase.database().ref("file/".concat(t.id)).update({trash:!0}),this.$firebase.database().ref("trash").push({name:t.name,type:t.type,path:"file/".concat(t.id)}),this.getfile()}}}),f=l,d=a("2877"),u=Object(d["a"])(f,c,o,!1,null,null,null),p=u.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("div",{staticClass:"mb-5"},[r("h2",{staticClass:"mb-3"},[t._v("資料夾")]),r("div",{staticClass:"d-flex mb-3"},[t._m(0),r("label",{staticClass:"btn btn-uploadbg text-left px-3 py-2 mb-0",staticStyle:{cursor:"pointer"},attrs:{for:"folderfile"}},[r("input",{ref:"folderfile",staticStyle:{width:"0",height:"0",opacity:"0"},attrs:{type:"file",id:"folderfile"},on:{change:function(e){return t.uploadfile()}}}),r("img",{attrs:{src:a("2437"),width:"24px",height:"24px",alt:""}}),r("span",{staticClass:"ml-3"},[t._v("上傳檔案")])])]),t.breadcrumbary.length?r("nav",[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.folderchild(null)}}},[t._v("我的資料夾")])]),t._l(t.breadcrumbary,function(e,a){return r("li",{key:a,staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.folderparents(e,a+1)}}},[t._v(t._s(e.name))])])})],2)]):r("div",{staticClass:"d-flex flex-wrap folder-wrap text-center"},t._l(t.folder,function(e,i){return r("div",{key:i,staticClass:"d-flex flex-column p-3 file pos-wrap"},[r("div",{staticClass:"file-choose mb-3 d-flex justify-content-between"},[e.star?r("a",{staticClass:"file-menu-click",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.stared(e.name,e)}}},[r("img",{attrs:{src:a("bc32"),alt:""}})]):r("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.stared(e.name,e)}}},[r("img",{attrs:{src:a("74f0"),alt:""}})]),r("a",{staticClass:"file-menu-click",attrs:{href:"#"}},[r("img",{attrs:{src:a("890c"),width:"24px",height:"24px",alt:""}}),r("ul",{staticClass:"file-menu"},[r("li",[r("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.edit=e.id}}},[t._v("重新命名")])]),r("li",[r("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.throwtrash(e.name,e)}}},[t._v("垃圾桶")])])])])]),r("div",{staticClass:"pos-wrap"},[r("a",{staticClass:"folder-link",attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.parentspath=e.path,t.folderchild(e.name)}}}),r("i",{staticClass:"far fa-folder-open fa-5x"})]),e.id===t.edit?r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.editfoldername,expression:"editfoldername"}],staticClass:"form-control input-group-prepend",attrs:{type:"text"},domProps:{value:t.editfoldername},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.editfolder(e.name,e)},input:function(e){e.target.composing||(t.editfoldername=e.target.value)}}}),r("a",{staticClass:"btn btn-uploadbg",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.editfolder(e.name,e)}}},[t._v("更改")])]):r("span",[t._v(t._s(e.name))])])}),0),r("div",{staticClass:"d-flex flex-wrap folder-wrap"},t._l(t.childdata,function(e,i){return r("div",{key:i,staticClass:"d-flex flex-column file pos-wrap text-center"},[r("div",{staticClass:"text-center p-3"},[r("div",{staticClass:"file-choose mb-3 d-flex justify-content-between"},[e.star?r("a",{staticClass:"file-menu-click",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.stared(e.key,e)}}},[r("img",{attrs:{src:a("bc32"),alt:""}})]):r("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.stared(e.key,e)}}},[r("img",{attrs:{src:a("74f0"),alt:""}})]),r("a",{staticClass:"file-menu-click",attrs:{href:"#"}},[r("img",{attrs:{src:a("890c"),width:"24px",height:"24px",alt:""}}),r("ul",{staticClass:"file-menu"},[e.name?r("li",[r("a",{attrs:{href:e.fileUrl}},[t._v("下載")])]):t._e(),e.name?r("li",[r("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.edit=e.key,t.editname=e.name}}},[t._v("重新命名")])]):r("li",[r("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.edit=e.key,t.editname=e.key}}},[t._v("重新命名")])]),r("li",[r("a",{attrs:{href:"#"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.throwtrash(e.key,e)}}},[t._v("垃圾桶")])])])])]),r("div",{staticClass:"pos-wrap"},[e.name?t._e():r("a",{staticClass:"folder-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.folderchild(e.key,e.id)}}}),"pdf"===e.type?r("i",{staticClass:"fas fa-file-pdf fa-5x"}):"zip"===e.type||"rar"===e.type?r("i",{staticClass:"fas fa-file-archive fa-5x"}):r("i",{staticClass:"far fa-folder-open fa-5x"})])]),e.key===t.edit?r("div",{staticClass:"input-group"},[t.edit===t.editname?[r("input",{directives:[{name:"model",rawName:"v-model",value:t.editfoldername,expression:"editfoldername"}],staticClass:"form-control input-group-prepend",attrs:{type:"text"},domProps:{value:t.editfoldername},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.editfolder(e.key,null,e.id)},input:function(e){e.target.composing||(t.editfoldername=e.target.value)}}}),r("a",{staticClass:"btn btn-uploadbg",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.editfolder(e.key,null,e.id)}}},[t._v("更改")])]:[r("input",{directives:[{name:"model",rawName:"v-model",value:t.editname,expression:"editname"}],staticClass:"form-control input-group-prepend",attrs:{type:"text"},domProps:{value:t.editname},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.editfilename(e,e.path,e.key)},input:function(e){e.target.composing||(t.editname=e.target.value)}}}),r("a",{staticClass:"btn btn-uploadbg",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.editfilename(e,e.path,e.key)}}},[t._v("更改")])]],2):r("div",[e.name?r("span",[t._v(t._s(e.name))]):r("span",[t._v(t._s(e.key))])])])}),0),r("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content text-primary"},[t._m(1),r("div",{staticClass:"modal-body"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.addfoldername,expression:"addfoldername"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.addfoldername},on:{input:function(e){e.target.composing||(t.addfoldername=e.target.value)}}})]),r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.addfolder()}}},[t._v("新增")])])])])])])],1)},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"btn btn-uploadbg text-left px-3 py-2 mr-3",attrs:{"data-toggle":"modal","data-target":"#exampleModal"}},[r("img",{attrs:{src:a("e4ef"),width:"24px",height:"24px",alt:""}}),r("span",{staticClass:"ml-3"},[t._v("新增資料夾")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-uploadbg"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("新增資料夾")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],m=(a("6b54"),a("6762"),a("2fdb"),{props:["propsfolder","buspath"],data:function(){return{isLoading:!1,folderdata:[],folderchilddata:[],breadcrumb:!1,breadcrumbary:[],file:{},edit:"",editname:"",editfoldername:"",addfoldername:"",parentspath:""}},created:function(){this.getfolder()},computed:{folder:function(){return this.folderdata.filter(function(t){return"trash"!==t.key&&("star"!==t.key&&(void 0===t.trash&&(t.trash=!1),void 0===t.star&&(t.star=!1),!1===t.trash))}).sort(function(t,e){return e.star-t.star})},childdata:function(){return this.folderchilddata.filter(function(t){return"trash"!==t.key&&"star"!==t.key&&(void 0===t.trash&&(t.trash=!1),void 0===t.star&&(t.star=!1),void 0===t.type&&(t.sort=1e3),void 0===t.sort&&(t.sort=0),!1===t.trash)}).sort(function(t,e){return e.star-t.star}).sort(function(t,e){return e.sort-t.sort})}},watch:{propsfolder:function(){this.uploadfolder()}},methods:{addfolder:function(){if(""===this.addfoldername)return!1;for(var t="",e=0;e<this.breadcrumbary.length;e++)t=this.breadcrumbary[e].pathid?"".concat(t,"/").concat(this.breadcrumbary[e].pathid,"/").concat(this.breadcrumbary[e].name):"".concat(t,"/").concat(this.breadcrumbary[e].name);var a="",r="",i=Math.floor(new Date);""===this.parentspath?(a="folder/".concat(i),r="folder/".concat(i)):(a="".concat(this.parentspath).concat(t),r="".concat(this.parentspath).concat(t));var n={};n[this.addfoldername]={trash:!1},this.$firebase.database().ref(a).push(n),0===this.breadcrumbary.length?this.getfolder():this.updatechild(r),this.addfoldername,s()("#exampleModal").modal("hide")},editfolder:function(t,e,a){var r=this;if(""===this.editfoldername)return!1;for(var i="",n=0;n<this.breadcrumbary.length;n++)i=this.breadcrumbary[n].pathid?"".concat(i,"/").concat(this.breadcrumbary[n].pathid,"/").concat(this.breadcrumbary[n].name):"".concat(i,"/").concat(this.breadcrumbary[n].name);var s="",c="";""===this.parentspath?(s="".concat(e.path,"/").concat(e.name),c="".concat(e.path)):(s=t===a?"".concat(this.parentspath).concat(i,"/").concat(t):"".concat(this.parentspath).concat(i,"/").concat(a,"/").concat(t),c="".concat(this.parentspath).concat(i));var o={};this.$firebase.database().ref(s).on("value",function(t){return null!==t.val()&&(o[r.editfoldername]=t.val(),!0)});var l={};l[a]=o,this.$firebase.database().ref(s).remove(),this.$firebase.database().ref(c).update(o),0===this.breadcrumbary.length?this.getfolder():this.updatechild(c),this.editfoldername="",this.edit=""},editfilename:function(t,e,a){if(""===this.editname)return!1;for(var r="",i=0;i<this.breadcrumbary.length;i++)r=this.breadcrumbary[i].pathid?"".concat(r,"/").concat(this.breadcrumbary[i].pathid,"/").concat(this.breadcrumbary[i].name):"".concat(r,"/").concat(this.breadcrumbary[i].name);this.$firebase.database().ref("".concat(this.parentspath).concat(r,"/").concat(a)).update({name:this.editname}),this.updatechild("".concat(this.parentspath).concat(r)),this.edit="",this.editname=""},stared:function(t,e){for(var a=this,r="",i=0;i<this.breadcrumbary.length;i++)r=this.breadcrumbary[i].pathid?"".concat(r,"/").concat(this.breadcrumbary[i].pathid,"/").concat(this.breadcrumbary[i].name):"".concat(r,"/").concat(this.breadcrumbary[i].name);void 0===e.name&&(e.name=t),void 0===e.type&&(e.type="folder");var n="",s="";""===this.parentspath?(n="".concat(e.path,"/").concat(e.name),s="".concat(e.path)):(n=e.key===e.id?"".concat(this.parentspath).concat(r,"/").concat(t):void 0===e.id?"".concat(this.parentspath).concat(r,"/").concat(t):"".concat(this.parentspath).concat(r,"/").concat(e.id,"/").concat(t),s="".concat(this.parentspath).concat(r)),!1===!e.star?this.$firebase.database().ref("/star").on("value",function(t){if(null===t.val())return!1;var e=Object.values(t.val()),r=Object.keys(t.val());e.forEach(function(t,e){t.path===n&&a.$firebase.database().ref("/star/".concat(r[e])).remove()})}):this.$firebase.database().ref("/star").push({name:e.name,type:e.type,path:n}),this.$firebase.database().ref(n).update({star:!e.star}),0===this.breadcrumbary.length?this.getfolder():this.updatechild(s)},throwtrash:function(t,e){for(var a="",r=0;r<this.breadcrumbary.length;r++)a=this.breadcrumbary[r].pathid?"".concat(a,"/").concat(this.breadcrumbary[r].pathid,"/").concat(this.breadcrumbary[r].name):"".concat(a,"/").concat(this.breadcrumbary[r].name);void 0===e.name&&(e.name=t),void 0===e.type&&(e.type="folder");var i="",n="";""===this.parentspath?(i="".concat(e.path,"/").concat(e.name),n="".concat(e.path)):(i=e.key===e.id?"".concat(this.parentspath).concat(a,"/").concat(t):void 0===e.id?"".concat(this.parentspath).concat(a,"/").concat(t):"".concat(this.parentspath).concat(a,"/").concat(e.id,"/").concat(t),n="".concat(this.parentspath).concat(a)),this.$firebase.database().ref(i).update({trash:!0}),this.$firebase.database().ref("/trash").push({name:e.name,type:e.type,path:i}),0===this.breadcrumbary.length?this.getfolder():this.updatechild(n)},folderparents:function(t,e){var a=this;this.breadcrumbary.splice(e,this.breadcrumbary.length-e);for(var r="",i=0;i<this.breadcrumbary.length;i++)r=this.breadcrumbary[i].pathid?"".concat(r,"/").concat(this.breadcrumbary[i].pathid,"/").concat(this.breadcrumbary[i].name):"".concat(r,"/").concat(this.breadcrumbary[i].name);this.folderchilddata=[],this.$firebase.database().ref("".concat(this.parentspath).concat(r)).on("value",function(t){if(null===t.val())return!1;var e=Object.values(t.val()),r=Object.keys(t.val());return r.forEach(function(t,r){if(void 0===e[r].path){var i="",n="",s="";if("trash"===t)return!1;if("star"===t)return!1;t.includes("-")?(i=Object.keys(e[r])[0],s=Object.values(e[r])[0].star||!1,n=Object.values(e[r])[0].trash||!1):(i=t,s=e[r].star||!1,n=e[r].trash||!1),a.folderchilddata.push({key:i,id:t,star:s,trash:n})}else a.folderchilddata.push({name:e[r].name,type:e[r].type,fileUrl:e[r].fileUrl,path:e[r].path,star:e[r].star,trash:e[r].trash})}),!0})},folderchild:function(t,e){var a=this;t===e?this.breadcrumbary.push({name:t}):e?this.breadcrumbary.push({name:t,pathid:e}):this.breadcrumbary.push({name:t});for(var r="",i=0;i<this.breadcrumbary.length;i++)r=this.breadcrumbary[i].pathid?"".concat(r,"/").concat(this.breadcrumbary[i].pathid,"/").concat(this.breadcrumbary[i].name):"".concat(r,"/").concat(this.breadcrumbary[i].name);return this.folderchilddata=[],null===t?(this.breadcrumbary=[],this.parentspath="",this.getfolder(),!1):(this.$firebase.database().ref("".concat(this.parentspath).concat(r)).on("value",function(t){if(null===t.val())return!1;a.breadcrumb=!0;var e=Object.values(t.val()),r=Object.keys(t.val());r.forEach(function(t,r){if(void 0===e[r].path){var i="",n="",s="";if("trash"===t)return!1;if("star"===t)return!1;t.includes("-")?(i=Object.keys(e[r])[0],s=Object.values(e[r])[0].star||!1,n=Object.values(e[r])[0].trash||!1):(i=t,s=e[r].star||!1,n=e[r].trash||!1),a.folderchilddata.push({key:i,id:t,star:s,trash:n})}else a.folderchilddata.push({key:t,name:e[r].name,type:e[r].type,fileUrl:e[r].fileUrl,path:e[r].path,star:e[r].star,trash:e[r].trash})})}),!0)},updatechild:function(t){var e=this;return this.isLoading=!0,this.$firebase.database().ref(t).on("value",function(a){if(e.folderchilddata=[],null===a.val())return!1;var r=Object.values(a.val()),i=Object.keys(a.val());i.forEach(function(a,i){if(void 0===r[i].path){var n="",s="",c="";return"trash"!==a&&(a.includes("-")?(n=Object.keys(r[i])[0],c=Object.values(r[i])[0].star||!1,s=Object.values(r[i])[0].trash||!1):(n=a,c=r[i].star||!1,s=r[i].trash||!1),e.folderchilddata.push({key:n,id:a,star:c,trash:s}),!0)}e.folderchilddata.push({key:a,name:r[i].name,type:r[i].type,fileUrl:r[i].fileUrl,path:t,star:r[i].star,trash:r[i].trash})}),e.isLoading=!1}),!0},updatefile:function(){for(var t="",e=0;e<this.breadcrumbary.length;e++)t=this.breadcrumbary[e].pathid?"".concat(t,"/").concat(this.breadcrumbary[e].pathid,"/").concat(this.breadcrumbary[e].name):"".concat(t,"/").concat(this.breadcrumbary[e].name);var a="",r="";if(""===this.parentspath)return!1;a="".concat(this.parentspath).concat(t),r="".concat(this.parentspath).concat(t),this.file.path=a;var i=this.$firebase.database().ref(a);return i.push(this.file),0===this.breadcrumbary.length?this.getfolder():this.updatechild(r),!0},uploadfile:function(){var t=this;if(""===this.parentspath)return s()("#file").val(""),!1;var e=this.$firebase.storage().ref(),a=this.$refs.folderfile.files[0],r=a.type.split("/")[1];if("pdf"!==r&&"zip"!==r&&"rar"!==r)return alert("請暫時不要上傳不是PDF,zip,rar格式檔案"),s()("#file").val(""),!1;var i=e.child("file/".concat(a.name)).put(a);return i.on("state_changed",function(e){var a=(e.bytesTransferred/1e6).toFixed(1),r=(e.totalBytes/1e6).toFixed(1),i=e.bytesTransferred/e.totalBytes*234;t.$emit("uploadmsg",a,r,i,!0)},function(){},function(){i.snapshot.ref.getDownloadURL().then(function(e){t.file={fileUrl:e,name:a.name,type:a.type.split("/")[1],star:!1,trash:!1}}).then(function(){t.$emit("uploadmsg",0,0,0,!1),t.updatefile()})}),s()("#file").val(""),!0},getfolder:function(){var t=this;this.isLoading=!0,this.folderdata=[],this.$firebase.database().ref("/folder").on("value",function(e){if(null===e.val())return!1;var a=Object.values(e.val()),r=Object.keys(e.val());return r.forEach(function(e,r){var i="",n="",s="",c="";Object.keys(a[r])[0].includes("-")?(s=Object.values(Object.values(a[r])[0])[0].star,c=Object.values(Object.values(a[r])[0])[0].trash,i=Object.keys(Object.values(a[r])[0])[0],n="folder/".concat(e,"/").concat(Object.keys(a[r])[0])):(s=Object.values(a[r])[0].star,c=Object.values(a[r])[0].trash,i=Object.keys(a[r])[0],n="folder/".concat(e)),t.folderdata.push({path:n,id:e,name:i,star:s,trash:c})}),t.isLoading=!1,!0})},updatefolder:function(t){var e=this;t.forEach(function(t){var a=e.$firebase.database().ref("".concat(t.path));a.push({name:t.name,type:t.type,fileUrl:t.url,path:t.path,star:!1,trash:!1}),e.getfolder()})},uploadfolder:function(){var t=this,e=Array.prototype.slice.call(this.propsfolder),a=this.$firebase.storage().ref(),r=Math.floor(new Date).toString();try{e.forEach(function(t){var e=t.type.split("/")[1];if("pdf"!==e&&"zip"!==e&&"rar"!==e)throw new Error})}catch(i){return alert("請暫時不要上傳不是PDF,zip,rar格式檔案"),s()("#folder").val(""),!1}e.forEach(function(e){var i=[],n=a.child("folder/".concat(r,"/").concat(e.webkitRelativePath)).put(e);n.on("state_changed",function(e){var a=(e.bytesTransferred/1e6).toFixed(1),r=(e.totalBytes/1e6).toFixed(1),i=e.bytesTransferred/e.totalBytes*234;t.$emit("uploadmsg",a,r,i,!0)},function(){},function(){n.snapshot.ref.getDownloadURL().then(function(t){i.push({path:n.snapshot.ref.parent.location.path,name:e.name,type:e.type.split("/")[1],url:t})}).then(function(){t.$emit("uploadmsg",0,0,0,!1),t.updatefolder(i)})})}),s()("#folder").val("")}}}),v=m,g=Object(d["a"])(v,h,b,!1,null,null,null),y=g.exports,x={components:{uploadfile:p,uploadfolder:y},data:function(){return{flag:!0,filedata:[],uploadprogress:{progressshow:!1,progress:0,start:0,total:0},propsfolder:[],propsfile:[]}},watch:{$route:function(t,e){"/index"!==t.path?this.flag=!1:this.flag=!0},immediate:!0},methods:{uploadfile:function(){this.propsfile=this.$refs.file.files[0]},uploadfolder:function(){this.propsfolder=this.$refs.folder.files},uploadmsg:function(t,e,a,r){this.uploadprogress.start=t,this.uploadprogress.total=e,this.uploadprogress.progress=a,this.uploadprogress.progressshow=r}}},k=x,C=(a("320c"),Object(d["a"])(k,r,i,!1,null,null,null));e["default"]=C.exports},"890c":function(t,e,a){t.exports=a.p+"img/more.63797d0b.svg"},aae3:function(t,e,a){var r=a("d3f4"),i=a("2d95"),n=a("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==i(t))}},ac6a:function(t,e,a){for(var r=a("cadf"),i=a("0d58"),n=a("2aba"),s=a("7726"),c=a("32e9"),o=a("84f2"),l=a("2b4c"),f=l("iterator"),d=l("toStringTag"),u=o.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(p),b=0;b<h.length;b++){var m,v=h[b],g=p[v],y=s[v],x=y&&y.prototype;if(x&&(x[f]||c(x,f,u),x[d]||c(x,d,v),o[v]=u,g))for(m in r)x[m]||n(x,m,r[m],!0)}},b0c5:function(t,e,a){"use strict";var r=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},bc32:function(t,e,a){t.exports=a.p+"img/icon-star-active.8dbad50a.svg"},bfe5:function(t,e,a){t.exports=a.p+"img/icon-trash.ba89638b.svg"},c0f6:function(t,e,a){t.exports=a.p+"img/icon-folder-upload.394e17a5.svg"},d2c8:function(t,e,a){var r=a("aae3"),i=a("be13");t.exports=function(t,e,a){if(r(e))throw TypeError("String#"+a+" doesn't accept regex!");return String(i(t))}},e4ef:function(t,e,a){t.exports=a.p+"img/folder-upload-solid.befbc492.svg"}}]);
//# sourceMappingURL=chunk-74b9a46e.9216e9f5.js.map