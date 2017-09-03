import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/catalog'
import ItemsGenerator from '../data/Items'
import ItemsList from '../components/ItemsList'
import { 
    CHOOSE_COLOR, 
    CHOOSE_KIND, 
    MAX_VISIBLE_ITEMS_COUNT,
    MAX_PRICE
} from '../constants'

class CatalogContainer extends React.Component {
    componentDidMount() {
        const itemsGenerator = new ItemsGenerator()
        this.itemsList = itemsGenerator.getList()
        this.props.actions.update(itemsGenerator.getList())
    }

    render() {
        return <ItemsList items={this.props.catalog.visibleItems} />
    }
}

const getRandomItems = (itemsList, limit) => {
        let visibleItems = []

        visibleItems = itemsList.sort(() => 0.5 - Math.random())
        
        return visibleItems.slice(0, limit)
}

const filterItems = (catalog, filters) => {
    if (!catalog.items.length) {
        return catalog
    }

    let visibleItems = catalog.items

    if (filters.color !== CHOOSE_COLOR) {
        visibleItems = visibleItems.filter(item => item.color === filters.color)
    }

    if (filters.kind !== CHOOSE_KIND) {
        visibleItems = visibleItems.filter(item => item.kind === filters.kind)
    }

    if (filters.is_new !== undefined) {
        visibleItems = visibleItems.filter(item => item.is_new === filters.is_new)
    }

    if (filters.price_min !== undefined) {
        let priceMax = filters.price_max !== undefined ? 
            filters.price_max : 
            MAX_PRICE
        
        visibleItems = visibleItems.filter(item => 
            item.price > parseFloat(filters.price_min) && 
            item.price < parseFloat(priceMax)
        )
    }

    visibleItems = getRandomItems(visibleItems, MAX_VISIBLE_ITEMS_COUNT)

    return {
        ...catalog,
        visibleItems
    }
}

const mapStateToProps = state => ({
    catalog: filterItems(state.catalog, state.filters)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogContainer)