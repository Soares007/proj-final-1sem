import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  alunos: Aluno[] = [];
  constructor(private AlunosService: AlunosService
  ) {}


  ngOnInit(): void {
    this.loadAlunos();
  }

  loadAlunos() {
    this.AlunosService.getStudents().subscribe({
      next: data => this.alunos = data
    });
  }
}
