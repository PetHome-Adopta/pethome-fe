import Vue from "vue";

export default {
    SET_ITEMS(state, payload ) {
        try {
            if (state[payload.itemType] == null || payload.forceAPICall) {
                Vue.set(state, payload.itemType, {});
                Vue.set(state[payload.itemType], "items", []);
                Vue.set(state[payload.itemType], "paginated", {});
            }

            if (typeof payload.data === "string") {
                payload.data = [payload.data];
            }

            if (!Array.isArray(payload.data)) {
                if (!isNaN(Number(Object.keys(payload.data)[0]))) {
                    payload.data = [...Object.values(payload.data)];
                } else {
                    payload.data = [payload.data];
                }
            }

            Vue.set(state[payload.itemType], "items", [...state[payload.itemType].items, ...payload.data]);
            state[payload.itemType].paginated[payload.page] = [...payload.data];

        } catch (e) {
            console.log(e)
        }
    },

    SET_SIMPLE_ITEM(state, payload) {
        Vue.set(state, payload.name, {});
        state[payload.name] = payload.data;
    }
}