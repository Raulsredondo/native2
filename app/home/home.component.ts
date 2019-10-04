import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    gaugeValue: number = 0;


    constructor() {
    }

    ngOnInit(): void {
        setInterval(() => {
            this.gaugeValue = (this.gaugeValue + 1) % 7;
        }, 500);
    }
}
