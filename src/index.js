;!function(factory) {
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        var target = module['exports'] || exports;
        factory(target);
    } else if (typeof define === 'function' && define['amd']) {
        define(['exports'], factory);
    } else {
        factory(window['jsonstyle'] = {});
    }
}(function(jsonstyleExports){
    var jsonstyle = typeof jsonstyleExports !== 'undefined' ? jsonstyleExports : {};
    var parser = {
        to_ : function(json){
            return JSON.parse(json.replace(/\w+['"]\s?\:/g,function(a){
                return a.replace(/_{1,}/,'_').replace(/^[A-Z]/,function(b){
                    return b.toLowerCase()
                }).replace(/[a-z\d_][A-Z]+/g,function(c){
                    return c.replace(/[_A-Z]+/,function(d){
                        return /[A-Z]{2,}/.test(d)
                        ? '_' + d.toLowerCase().split('').join('_')
                        : /_/.test(d) ? d.toLowerCase() : '_' + d.toLowerCase()
                    })
                })
            }))
        },
        toCamelCase : function(json){
            return JSON.parse(json.replace(/\w+['"]\s?\:/g,function(a){
                let upper = a.match(/[A-Z]/g)
                return upper && upper.length == a.length - 2 ?
                a : a.replace(/^[A-Z]{1}/,function(b){
                    return b.toLowerCase()
                }).replace(/[_]+[\w]/g,function(c){
                    return c.replace(/[_]+/,'').toUpperCase()
                })
            }))
        },
        toJsonStr : function(obj){
            var jsonstr = obj
            if(typeof obj === 'object'){
                jsonstr = JSON.stringify(obj)
            }
            return jsonstr
        }
    }

    jsonstyle.toCamelCase = function(json){
        return parser.toCamelCase(parser.toJsonStr(json))
    }
    jsonstyle.c = function(json){
        return this.toCamelCase(json)
    }
    jsonstyle.camelCase = function(json){
        return this.toCamelCase(json)
    }
    jsonstyle.to_ = function(json){
        return parser.to_(parser.toJsonStr(json))
    }
    jsonstyle._ = function(json){
        return this.to_(json)
    }
    jsonstyle.underline = function(json){
        return this.to_(json)
    }
})
