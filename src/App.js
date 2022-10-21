import React, { Component } from "react";

import Box from "./Box";

class App extends Component {
    state = {
        arra: [1, 2, 3]
    }

    singleBox = () => {
        return (<Box />);
    }

    getBoxes = () => {
        const arr = this.state.arra;
        const newArra =  arr.map(this.singleBox);
        return newArra;
    }

    render() { 
        return (
            <div className="col-lg-12 mt-4 text-center">
                {
                    this.getBoxes()
                }
            </div>
        );
    }
}
 
export default App;