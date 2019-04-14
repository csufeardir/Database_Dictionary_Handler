import React from 'react';
import axios from "axios";
class Add extends React.Component {

	state={
		done: false
	}
	
	clickHandler = () => {
		this.setState({done: true})
		this.putDataToDB({
            productId: this.refs[1].innerHTML,
            productName: this.refs[2].innerHTML,
            productColor: this.refs[3].innerHTML,
            productPrice: this.refs[4].innerHTML,
            }
		)
        window.location.reload();
	}

    //Create New Entry
    putDataToDB = (data) => {
        axios.post("http://localhost:3001/api/putData", data)
    };
    // 

    render() {
        return (
		<div>
		<table contentEditable='true' className='productTable' id='tableAdd' style={{width:'50%'}}>
		<tbody>
		<tr>
		<td ref='1'>Product Id</td>
		<td ref='2'>Product Name</td>
		<td ref='3'>Product Color</td>
		<td ref='4'>Product Price</td>
		</tr>
		</tbody>
		</table>
		{this.state.done ? null : <button className='button' id='add2' onClick={this.clickHandler}>Done</button>}
		</div>
		)

    }
}
export default Add