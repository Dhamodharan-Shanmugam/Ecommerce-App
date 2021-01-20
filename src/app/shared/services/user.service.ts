import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Cart } from "../../modules/cart/models/cart.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    $userActive: Subject<boolean> = new BehaviorSubject(false);
    userName: string;
    password: string;
    billingInformation;
    cardInformation;

    cart: Cart[] = [];

    constructor() {
        // localStorage.setItem('billingInformation', JSON.stringify({ address: "8/332, Bharathi Nagar", city: "Sathyamangalam", country: "India", email: "dharandhamu91@gmail.com", firstName: "Dhamodharan", lastName: "Shanmugam", phone: 8523989100, zipcode: 638401 }));
        // localStorage.setItem('cardInformation',JSON.stringify({cardNumber: "1111333355557777",cvv: "123",expireDate: "02/2025",fullName: "Dhamodharan Shanmugam"}));
        // localStorage.setItem('userName', 'dhamu');
        // localStorage.setItem('password', '1234');
        // localStorage.setItem('cart',JSON.stringify(this.cart));
    }

    userValidation(data) {

        // var cart: Cart[] = [{
        //     id: 1111, quantity: 2,
        //     product: {
        //         description: "The orange is the fruit of various citrus species in the family Rutaceae; it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange",
        //         discount: 20,
        //         id: 1111,
        //         imageUrl: "/assets/images/food/orange.PNG",
        //         name: "orange",
        //         price: 100,
        //         type: "fruits",
        //         ratings: 4
        //     }
        // },
        // {
        //     id: 9999, quantity: 5,
        //     product: {
        //         description: "Chicken is the most common type of poultry in the world. Owing to the relative ease and low cost of raising them in comparison to animals such as cattle or hogs, chickens have become prevalent throughout the cuisine of cultures around the world, and their meat has been variously adapted to regional tastes",
        //         discount: 20,
        //         id: 9999,
        //         imageUrl: "/assets/images/food/chicken.PNG",
        //         name: "chicken",
        //         price: 500.46,
        //         type: "chicken",
        //         ratings: 2
        //     }
        // },
        // {
        //     id: 1116, quantity: 2,
        //     product: {
        //         description: "The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness",
        //         discount: 9,
        //         id: 1116,
        //         imageUrl: "/assets/images/food/strawberry.PNG",
        //         name: "strawberry",
        //         price: 550.34,
        //         type: "fruits",
        //         ratings: 5
        //     }
        // }
        // ]
        if (localStorage.getItem('userName') === data['username'] && localStorage.getItem('password') === data['password']) {
            this.userName = localStorage.getItem('userName');
            this.password = localStorage.getItem('data.password');
            // localStorage.setItem(this.userName, JSON.stringify(cart));
            this.getUserdetails(this.userName);
            this.$userActive.next(true);
            return true;
        }
        else {
            return false
        }
    }

    getUserdetails(userName: string) {
        if (localStorage.getItem(userName) == null) {
            this.cart = [];
        }
        else {
            this.cart = JSON.parse(localStorage.getItem(userName));
        }
    }

    getCart(): Cart[] {
        return this.cart;
    }

    signOut() {
        this.userName = null;
        this.password = null;
        this.$userActive.next(false);
        this.cart = [];
    }

    setBillingInformation(data) {
        localStorage.setItem('billingInformation', JSON.stringify(data));
    }

    setCardInformation(data) {
        localStorage.setItem('cardInformation', JSON.stringify(data));
    }

    getBillingInformation() {
        return this.billingInformation = JSON.parse(localStorage.getItem('billingInformation'));
    }

    getCardInformation() {
        return this.cardInformation = JSON.parse(localStorage.getItem('cardInformation'));
    }

    deteteBillingAndCardInformation() {
        localStorage.removeItem('billingInformation');
        localStorage.removeItem('cardInformation');
    }




}