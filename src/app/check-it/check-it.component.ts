// src/app/components/check-in/check-in.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as faceapi from 'face-api.js';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-check-in',
  templateUrl: './check-it.component.html',
  styleUrls: ['./check-it.component.css'],
  imports: [CommonModule]
})
export class CheckInComponent implements OnInit {
  @ViewChild('video', { static: false }) video!: ElementRef;
  @ViewChild('canvas', { static: false }) canvas!: ElementRef;
  message: string = '';

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    await faceapi.nets.tinyFaceDetector.loadFromUri('/assets/models');
    await faceapi.nets.faceRecognitionNet.loadFromUri('/assets/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/assets/models');
    this.startVideo();
  }

  startVideo() {
    navigator.mediaDevices.getUserMedia({ video: {} })
      .then(stream => {
        this.video.nativeElement.srcObject = stream;
      });
  }

  async onCaptureImage() {
    const videoElement = this.video.nativeElement;
    const canvasElement = this.canvas.nativeElement;
    const displaySize = { width: videoElement.width, height: videoElement.height };
    faceapi.matchDimensions(canvasElement, displaySize);

    const detections = await faceapi.detectAllFaces(videoElement, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();
    const resizedDetections = faceapi.resizeResults(detections, displaySize);

    if (resizedDetections.length === 0) {
      this.message = "No face detected. Please try again.";
      return;
    }

    const faceDescriptor = resizedDetections[0].descriptor;
    this.http.post('http://localhost:5000/validacion', { face_descriptor: faceDescriptor }).subscribe(
      (response: any) => this.message = response.message,
      (error: any) => this.message = error.error.message
    );
  }
}