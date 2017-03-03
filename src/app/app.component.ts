import { Component } from '@angular/core';
import { HighlightDirective } from './Highlight';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { usernameMatcher, passwordMatcher } from './custom.validator';
import {Home} from './app.HomeComponent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})

export class AppComponent {
	title = 'Assignament 9.1!';
	
	

	
	
	constructor()
	{
		
	}
	
	submitForm(form:any)
	{
		console.log("values:");
		console.log(form);
	}
	

	
 


}
