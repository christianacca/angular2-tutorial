import {Component, OnInit} from "angular2/core";
import {NgForm}    from 'angular2/common';
import {RouteParams, Router} from  'angular2/router';

import { Crisis }    from './crisis';
import {CrisisService} from "./crisis.service";

@Component({
  template: `
    <p> {{model.name}}</p>
    <button class="btn btn-default" (click)="gotoCrisisList()">Back</button>
  ` 
})
export class CrisisDetailComponent implements OnInit {
    constructor(private _routeParams: RouteParams, private _router: Router, private crisisService: CrisisService) {}
    model = new Crisis(18, 'Dr IQ');
    submitted = false;
    onSubmit() { this.submitted = true; }
    gotoCrisisList(){
        var params = {
            id: this.model && this.model.id
        };
        this._router.navigate(["CrisisCenter", params]);
    }
    ngOnInit(){
        var id = parseInt((this._routeParams.get("id") || "1"), 10);
        this.crisisService.get(id).then(crisis => this.model = crisis);
    }
}