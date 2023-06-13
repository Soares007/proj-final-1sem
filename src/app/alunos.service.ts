import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  url = "http://localhost:3000/alunos";
  constructor(private http: HttpClient) { }

  getStudents(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.url);
  }
  getStudent(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.url}/${id}`);
  }

  save(aluno: Aluno): Observable<Aluno>{
  return this.http.post<Aluno>(this.url, aluno);
  }

  update(aluno: Aluno): Observable<Aluno>{
    return this.http.put<Aluno>(`${this.url}/${aluno.id}`, aluno);
    }

  delete(aluno: Aluno): Observable<void>{
    return this.http.delete<void>(`${this.url}/${aluno.id}`);
    }

}
