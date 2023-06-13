import { ProfessoresService } from './../professores.service';
import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  professor: Professor[] = [];
  teacher: Professor = {} as Professor;
  isEditing: boolean = false;
  constructor(private ProfessoresService: ProfessoresService) {
  }

  ngOnInit(): void {
    this.loadProfessores();
  }

  loadProfessores() {
    this.ProfessoresService.getTeachers().subscribe({
      next: data => this.professor = data
    });
  }

  onCleanEvent(){
    this.isEditing = false;
  }

  onSaveEvent(teacher: Professor) {
    if (this.isEditing) {
      this.ProfessoresService.update(teacher).subscribe(
        {
          next: () => {
            this.loadProfessores();
            this.isEditing = false;
          }

        }
      );
    }
    else {
      this.ProfessoresService.save(teacher).subscribe(
        {
          next: data => {
            this.professor.push(data)
          }
        }
      );
    }
}

edit(professor: Professor) {
  this.teacher = professor;
  this.isEditing = true;
}

delete(professor: Professor) {
  this.ProfessoresService.delete(professor).subscribe(
    {
      next: () => this.loadProfessores()
    }
  );
}
}
