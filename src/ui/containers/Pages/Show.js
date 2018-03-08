import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPage } from '../../actions/page'
import { getPageById } from '../../reducers/pages'
import { ShowPage } from '../../components'

 class ShowPageContainer extends Component {
     

    shouldComponentUpdate(nextProps) {
        return this.props.page !== nextProps.page
    }

    componentDidMount() {
        const { onLoadPage } = this.props
        const { params: { id } } = this.props.match
        onLoadPage(id)
           
    }

    render() {
        const { title, content } = this.props.page
        return (
            <ShowPage
                title={title}
                content={content}
            />
        )
    }
}


export default connect(
    (state, ownProps) => ({page: getPageById(state, ownProps.match.params.id)}),
    { onLoadPage: loadPage }
)(ShowPageContainer)