import React, { Component } from "react";
import AddBox from "../../../boxes/components/add-box.component";
import Layout from "../common/layout.component";

class App extends Component {
    render() { 
        return (
            <Layout>
                <AddBox/>
            </Layout>
        );
    }
}
 
export default App;