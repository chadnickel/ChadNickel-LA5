import { Routes, RouterModule } from '@angular/router';
import { homedir } from 'os';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { MainContentComponent } from './main-content/main-content.component';
import { CoursesComponent } from './courses/courses.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent

    },
    {
        path: 'courses',
        component: CoursesComponent
    }
];

export const AppRoutes = RouterModule.forRoot(routes);
