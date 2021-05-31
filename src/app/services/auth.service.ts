import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import {firebase} from '@firebase/app';
import '@firebase/auth';
import { AngularFireAuth} from '@angular/fire/auth';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { User } from './../shared/user.model';

@Injectable({ providedIn: 'root'})

export class AuthService {

    user$: Observable<any>;

    //inject dependencies
    constructor(

        private afAuth : AngularFireAuth,
        private afs : AngularFirestore,
        private router : Router

    ) { 
        this.user$ = this.afAuth.authState
    }

    async singIn() {
        
    }
}
