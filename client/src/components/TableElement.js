import React, {Component} from 'react'
import axios from 'axios'
class TableElement extends Component {

    state={

    }

    editClickHandler = (id) => {

            if(this.refs['edit'+id].innerHTML==='Edit'){

                this.setState({
                        productName: this.refs['product' + id].innerHTML,
                        productColor: this.refs['color' + id].innerHTML
                    }
                )

                this.refs['edit'+id].innerHTML='Done'
                this.refs[id].contentEditable='true'
            } else{
                axios.post("http://localhost:3001/api/updateData", {
                    oldProductName: this.state.productName,
                    oldProductColor: this.state.productColor,
                    productName: this.refs['product'+id].innerHTML,
                    productColor: this.refs['color'+id].innerHTML,

                })
                this.refs[id].contentEditable='false'
                this.refs['edit'+id].innerHTML='Edit'
                window.location.reload()
            }

    }

    deleteClickHandler = (id) => {
        axios.delete("http://localhost:3001/api/deleteData", {
            data: {
                productId: this.refs['id2'+id].innerHTML,
            }
        })
        window.location.reload()
    };

  render() {
      if(this.props.editable){
    return this.props.data.map( data => (
		<tr ref={data.productId} contentEditable={'false'}>
            <td ref={'id'+data.productId} contentEditable={'false'}>{data.productId}</td>
            <td ref={'product'+data.productId}>{data.productName}</td>
            <td ref={'color'+data.productId}>{data.productColor}</td>
            <td contentEditable='false'><button  className='button' ref={'edit'+data.productId} onClick={() => this.editClickHandler(data.productId)}>Edit</button></td>
		</tr>
        ))}
        else{
          return this.props.data.map( data => (
              <tr ref={data.productId} contentEditable={'false'}>
                  <td ref={'id2'+data.productId}>{data.productId}</td>
                  <td ref={'product2'+data.productId}>{data.productName}</td>
                  <td ref={'color2'+data.productId}>{data.productColor}</td>
                  <td ref={'price2'+data.productId}>{data.productPrice}</td>
                  <td contentEditable='false'><button  className='button' ref={'delete'+data.productId} onClick={() => this.deleteClickHandler(data.productId)}>Delete</button></td>
              </tr>
              )
          )}
  }
}
 
export default TableElement