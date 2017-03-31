/*import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtmlTags'
})
export class StripHtmlTagsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtmlTags'
})
export class StripHtmlTagsPipe implements PipeTransform {

  private tagBody: string = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
  private tagOrComment: RegExp = new RegExp(
    '<(?:'
      // Comment body.
    + '!--(?:(?:-*[^->])*--+|-?)'
      // Special "raw text" elements whose content should be elided.
    + '|script\\b' + this.tagBody + '>[\\s\\S]*?</script\\s*'
    + '|style\\b' + this.tagBody + '>[\\s\\S]*?</style\\s*'
      // Regular name
    + '|/?[a-z]'
    + this.tagBody
    + ')>',
    'gi');

  transform(value: string): string {
    let oldHtml;
    do {
      oldHtml = value;
      //console.warn('oldHtml');
      //console.warn(oldHtml);
      value = value.replace(this.tagOrComment, '');
      //console.warn('value');
      //console.warn(value);
    } while (value !== oldHtml);
    //console.warn('lastValue');
    //console.warn(value.replace(/</g, '&lt;'));
    return value.replace(/</g, '&lt;');
  }

}
