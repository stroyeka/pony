import { colors } from './Colors'
import { kinds } from './Kinds'
import {
    MAX_ITEMS_COUNT,
    MAX_PRICE
} from '../constants'

export default class {
    constructor() {
        this.colors = colors
        this.kinds = kinds
        this.maxCount = MAX_ITEMS_COUNT
        this.maxPrice = MAX_PRICE
    }

    getList() {
        let i = 0
        let items = []
        
        while (i < this.maxCount) {
            items.push({
		        'name': `Пони${i}`,
		        'color': this.colors[Math.floor(7 * Math.random())],
                'kind': this.kinds[Math.floor(4 * Math.random())],
		        'price': (this.maxPrice * Math.random()).toFixed(2),
                'is_new': Math.random() > 0.5
            })
            i++
        }

        return items
    }
}