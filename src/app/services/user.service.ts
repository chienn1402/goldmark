import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }

  getUsers(): Observable<User[]> {
    return this.afs.collection<User>('users').valueChanges({ id: 'id' });
  }

  addUser(user: User): any {
    return this.afs.collection<User>('users').add(user);
  }
}
