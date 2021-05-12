import React, { Component } from 'react';

class Groceries extends Component {
    // Make an array of 3 objects using the above shape and render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)
    objects = [
        {
            item: 'Water',
            brand: 'Fiji',
            units: '6',
            quantity: 0,
            isPurchased: false
        },
        {
            item: 'Soda',
            brand: 'Coca-Cola',
            units: '12',
            quantity: 0,
            isPurchased: false
        },
        {
            item: 'Brown Rice',
            brand: "Uncle Ben's",
            units: '1',
            quantity: 0,
            isPurchased: false
        },
    ]
    constructor(props){
        super()
        this.state = {
            item : this.objects[props.index].item,
            brand : this.objects[props.index].brand,
            units : this.objects[props.index].units,
            quantity : this.objects[props.index].quantity,
            isPurchased : this.objects[props.index].isPurchased,
        }
        // Make inputs so that new items can be added
        this.addToCart = () => {
            this.quantityInCart = this.state.quantity + 1
            this.setState({
                quantity: this.quantityInCart
            })
            // console.log(this.quantityInCart)
        }
        this.removeFromCart = () => {
            if(this.state.quantity === 0){
                this.setState({
                    quantity: 0
                }) 
            } else {
                this.quantityInCart = this.state.quantity - 1
                this.setState({
                    quantity: this.quantityInCart
                })
            }
            // console.log(this.quantityInCart)
        }
        // Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)
        this.resetQuantity = () => {
            this.setState({
                quantity: 0
            })
        }
        this.buy = () => {
            this.togglePurchase = !this.state.isPurchased
            this.setState({
                isPurchased: this.togglePurchase,                
            })
            // console.log(this.state.isPurchased)
        }
    }
    render() {
        return (
            <div>
                <div className="itemCard">
                    <div>{this.state.brand}</div>
                    <div>{this.state.item}</div>
                    <div>{this.state.units} pack</div>
                    {/* <div>{this.state.quantity}</div> */}
                    <div>{this.state.isPurchased && this.state.quantity > 0? console.log(`Purchased ${this.state.quantity} ${this.state.brand} ${this.state.item}`): null}</div>
                    <div className="cart">
                        {/* Add to cart */}
                        <button onClick={this.addToCart} className="btn">+</button>
                        {this.state.quantity}
                        {/* Remove from cart */}
                        <button onClick={this.removeFromCart} className="btn">-</button>
                        {/* Buy */}
                        <button onClick={this.buy} className="purchase-btn">Buy</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Groceries;