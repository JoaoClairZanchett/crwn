import { createSelector } from 'reselect'

const selectCollections = state => state.collection;

export const selectCollectionData = createSelector(
    [selectCollections],
    collection => collection
)

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollectionData],
        collections => collections[collectionUrlParam]
    )
