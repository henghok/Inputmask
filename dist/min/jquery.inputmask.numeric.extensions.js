(function(h){h.extend(h.inputmask.defaults.aliases,{decimal:{mask:"~",placeholder:"",repeat:10,greedy:!1,numericInput:!0,digits:"*",groupSeparator:",",radixPoint:".",groupSize:3,autoGroup:!1,postFormat:function(f,c,d,b){var a=f.slice();d||a.splice(c,0,"?");a=a.join("");if(b.autoGroup||d&&-1!=a.indexOf(b.groupSeparator))for(var a=a.replace(RegExp("\\"+b.groupSeparator,"g"),""),e=RegExp("([-+]?[\\d?]+)([\\d?]{"+b.groupSize+"})");e.test(a);)a=a.replace(e,"$1"+b.groupSeparator+"$2");f.length=a.length;
b=0;for(e=a.length;b<e;b++)f[b]=a.charAt(b);c=d?c:h.inArray("?",f);d||f.splice(c,1);return c},regex:{number:function(f,c,d,b){f=h.inputmask.escapeRegex.call(this,f);d=h.inputmask.escapeRegex.call(this,d);b=isNaN(b)?b:"{0,"+b+"}";return RegExp("^[+-]?(\\d+|\\d{1,"+c+"}(("+f+"\\d{"+c+"})?)+)("+d+"\\d"+b+")?$")}},onKeyDown:function(f,c){var d=h(this);if(f.keyCode==c.keyCode.TAB){var b=this._valueGet(),a=b.indexOf(c.radixPoint);if(-1!=a){for(var e=1;e<c.digits;e++)b[a+e]&&(b+="0");b!==d.val()&&d.val(b)}}else if(f.keyCode==
c.keyCode.DELETE||f.keyCode==c.keyCode.BACKSPACE)b=this._valueGet(),d=b.split(""),c.postFormat(d,0,!0,c),b=d.join(""),this._valueSet(b)},definitions:{"~":{validator:function(f,c,d,b,a){if(""==f)return!1;if(1==d&&"0"===c[0]&&/[\d-]/.test(f))return c[0]="",{pos:0};var e=b?c.slice(0,d):c.slice();e.splice(d+1,0,f);e=e.join("");a.autoGroup&&(e=e.replace(RegExp("\\"+a.groupSeparator,"g"),""));var g=a.regex.number(a.groupSeparator,a.groupSize,a.radixPoint,a.digits).test(e);if(!g&&(e+="0",g=a.regex.number(a.groupSeparator,
a.groupSize,a.radixPoint,a.digits).test(e),!g)){g=e.lastIndexOf(a.groupSeparator);for(i=e.length-g;3>=i;i++)e+="0";g=a.regex.number(a.groupSeparator,a.groupSize,a.radixPoint,a.digits).test(e);if(!g&&!b&&f==a.radixPoint&&(g=a.regex.number(a.groupSeparator,a.groupSize,a.radixPoint,a.digits).test("0"+e+"0")))return c[d]="0",d++,{pos:d}}return!1!=g&&!b?{pos:a.postFormat(c,d,!1,a)}:g},cardinality:1,prevalidator:null}},insertMode:!0,autoUnmask:!1},"non-negative-decimal":{regex:{number:function(f,c,d,b){f=
h.inputmask.escapeRegex.call(this,f);d=h.inputmask.escapeRegex.call(this,d);b=isNaN(b)?b:"{0,"+b+"}";return RegExp("^[+]?(\\d+|\\d{1,"+c+"}(("+f+"\\d{"+c+"})?)+)("+d+"\\d"+b+")?$")}},alias:"decimal"},integer:{regex:{number:function(){return/^([+-]?\d*)$/}},alias:"decimal"}})})(jQuery);
