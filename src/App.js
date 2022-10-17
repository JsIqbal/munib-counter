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

    render() { 
        
        return (
            <div style={{marginTop: "100px", marginLeft: "200px"}}>
                <button>minus</button>
                    {
                        this.state.num
                    }
                <button onClick={this.increament}>plus</button>
            </div>
        );
    }
}
 
export default App;