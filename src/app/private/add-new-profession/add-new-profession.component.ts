import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-profession',
  imports: [ReactiveFormsModule],
  templateUrl: './add-new-profession.component.html',
  styleUrl: './add-new-profession.component.scss',
})
export class AddNewProfessionComponent {
  constructor(private http: HttpClient) {}
  addNewProfession = new FormGroup({
    profession_name: new FormControl(''),
    school: new FormControl(''),
    description: new FormControl(''),
  });
  addProfession() {
    this.http.post('', this.addNewProfession.value).subscribe();
  }
}
