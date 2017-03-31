var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
var core_1 = require('@angular/core');
var FeedCardComponent = (function () {
    function FeedCardComponent() {
    }
    FeedCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], FeedCardComponent.prototype, "feed");
    FeedCardComponent = __decorate([
        core_1.Component({
            selector: 'app-feed-card',
            templateUrl: './feed-card.component.html',
            styleUrls: ['./feed-card.component.css']
        })
    ], FeedCardComponent);
    return FeedCardComponent;
})();
exports.FeedCardComponent = FeedCardComponent;
//# sourceMappingURL=feed-card.component.js.map