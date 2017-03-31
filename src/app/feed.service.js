var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/*
import { Injectable } from '@angular/core';

@Injectable()
export class FeedService {

  constructor() { }

}
*/
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var FeedService = (function () {
    function FeedService(http) {
        this.http = http;
        this.rssToJsonServiceBaseUrl = 'https://rss2json.com/api.json?rss_url=';
    }
    FeedService.prototype.getFeedContent = function (url) {
        return this.http.get(this.rssToJsonServiceBaseUrl + url)
            .map(this.extractFeeds)
            .catch(this.handleError);
    };
    FeedService.prototype.extractFeeds = function (res) {
        var feed = res.json();
        return feed || {};
    };
    FeedService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    FeedService = __decorate([
        core_1.Injectable()
    ], FeedService);
    return FeedService;
})();
exports.FeedService = FeedService;
//# sourceMappingURL=feed.service.js.map