import { Routes } from "@angular/router";

export const routes : Routes = [
    { path: 'heroes', loadChildren: 'src/app/feature/feature.module#FeatureModule'  }
]