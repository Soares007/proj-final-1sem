import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Professor } from '../professor';

@Component({
  selector: 'app-professores-form',
  templateUrl: './professores-form.component.html',
  styleUrls: ['./professores-form.component.css']
})
export class ProfessoresFormComponent {
  courseOptions: string[] = ['Análise e desenvolvimento de Sistemas', 'Gestão Empresarial', 'Design de Interiores', 'Meio Ambiente'];

  @Input()
  teacher: Professor = {} as Professor;

  @Output()
  saveEvent = new EventEmitter<Professor>();
  @Output()
  cleanEvent = new EventEmitter<void>();

 formGroupTeacher: FormGroup;
 submitted: boolean = false;
  constructor(private formBuilder: FormBuilder

  ) {
    this.formGroupTeacher = formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      foto: ['', [Validators.required]],
      course: ['', [Validators.required]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.formGroupTeacher.setValue(this.teacher);
  }

  save() {
    this.submitted = true;
    if (this.formGroupTeacher.valid) {
      this.saveEvent.emit(this.formGroupTeacher.value);
      this.formGroupTeacher.reset();
      this.submitted = false;
    }
  }

  limparDados() {
    this.cleanEvent.emit();
    this.formGroupTeacher.reset();
    this.submitted = false;
  }

  get name(): any {
    return this.formGroupTeacher.get("name");
  }
  get email(): any {
    return this.formGroupTeacher.get("email");
  }
  get phone(): any {
    return this.formGroupTeacher.get("phone");
  }
  get foto(): any {
    return this.formGroupTeacher.get("foto");
  }
  get course(): any {
    return this.formGroupTeacher.get("course");
}
}
