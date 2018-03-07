import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Portfolio } from '../../components'

class Portfoliocontainer extends Component {

    render () {
        return (
            <Portfolio />
        )
    }
}

export default connect(
    
)(Portfoliocontainer)