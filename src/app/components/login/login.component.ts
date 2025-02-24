
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj : any = {
    // username : '',
    // password : ''
    EmailId : '',
    Password : ''
  };

 router  = inject(Router);
 constructor(private http : HttpClient){

 }

  onLogin(){

  this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.userObj).subscribe((res : any) => {
    if(res.result){
      alert('Login Success!');
      localStorage.setItem('loginUser',JSON.stringify(res.data));
      this.router.navigateByUrl('add-emp')
    }
    else{
      alert(res.message)
    }
  })
    // if(this.userObj.username === 'admin'  && this.userObj.password === '12345'){
    //   alert('Login Success!');
    // this.router.navigateByUrl('add-emp')
    // }
    // else{
    //   alert('Wrong Credentials!')
    // }
  }
}
