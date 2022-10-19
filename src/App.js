import React, { Component } from "react";

import Box from "./Box";

class App extends Component {
    render() { 
        return (
            <div className="col-lg-12 mt-4 text-center">
                {
                    [<Box />, <Box />]
                }
            </div>
        );
    }
}
 
export default App;