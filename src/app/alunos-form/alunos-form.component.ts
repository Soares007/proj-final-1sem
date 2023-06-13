import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {
  formGroupStudent: FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private AlunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.formGroupStudent = formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      data: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      foto: ['', [Validators.required]],
      status: [false]
    });
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getStudentbyId(id);
  }
  getStudentbyId(id: number) {
    this.AlunosService.getClient(id).subscribe({
      next: data => {
        this.formGroupStudent.setValue(data);
        this.isEditing = true;
      }
    })
  }

  save() {
    this.submitted = true;
    if (this.formGroupStudent.valid) {
      if (this.isEditing) {
        this.AlunosService.update(this.formGroupStudent.value).subscribe({
          next: () => {
            this.router.navigate(['student']);
          }
        })
      }
      else {
        this.AlunosService.save(this.formGroupStudent.value).subscribe({
          next: () => {
            this.router.navigate(['student']);
          }
        })
      }
    }
  }
  cancel() {
    this.router.navigate(['student']);
  }

  get name(): any {
    return this.formGroupStudent.get("name");
  }
  get email(): any {
    return this.formGroupStudent.get("email");
  }
  get data(): any {
    return this.formGroupStudent.get("data");
  }
  get phone(): any {
    return this.formGroupStudent.get("phone");
  }
  get foto(): any {
    return this.formGroupStudent.get("foto");
  }
}
