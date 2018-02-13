import React, { Component } from 'react'
import { PAGES_ENDPOINT } from '../../constants/endpoints'
import { ShowPage } from '../../components'

export default class ShowPageContainer extends Component {
    state = {
        page: []
    }

    shouldComponentUpdate(_nextProps, nextState) {
        return this.state.page !== nextState.page;
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        fetch(`${PAGES_ENDPOINT}/?id=${params.id}`)
        .then((response) => response.json())
        .then((page) => this.setState({ page }))
        
        
    }

    render() {
    
        return (
            <ShowPage
            data={this.state.page} />
        )
    }
    
}