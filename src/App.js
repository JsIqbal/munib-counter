import React, { Component } from "react";

class App extends Component {
    state = {
        num : 10
    }

    increament = () => {
        const newState = {
            num : this.state.num + 1
        }

        this.setState(newState);
    }

    decreament = () => {
        const newState = {
            num : this.state.num - 1
        }

        if (this.state.num === 0) {
            
        }

        else {
            this.setState(newState);
        }
    }

    render() { 
        
        return (
            <div className="col-lg-12 mt-4 text-center">
                <button className="btn btn-danger" onClick={this.decreament}>minus</button>
                    {
                        this.state.num
                    }
                <button className="btn btn-success" onClick={this.increament}>plus</button>
            </div>
        );
    }
}
 
export default App;

/*
task:
----
1. when number is 0, the minus button's color will be yello.
*/
