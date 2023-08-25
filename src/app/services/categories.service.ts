import { Injectable } from '@angular/core';
// AngularFirestore is a service
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private afs: AngularFirestore) {}

  saveData(data: any) {
    this.afs
      .collection('categories')
      .add(data)
      .then((docRef) => {
        console.log(docRef);
      })

      .catch((err) => {
        console.log(err);
      });
  }
}

//   // 1st level category
//   this.afs
//     .collection('categories')
//     .add(categoryData)
//     .then((docRef) => {
//       // console.log(docRef);
//       // 2nd level category within a category
//       // ---------Path url method------------
//       // this.afs
//       //     .doc(`categories/${docRef.id}`)
//       //     .collection('subcategories')
//       //     .add(categoryData)
//       //     .then((docRef1) => {
//       //       console.log(docRef1);
//       //     });  We need the last 'collection' to attach the add function
//       // ----------Path url method-------------
//       this.afs
//         .collection('categories')
//         .doc(docRef.id)
//         .collection('subcategories')
//         .add(categoryData)
//         .then((docRef1) => {
//           console.log(docRef1);
//         });
//       // 2nd level category within a category
//       this.afs
//         .doc(`categories/${docRef.id}`)
//         .collection('subcategories')
//         .add(categoryData)
//         .then((docRef1) => {
//           console.log(docRef1);
//         });

//       this.afs
//         .collection('categories')
//         .doc(docRef.id)
//         .collection('subcategories')
//         .doc(docRef.id)
//         .collection('subsubcategories')
//         .add(categoryData)
//         .then((docRef2) => {
//           console.log('Second level Subcategory Saved Successfully');
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
