import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.scss',
})
export class AddProjectComponent {
  addProject = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    address: new FormControl(''),
  });

  onSubmit() {
    console.log(this.addProject.value);
  }

  asdf() {
    console.log('sg');
  }
}
