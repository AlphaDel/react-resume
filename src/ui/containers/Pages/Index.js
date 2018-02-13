import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { PAGES_ENDPOINT } from '../../constants/endpoints'
import { Pages } from '../../components'
import { loadPages } from '../../actions/page'

class PagesContainer extends Component {

    shouldComponentUpdate(nextProps) {
        return this.props.pages !== nextProps.pages;
    }
    
    onReloadPages = () => {
        this.props.onLoadPages()
    }

    componentDidMount() {
        this.onReloadPages()
    }

    render() {
        return (
            <Pages 
                pages={ this.props.pages } 
                onReloadPages={this.onReloadPages} />
        )
    }
}

const mapStateToProps = (state) => ({
    pages: state.pages
})

const mapDispatchToProps = (dispatch) => ({
    onLoadPages() {
        dispatch(loadPages())
    }
})

export default connect(
    mapStateToProps,
    { onLoadPages : loadPages }
)(PagesContainer)