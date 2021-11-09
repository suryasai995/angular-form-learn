import { Component, OnInit } from '@angular/core';
import { ServicesUserService } from '../services-user.service';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  public sSavedDetails='';
  public hiddeForm= false;
  public receviedForm:any ;
  public opstionErro=true;
  errormsg="";
constructor(private _userServices:ServicesUserService){
  // construtor is typescript method which call service which creation is done
}

  myFrom(formValues:any){
    console.log(this.userModel );
    this._userServices.postDetails(this.userModel).subscribe(
      //subscribe method is used to subscrib the observable from service
      data =>console.log('succefully!!!',data),
      //data is flat arrow method which hold the data sending to services
    error =>  this.errormsg= error.statusText
    //error method of flat arrow which is use to capture of error from service
    );
    this.sSavedDetails="New details are Saved";
    this.receviedForm= this.userModel;
    this.hiddeForm=true;
    
  }
  userModel=new User ('surya','surya@gmail.com','35454',54464,'','Male',
  'A.p','India','India',true);


courseList =['Angular','React','Vue','Bootstrap'];
  ngOnInit(): void {
  }

validationSelection(value :any){
  if(value === 'default'){
    this.opstionErro=true;
  }
  else 
  this.opstionErro=false;
}

}

