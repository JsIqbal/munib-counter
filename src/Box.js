import React, { Component } from "react";

class Box extends Component {
    state = {
        num : 5,
        color: 'btn btn-danger me-2'
    }
    increament = () => {
        const newState = {
            num : this.state.num + 1,
            color: 'btn btn-danger me-2'
        }

        this.setState(newState);
    }

    decreament = () => {
        const newState = {
            num : this.state.num - 1
        }

        if (this.state.num === 1) {
            const colorState = {
                color: 'btn btn-warning me-2'
            }

            this.setState(colorState);
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
                <button className={this.state.color} onClick={this.decreament}>minus</button>
                    {
                        this.state.num
                    }
                <button className="btn btn-success ms-2" onClick={this.increament}>plus</button>
            </div>
        );
    }
}
 
export default Box;