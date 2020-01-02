import React from 'react'
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'
class Directory extends React.Component {

    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'http://placekitten.com/200/350',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'http://placekitten.com/200/270',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'http://placekitten.com/250/300',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'women',
                    imageUrl: 'http://placekitten.com/320/400',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'men',
                    imageUrl: 'http://placekitten.com/200/300',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )
    }
}

export default Directory;


