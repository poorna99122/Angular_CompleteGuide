import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

 allowedNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowedNewServer = true;
    }, 5000);
   }

  ngOnInit(): void {
  }





}
