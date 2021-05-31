import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(  private firestore: AngularFirestore, 
                private router: Router) { }

  ngOnInit(): void {
  }

    onLogin() {
        this.router.navigateByUrl('/index');
    }

}

