// src/app/services/attendance.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  validateFace(faceDescriptor: Float32Array): Observable<any> {
    return this.http.post(`${this.apiUrl}/validacion`, { face_descriptor: Array.from(faceDescriptor) });
  }

  // Add more methods for break, check-out, and reports
}