import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

 allowedNewServer = false;
 serverCreationStatus = 'No Server is created';

  constructor() {
    // setTimeout(() => {
    //   this.allowedNewServer = true;
    // }, 5000);
   }


   onCreateServer(){
     this.serverCreationStatus = 'Server was created'
   }

   onRemoveServer() {
    this.serverCreationStatus = 'Server was removed'
   }

  ngOnInit(): void {
  }





}
