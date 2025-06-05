
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as faceapi from 'face-api.js';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  @ViewChild('video') video!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  message: string = '';

  constructor(private attendanceService: AttendanceService) { }

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
    this.attendanceService.validateFace(faceDescriptor).subscribe(
      response => this.message = response.message,
      error => this.message = error.error.message
    );
  }
}