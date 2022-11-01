import React, { Component } from "react";
import Footer from "./footer.component";
import NavBar from "./nav-bar.component";

class Layout extends Component {
    constructor (props) {
        super(props)
    }
    
    render() { 
        return (
            <>
                <section className="header">
                    <NavBar />
                </section>
                    <div>
                        {this.props.children}
                    </div>
                    
                <section className='text-center mt-4'>
                        <Footer/>
                </section>
            </>
        );
    }
}
 
export default Layout;