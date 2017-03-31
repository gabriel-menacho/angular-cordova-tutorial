var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/*import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtmlTags'
})
export class StripHtmlTagsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}*/
var core_1 = require('@angular/core');
var StripHtmlTagsPipe = (function () {
    function StripHtmlTagsPipe() {
        this.tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
        this.tagOrComment = new RegExp('<(?:'
            + '!--(?:(?:-*[^->])*--+|-?)'
            + '|script\\b' + this.tagBody + '>[\\s\\S]*?</script\\s*'
            + '|style\\b' + this.tagBody + '>[\\s\\S]*?</style\\s*'
            + '|/?[a-z]'
            + this.tagBody
            + ')>', 'gi');
    }
    StripHtmlTagsPipe.prototype.transform = function (value) {
        var oldHtml;
        do {
            oldHtml = value;
            //console.warn('oldHtml');
            //console.warn(oldHtml);
            value = value.replace(this.tagOrComment, '');
        } while (value !== oldHtml);
        //console.warn('lastValue');
        //console.warn(value.replace(/</g, '&lt;'));
        return value.replace(/</g, '&lt;');
    };
    StripHtmlTagsPipe = __decorate([
        core_1.Pipe({
            name: 'stripHtmlTags'
        })
    ], StripHtmlTagsPipe);
    return StripHtmlTagsPipe;
})();
exports.StripHtmlTagsPipe = StripHtmlTagsPipe;
//# sourceMappingURL=strip-html-tags.pipe.js.map