import React, { Component } from 'react';
import DataTable from "./DataTable";
class App extends Component {
    //State
    state = {
        products: []
    };
    //
    //Fetch Data Method
    fetchData = () => {
        fetch("http://127.0.0.1:3001/api/getData")
            .then(data => data.json())
            .then( res => { for(var k=0;k<res.data.length;k++){
                let data = res.data[k]
                this.setState( prevState => ({ products: [...prevState.products, {
                    'productId' : data.id,
                    'productName': data.Product,
                    'productColor': data.Color,
                    'productPrice': data.Price
                }] }
            ))}})
        };
    //
    //Get Distinct Method
    getDistinct = () => {
        let result = [];
        let map = new Map();
        for (let item of this.state.products) {
            if(!map.has(item.productName && item.productColor )){
                map.set(item.productName, true);
                map.set(item.productColor, true);
                map.set(item.productPrice, true);// set any value to Map
                result.push({
                    productId: item.productId,
                    productName: item.productName,
                    productColor: item.productColor,
                    productPrice: item.productPrice
                });
            }
        }
        return result;
    }
    //
    //Fetch Data From DB on Mount
    componentDidMount() {
        this.fetchData();
    }
    //
    render() {
        const data = this.state.products;
        const dictionary = this.getDistinct()
        return (
            <div id='Tables'>
            <DataTable
                data={dictionary} data2={data}
            />
            </div>
        );
  }
}

export default App;
