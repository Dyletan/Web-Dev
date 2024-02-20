import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = [...products];

  share(id: number) {
    const url ="https://localhost:4200/products/" + id;
    const message = "Share our product! Who would you like to share it to";
    const shareUrl = `https://telegram.me/share/url?url=${url}&text=${message}`;

    window.location.href = shareUrl;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
