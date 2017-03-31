var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
*/
/*
import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private feedUrl: string = 'https%3A%2F%2Fwww.becompany.ch%2Fen%2Fblog%2Ffeed.xml';
  private feeds: any;

  constructor (
    private feedService: FeedService
  ) {}

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
      .subscribe(
        feed => this.feeds = feed.items,
        error => console.log(error));
  }

}
*/
var core_1 = require('@angular/core');
var feed_service_1 = require('./feed.service');
var strip_html_tags_pipe_1 = require('./pipe/strip-html-tags.pipe');
// Add the RxJS Observable operators we need in this app.
require('./rxjs-operators');
var AppComponent = (function () {
    function AppComponent(feedService) {
        this.feedService = feedService;
        this.feedUrl = 'https%3A%2F%2Fwww.becompany.ch%2Fen%2Fblog%2Ffeed.xml';
        this.feeds = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.refreshFeed();
    };
    AppComponent.prototype.refreshFeed = function () {
        var _this = this;
        this.feeds.length = 0;
        // Adds 1s of delay to provide user's feedback.
        this.feedService.getFeedContent(this.feedUrl).delay(1000)
            .subscribe(function (feed) { return _this.feeds = feed.items; }, function (error) { return console.log(error); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [feed_service_1.FeedService, strip_html_tags_pipe_1.StripHtmlTagsPipe]
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map