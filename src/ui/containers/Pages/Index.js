import React, { Component } from 'react'
import { connect } from 'react-redux'
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

export default connect(
    (state) => ({ pages: state.pages }),
    { onLoadPages : loadPages }
)(PagesContainer)