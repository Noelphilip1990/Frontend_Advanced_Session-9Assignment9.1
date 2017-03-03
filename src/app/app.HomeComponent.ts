import {Component} from '@angular/core';
import {Header} from './app.HeaderComponent'
import {Contain} from './app.ContainComponent'
import {Footer} from './app.FooterComponent'
import {Logger} from './LoggerService'
@Component({
selector:'home',
template:`
<h2>Hello im home component</h2>
<header></header>
<contain></contain>
<footer></footer>
`,
providers: [Logger]
})
export class Home
{

	constructor(private logger:Logger){
	logger.getLog("This is log is in home");
	}
}