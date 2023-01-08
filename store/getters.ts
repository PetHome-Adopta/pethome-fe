export default {
    items(state) {
        return state;
    },
    item: state => (itemType, key) => state[itemType]?.items.find((data) => data.key === key || data.slug === key),
    loggedUser(state){
        return state.myself?.items[0]?.user;
    }
}