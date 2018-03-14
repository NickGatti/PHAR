import React, { Component } from 'react'
import TopComponent from './adoption/TopComponent';
import TopNav from './TopNav';
import CardWrapper from './adoption/CardWraper';

class Adoptions extends Component {

render() {
        return <div>
            <TopNav />
            <TopComponent />
            <CardWrapper />
          </div>;
    }
}

export default Adoptions