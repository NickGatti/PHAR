import React, { Component } from 'react'
import TopNav from './TopNav';
import Jumbo from './splash/Jumbo';
import PanoPic from './splash/PanoPic';
import BottomContent from './splash/BottomContent';

class Splash extends Component {

render() {
        return (
            <div>
                <TopNav />
                <Jumbo />
                <PanoPic />
                <BottomContent />
            </div>
        )
    }
}

export default Splash