import React from 'react'
import './category.styles.scss'

const CategoryPage = ({match}) => {
    const pageName = match.params.categoryId
    return (
        <div className='category'>
            <h2>
                {pageName}
            </h2>
        </div>
    )
}

export default CategoryPage

