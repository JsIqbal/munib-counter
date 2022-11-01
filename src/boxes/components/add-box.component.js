import React, { Component } from "react";

import Box from "../../Box";

class AddBox extends Component {
    state = {
        arra: [1, 2, 3]
    }

    singleBox = () => {
        return (<Box nextProp={{value: this.props}}/>);
    }

    getBoxes = () => {
        const arr = this.state.arra;
        const newArra =  arr.map(this.singleBox);
        return newArra;
    }

    createBox = () => {
        const currentStateArray = this.state.arra;
        const updatedStateArray = [...currentStateArray, 0]; // ... means spread operator
        const updatedState = {
            arra: updatedStateArray
        }

        this.setState(updatedState);
    }

    render() { 
        return (
            <div className="col-lg-12 mt-4 text-center">
                <button onClick={this.createBox} className="btn btn-primary">ADD BOX</button>
                {
                    this.getBoxes()
                }
            </div>
        );
    }
}
 
export default AddBox;