import {Component} from "angular2/core"
import {OnInit} from "angular2/core"

@Component({
    selector: "tagger-search",
    templateUrl:"./templates/taggerSearch.html"
})

export class TaggerSearch implements OnInit{
    name: string;

    ngOnInit() {
        this.name = "test";
    }
}