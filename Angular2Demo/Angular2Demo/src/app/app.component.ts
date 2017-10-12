
import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    //template : `<h1> Hello {{name}} </h1>` // inline view template
    templateUrl: 'app/app.component.html'  // external view template, relative path    
})


export class AppComponent {
    pageHeader: string = null;//"Employee Details";
    imagePath: string = "https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
    // imagePath: string = "images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";

    isDisabled: boolean = true;

    firstName: string = "hitesh";
    lastName: string = "nageshwar";

    classesToApply: string = "colorClass italicsClass ";
    applyBoldClass: boolean = true;
    italicsClass: boolean = true;

    applyItalicClass: boolean = true;

    isBold: boolean = true;

    addClasses()
    {
        let classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.italicsClass
        };
        return classes;
    }

    getFullName() : string
    {
        return this.firstName + ' ' + this.lastName;
    }

    /// Event binding

    onclick(): void{
        console.log("Button clicked");
    }

    /// Two way binding
    name: string = "hitesh";


    //component life cycle
    userText: string = "life cycle";
}