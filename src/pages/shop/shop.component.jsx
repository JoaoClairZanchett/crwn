import React from 'react'
import ShopData from './shop.data'

import CollectionOverview from '../../components/collections-overview/collections-overview.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: ShopData
        }
    }

    render () {
        const { collections } = this.state;
        return (
            <CollectionOverview collections={collections}/>
        )
    }
}

export default ShopPage