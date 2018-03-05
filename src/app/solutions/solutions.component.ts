import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

 /* String title_solutions,detail_item_solutions;
  String option_1_item;
  String option_2_item;
  String option_3_item;
*/


  title_solutions = "Gaming";
  detail_item_solutions = "End-to-end solutions that enable businesses to develop advanced and unique games with a better buit-in user experience and lower response time.";
  option_1_item = "Browser Gaming Solution";
  option_2_item = "Mobile Gaming Solution";
  option_3_item = "Cloud Gaming Security";

  constructor() { 
    
  }
  
  ngOnInit() {
    
  }

  setInfo(item_solutions){
    
    switch (item_solutions) {
    
      case 0:
        this.title_solutions = "Gaming";
        this.detail_item_solutions = "End-to-end solutions that enable businesses to develop advanced and unique games with a better buit-in user experience and lower response time.";
        this.option_1_item = "Browser Gaming Solution";
        this.option_2_item = "Mobile Gaming Solution";
        this.option_3_item = "Cloud Gaming Security";
        break;

      case 1:
        this.title_solutions = "Web Hosting";
        this.detail_item_solutions = "Helps empower businesses through a robust and resilient infrastructure for a seamless customer experience";
        this.option_1_item = "Web Application Hosting";
        this.option_2_item = "Accelerated Content Delivery";
        this.option_3_item = "Multi-region Deployment";
        break;

      case 2:
        this.title_solutions = "E-commerce";
        this.detail_item_solutions = "A suite of cloud computing and big data services that help enterprises quickly build and smoothly run their own e-commerce platform.";
        this.option_1_item = "For Small Enterprises";
        this.option_2_item = "For Medium Enterprises";
        this.option_3_item = "For Large Enterprises";
        break;


      case 3:
        this.title_solutions = "Multimedia";
        this.detail_item_solutions = "An array of powerful multimedia services providing massive cloud storage and efficient content delivery for a smooth and rich user experience."
        this.option_1_item = "Video Monitoring";
        this.option_2_item = "Online Video";
        this.option_3_item = "Live-streaming";
        break;

      default:
        break;
    }

  }

}
