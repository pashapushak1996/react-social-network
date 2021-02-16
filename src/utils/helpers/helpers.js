export const userPropsChange = (item, itemProp, itemId, propsToChange) => {
    return item.map((Item) => {
        if (Item[itemProp] === itemId) {
            return {
                ...Item, ...propsToChange
            }
        }
        return Item
    })
}

