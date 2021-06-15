import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList:Array<any>=[]
  product:any;
  delete:boolean=false;

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.loadProduct();
  }
   loadProduct(){
      this.productservice.returnProduct().subscribe((res:any)=>{
    this.productList=res;
      })
}

ondelete(product:any){
  this.product= product;
  this.delete=true;
}
onyes(){
let i=this.productList.indexOf(this.product)
this.productList.splice(i,1)
this.delete=false;
}

onNo(){
this.delete=false;

}



}



// /dashboard

// /product-list
// /product-create
// /product-edit/:id
// /product-view/:id

// :this.product-list
// :this.product-create
// :this.product-edit/:id
// :this.product-view/:id

// https://startbootstrap.com/previews/sb-admin