// Angular Imports
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './modules/home/home.component'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},

	{
		path: '**',
		pathMatch: 'full',
		redirectTo: '',
	},
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			initialNavigation: 'enabledBlocking',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
