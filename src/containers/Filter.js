import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/filters'
import Filter from '../components/Filter'

class FilterContainer extends React.Component {
    constructor (props) {
        super(props)

        this.state = {...this.props.filters}
    }

    setFilterValue (key, value) {
        this.setState({
            [key]: value
        })
    }

    applyFilters () {
        this.props.actions.apply(this.state)
        this.props.close()
    }

    render () {
        return (
            <Filter
                isOpen={this.props.is_open}
                close={this.props.close}
                setFilterValue={(key, value) => this.setFilterValue(key, value)}
                apply={() => this.applyFilters()}
                currentState={this.state}
            />
        )
    }
}

const mapStateToProps = state => ({
    filters: state.filters
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterContainer)