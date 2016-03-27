import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from "angular2/router";

import {CrisisService} from "./crisis.service";
import {Crisis} from "./crisis";

@Component({
  template: `
    <p>Get your crisis here</p>
    <ul>
        <li [class.selected]="crisis.id === selectedId" *ngFor="#crisis of crisises" (click)="openCrisis(crisis)">{{crisis.name}}</li>
    </ul>
    `,
    styles: [`
        .selected { font-style: italic}
    `]
})
export class CrisisListComponent implements OnInit {
    constructor(private crisisService: CrisisService, private router: Router, private routeParams: RouteParams){}
    crisises: Crisis[]
    selectedId: number;
    ngOnInit(){
        this.selectedId = +this.routeParams.get("id");
        this.crisisService.getAll().then(crisises => {
            this.crisises = crisises
        });
    }
    openCrisis(crisis: Crisis){
        this.router.navigate(["CrisisDetail", { id: crisis.id }])
    }
 }