import React, { Component } from 'react'
import BottomContent from './splash/BottomContent';
import Jumbo from './splash/Jumbo';
import PanoPic from './splash/PanoPic';

class SplashContent extends Component {

render() {
        return (
            <div>
                <Jumbo />
                <PanoPic />
                <BottomContent />
            </div>
        )
    }
}

export default SplashContent