import {Component} from "angular2/core";
import {TaggerSearch} from "./taggerSearch.component"

@Component({
    selector: "tagger-app",
    templateUrl: "./templates/app.html",
    directives: [TaggerSearch]
})
export class TaggerApp {
}