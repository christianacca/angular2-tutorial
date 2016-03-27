import {RouteDefinition} from "angular2/router";

import {HeroListComponent}     from './hero-list.component';
import {HeroDetailComponent}     from './hero-detail.component';

export const HERO_ROUTES: RouteDefinition[] = [
    {path:'/heroes',        name: 'Heroes',       component: HeroListComponent},
    {path:'/hero/:id',        name: 'Hero',       component: HeroDetailComponent}
]