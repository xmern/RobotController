import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { BehaviorSubject } from 'rxjs';
import { HttpgatewayService } from '../httpgateway.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {
  motor1Speed = 0;
  motor2Speed = 0;

  private motor1SpeedSubject = new BehaviorSubject<number>(this.motor1Speed);
  private motor2SpeedSubject = new BehaviorSubject<number>(this.motor2Speed);

  disabled = false;
  max = 100;
  min = -100;
  showTicks = false;
  step = 10;
  thumbLabel = true;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';   
  constructor(private httpGateway : HttpgatewayService){
    this.motor1SpeedSubject.subscribe(speed => this.setSpeed1(speed));
    this.motor2SpeedSubject.subscribe(speed => this.setSpeed2(speed));    
  }
  seeMotor(){
    console.log(this.motor1Speed,this.motor2Speed)
  }  
  onSlider1Change(): void {
    this.motor1SpeedSubject.next(this.motor1Speed);
  }

  onSlider2Change(): void {
    this.motor2SpeedSubject.next(this.motor2Speed);
  }  
  stopMotor1(){
    this.motor1Speed = 0
    this.motor1SpeedSubject.next(this.motor1Speed);
  }
  stopMotor2(){
    this.motor2Speed = 0
    this.motor2SpeedSubject.next(this.motor2Speed);
  }
  setSpeed1(speed:any): void{
    this.httpGateway.get('speed?motor1Speed='+speed.toString()).subscribe(
      response => {
      },
      error => {
        console.error('', error.error);
        
      }
    );
    console.log('rrr')

  }

  setSpeed2(speed:any): void{
    this.httpGateway.get('speed?motor2Speed='+speed.toString()).subscribe(
      response => {
      },
      error => {
        console.error('', error.error);
        
      }
    );

  }
}
