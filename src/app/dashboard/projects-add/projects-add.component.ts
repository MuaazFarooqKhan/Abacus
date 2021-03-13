import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-projects-add',
  templateUrl: './projects-add.component.html',
  styleUrls: ['./projects-add.component.scss']
})
export class ProjectsAddComponent implements OnInit {

  form = new FormGroup({
    project_name: new FormControl('', [
      // Validators.required
    ]),
    project_description: new FormControl('', [
      // Validators.required
    ]),
    projects: new FormArray([
      new FormGroup({
        supervisor: new FormControl('', []),
        purchaser: new FormControl('', [])
      })
    ]),
  })

  get projects(){
    return this.form.get('projects') as FormArray
  }
  
  constructor() { }

  ngOnInit() {
  
  }

  removeProject(project: FormControl){
    let index = this.projects.controls.indexOf(project)
    this.projects.removeAt(index)
  }

  addProject(){
    this.projects.push(
      new FormGroup({
        supervisor: new FormControl('', []),
        purchaser: new FormControl('', [])
      })
    )
  }

}
