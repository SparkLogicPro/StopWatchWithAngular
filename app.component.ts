import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
 {
  title = 'stopwatch';
  hour:number =0;
  min:number = 0;
  sec:number = 0;
  interval;
  ngOnInit(){
  }


  start() {
      this.interval = setInterval(() => {
        if(this.sec <= 60) {
          this.sec++;
          if(this.sec==60){
                this.min++;
                if(this.min==60){
                  this.hour++;
                }
          }
        }
        else {
          this.sec = 0;
        }
      },100)
    }

    stop() {
      clearInterval(this.interval);
    }


  reset(){
 clearInterval(this.interval);
this.hour=0;
this.min=0;
this.sec=0;
  }
}
