import { colors } from './Colors'
import { kinds } from './Kinds'

export default class {
    constructor() {
        this.colors = colors
        this.kinds = kinds
        this.maxCount = 100
    }

    getList() {
        let i = 0
        let items = []
        
        while (i < this.maxCount) {
            items.push({
		        'name': `Пони${i}`,
		        'color': this.colors[Math.floor(7 * Math.random())],
                'kind': this.kinds[Math.floor(4 * Math.random())],
		        'price': (100 * Math.random()).toFixed(2),
                'is_new': Math.random() > 0.5
            })
            i++
        }

        return items
    }
}