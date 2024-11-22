import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  searchValue:string='';

  productName:string='';
  productPrice:number=0;
  productRating:string='';
  freedelivery:string=''

  products :any=[
    {productName:'pen',price:20,rating:3,freeDelivery:'False'},
    {productName:'Iphone',price:8000,rating:5,freeDelivery:'True'},
    {productName:'Shirt',price:3000,rating:4,freeDelivery:'True'},
    {productName:'Cap',price:4000,rating:5,freeDelivery:'True'},
    {productName:'Mobilecase',price:199,rating:3.5,freeDelivery:'False'},
    {productName:'Remote',price:600,rating:3,freeDelivery:'False'},
    {productName:'Watch',price:700,rating:4.5,freeDelivery:'True'},
    
  ];

  delete(i:number){
    this.products.splice(i,1)
  }
  search(){
   this.products= this.products.filter((product:any)=>
    product.productName.toLowerCase().includes(this.searchValue.toLowerCase()))
  }
  freeDelivery(){
   this.products= this.products.filter((product:any)=>product.freeDelivery=='True')
  }

  priceLowToHigh(){
  this.products=  this.products.sort((product1:any,product2:any)=>product1.price-product2.price)
  }

  priceHighToLow(){
  this.products=  this.products.sort((product1:any,product2:any)=>product2.price-product1.price)
  }

  ratingLowToHigh(){
   this.products= this.products.sort((product1:any,product2:any)=>product1.rating-product2.rating)
  }

  ratingHightoLow(){
 this.products=   this.products.sort((product1:any,product2:any)=>product2.rating-product1.rating)
  }

discount(){
 this.products= this.products.map((product:any)=>{
    product.price=product.price*0.5
    return product;
  })
}

deliveryCharges(){

  this.products.map((product:any)=>{
    
    if (product.freeDelivery=='False') {
      console.log("entered")
      product.price=  product.price+25;
      return product;
    } else {
      console.log(" else entered")
      // product.price=  product.price+0;
      // return product;
    }
   
  
  })

}

totalPrice(){
let totalPrice= this.products.reduce((sum:any,product:any)=>sum+product.price,0)
alert("total Price is ="+totalPrice)
}
totalCartItems(){
 alert("Total cart items are = "+this.products.length) 
}
addingProduct(){

 let product={
  productName:this.productName,
  price:this.productPrice,
  rating:this.productRating,
  freeDelivery:this.freedelivery
}
  this.products.unshift(product)

}

}
