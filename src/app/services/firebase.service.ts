import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService<T extends { id?: string}> {

  constructor(private afs: AngularFirestore) { }

  async add(collectionName: string, data: T, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }
  
  get(collectionName: string): Observable<T[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('contactName', 'asc');
      return query;
    }).valueChanges() as Observable<T[]>;
  }

  getById(collectionName: string, id: string): Observable<any> {
    return this.afs.collection(collectionName).doc(id).valueChanges();
  }

  
  weakAdd(collectionName: string, data: T) {
    return this.afs.collection(collectionName).add(data);
  }

  update(collectionName: string, id:string, data: T) {
    return this.afs.collection(collectionName).doc(id).update(data);
  }

  delete(collectionName: string, id:string) {
    return this.afs.collection(collectionName).doc(id).delete();
  }

    /* szűrés rendezés get alapján
    get(collectionName: string, limit?: any, orderBy?: any, startAt?: any, parent?: string, parentPath = 'parentId', opStr = '==') {
    return this.afs.collection(collectionName,
      ref => {
        let query: CollectionReference | Query = ref;
        if (parent) {
          query = query.where(parentPath, opStr as any, parent);
        }
        if (limit) {
          query = query.limit(limit);
        }
        if (orderBy?.active && orderBy?.direction) {
          query = query.orderBy(orderBy.active, orderBy.direction);
        } else {
          query = query.orderBy('id');
        }
        if (startAt) {
          query = query.startAt(startAt[orderBy?.active ? orderBy.active : 'id']);
        }
        return query;
      }
    ).valueChanges();
  } */

}
