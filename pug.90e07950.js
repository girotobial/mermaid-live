parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NCfr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.language=exports.conf=void 0;var e={comments:{lineComment:"//"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:'"',close:'"',notIn:["string","comment"]},{open:"'",close:"'",notIn:["string","comment"]},{open:"{",close:"}",notIn:["string","comment"]},{open:"[",close:"]",notIn:["string","comment"]},{open:"(",close:")",notIn:["string","comment"]}],folding:{offSide:!0}};exports.conf=e;var t={defaultToken:"",tokenPostfix:".pug",ignoreCase:!0,brackets:[{token:"delimiter.curly",open:"{",close:"}"},{token:"delimiter.array",open:"[",close:"]"},{token:"delimiter.parenthesis",open:"(",close:")"}],keywords:["append","block","case","default","doctype","each","else","extends","for","if","in","include","mixin","typeof","unless","var","when"],tags:["a","abbr","acronym","address","area","article","aside","audio","b","base","basefont","bdi","bdo","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","datalist","dd","del","details","dfn","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","keygen","kbd","label","li","link","map","mark","menu","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strike","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","tracks","tt","u","ul","video","wbr"],symbols:/[\+\-\*\%\&\|\!\=\/\.\,\:]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/^(\s*)([a-zA-Z_-][\w-]*)/,{cases:{"$2@tags":{cases:{"@eos":["","tag"],"@default":["",{token:"tag",next:"@tag.$1"}]}},"$2@keywords":["",{token:"keyword.$2"}],"@default":["",""]}}],[/^(\s*)(#[a-zA-Z_-][\w-]*)/,{cases:{"@eos":["","tag.id"],"@default":["",{token:"tag.id",next:"@tag.$1"}]}}],[/^(\s*)(\.[a-zA-Z_-][\w-]*)/,{cases:{"@eos":["","tag.class"],"@default":["",{token:"tag.class",next:"@tag.$1"}]}}],[/^(\s*)(\|.*)$/,""],{include:"@whitespace"},[/[a-zA-Z_$][\w$]*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":""}}],[/[{}()\[\]]/,"@brackets"],[/@symbols/,"delimiter"],[/\d+\.\d+([eE][\-+]?\d+)?/,"number.float"],[/\d+/,"number"],[/"/,"string",'@string."'],[/'/,"string","@string.'"]],tag:[[/(\.)(\s*$)/,[{token:"delimiter",next:"@blockText.$S2."},""]],[/\s+/,{token:"",next:"@simpleText"}],[/#[a-zA-Z_-][\w-]*/,{cases:{"@eos":{token:"tag.id",next:"@pop"},"@default":"tag.id"}}],[/\.[a-zA-Z_-][\w-]*/,{cases:{"@eos":{token:"tag.class",next:"@pop"},"@default":"tag.class"}}],[/\(/,{token:"delimiter.parenthesis",next:"@attributeList"}]],simpleText:[[/[^#]+$/,{token:"",next:"@popall"}],[/[^#]+/,{token:""}],[/(#{)([^}]*)(})/,{cases:{"@eos":["interpolation.delimiter","interpolation",{token:"interpolation.delimiter",next:"@popall"}],"@default":["interpolation.delimiter","interpolation","interpolation.delimiter"]}}],[/#$/,{token:"",next:"@popall"}],[/#/,""]],attributeList:[[/\s+/,""],[/(\w+)(\s*=\s*)("|')/,["attribute.name","delimiter",{token:"attribute.value",next:"@value.$3"}]],[/\w+/,"attribute.name"],[/,/,{cases:{"@eos":{token:"attribute.delimiter",next:"@popall"},"@default":"attribute.delimiter"}}],[/\)$/,{token:"delimiter.parenthesis",next:"@popall"}],[/\)/,{token:"delimiter.parenthesis",next:"@pop"}]],whitespace:[[/^(\s*)(\/\/.*)$/,{token:"comment",next:"@blockText.$1.comment"}],[/[ \t\r\n]+/,""],[/<!--/,{token:"comment",next:"@comment"}]],blockText:[[/^\s+.*$/,{cases:{"($S2\\s+.*$)":{token:"$S3"},"@default":{token:"@rematch",next:"@popall"}}}],[/./,{token:"@rematch",next:"@popall"}]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,{token:"comment",next:"@pop"}],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]],string:[[/[^\\"'#]+/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}],[/@escapes/,{cases:{"@eos":{token:"string.escape",next:"@popall"},"@default":"string.escape"}}],[/\\./,{cases:{"@eos":{token:"string.escape.invalid",next:"@popall"},"@default":"string.escape.invalid"}}],[/(#{)([^}]*)(})/,["interpolation.delimiter","interpolation","interpolation.delimiter"]],[/#/,"string"],[/["']/,{cases:{"$#==$S2":{token:"string",next:"@pop"},"@default":{token:"string"}}}]],value:[[/[^\\"']+/,{cases:{"@eos":{token:"attribute.value",next:"@popall"},"@default":"attribute.value"}}],[/\\./,{cases:{"@eos":{token:"attribute.value",next:"@popall"},"@default":"attribute.value"}}],[/["']/,{cases:{"$#==$S2":{token:"attribute.value",next:"@pop"},"@default":{token:"attribute.value"}}}]]}};exports.language=t;
},{}]},{},["NCfr"], null)