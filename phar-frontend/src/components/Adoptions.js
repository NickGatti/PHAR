import React, { Component } from 'react'
import TopComponent from './adoption/TopComponent';
import TopNav from './TopNav';

class Adoptions extends Component {

render() {
        return (
            <div>
                <TopNav />
                <TopComponent />
            </div>
        )
    }
}

export default Adoptions