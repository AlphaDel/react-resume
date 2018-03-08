import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Portfolio } from '../../components'
import { loadPagePortfolio } from '../../actions/portfolio'
import data from '../../data/data.json'

class Portfoliocontainer extends Component {

    
    componentDidMount() {
        const { onLoadPagePortfolio } = this.props
        onLoadPagePortfolio()
    }
    
    render () {
        const data = this.props.pages
        return (
            <Portfolio {...data}/>
        )
    }
}


export default connect(
    (state) => ({pages: state.pages}),
    { onLoadPagePortfolio: loadPagePortfolio }
)(Portfoliocontainer)