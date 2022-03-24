import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

 allowedNewServer = false;
 serverCreationStatus = 'No Server is created';
 serverName = 'TestServer';
 serverCreated = false ;

  constructor() {
    // setTimeout(() => {
    //   this.allowedNewServer = true;
    // }, 5000);
   }


   onCreateServer(){
     this.serverCreated = true ;
     this.serverCreationStatus = this.serverName + ' Is created';
   }

   onRemoveServer() {
    this.serverCreationStatus = this.serverName + ' Is removed';
   }

   onUpdateServerName(event : any){
    this.serverName = event.target.value;
    // this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
   }

  ngOnInit(): void {
  }





}
