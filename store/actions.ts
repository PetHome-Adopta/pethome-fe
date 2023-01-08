import { Backend } from "../@core/backendList"

export default {
    async getItems({ commit, state }, { backend, itemType, requestConfig, customName, forceAPICall, page }) {
        
        const dataToSend:any = {
            ...requestConfig,
            page: page
        }

        try {

            const stateName: string = getStateName(itemType, customName);

            if (!checkPersistence(state, stateName, dataToSend.page ?? 1) && !forceAPICall) {
                return;
            }

            let response;

            try {
                console.log(process.env)
                console.log(backend)
                console.log(`TEST ${Backend[backend]}/${itemType}`)
                response = await this.$axios.$get(`${Backend[backend]}/${itemType}`, { params: dataToSend });
                
            } catch (e) {
                response = e.response;
            }

            const payload = {
                itemType: stateName,
                data: response.data,
                page: dataToSend.page ?? 1,
                forceAPICall,
            }

            commit('SET_ITEMS', payload);

            return payload;

        } catch (e) {
            console.log(e)
            return e?.response?.status;
        };

    },

    async createItem({ commit }, { backend, itemType, requestConfig, customName, file }) {

        const dataToSend = requestConfig;
        try {

            const stateName: string = getStateName(itemType, customName);

            let response;
            let formData;

            const selectedHeader =
                file != null && Object.values(file).length > 0
                    ? { "content-type": "multipart/form-data" }
                    : { "Content-Type": "application/json" };
            if (file != null && Object.values(file).length > 0) {
                // En caso de que me manden file el formData hará la preparación de los archivos
                formData = new FormData();
                // La nueva funcionalidad del backend permite diferenciar los archivos según su nombre del parametro. En caso de utilizar este metodo (File.type es null)
                // se ha de tratar de forma dinamica.
                if (file.type == null) {
                    for (const row in file) {
                        formData.append(row, file[row]);
                    }
                } else {
                    // En caso de utilizar el metodo antiguo (file es el archivo) ha de montarlo simple
                    formData.append("file", file);
                }
                formData.append("data", JSON.stringify(dataToSend));
            } else {
                // En caso de que no exista ningún archivo adjunto para mandar el formData será el JSON de requestData
                formData = dataToSend;
            }

            try {

                response = await this.$axios.$post(`${Backend[backend]}/${itemType}`, formData, { headers: selectedHeader });

            } catch (e) {
                response = e.response;
            }

            const payload = {
                itemType: stateName,
                data: response?.data || response,
                page: dataToSend.page ?? 1
            }

            commit('SET_ITEMS', payload);

            return payload;

        } catch (e) {
            console.log(e)
            return e?.response?.status;
        };

    },

    async editItem({ commit }, { backend, itemType, requestConfig, customName, file, typeOfRequest, forceAPICall, noSet }) {

        const dataToSend = requestConfig;
        try {

            const stateName: string = getStateName(itemType, customName);

            let response;
            let formData;

            const selectedHeader =
                file != null && Object.values(file).length > 0
                    ? { "content-type": "multipart/form-data" }
                    : { "Content-Type": "application/json" };
            if (file != null && Object.values(file).length > 0) {
                // En caso de que me manden file el formData hará la preparación de los archivos
                formData = new FormData();
                // La nueva funcionalidad del backend permite diferenciar los archivos según su nombre del parametro. En caso de utilizar este metodo (File.type es null)
                // se ha de tratar de forma dinamica.
                if (file.type == null) {
                    for (const row in file) {
                        formData.append(row, file[row]);
                    }
                } else {
                    // En caso de utilizar el metodo antiguo (file es el archivo) ha de montarlo simple
                    formData.append("file", file);
                }
                formData.append("data", JSON.stringify(dataToSend));
            } else {
                // En caso de que no exista ningún archivo adjunto para mandar el formData será el JSON de requestData
                formData = dataToSend;
            }

            try {

                if(typeOfRequest === "put"){
                    response = await this.$axios.$put(`${Backend[backend]}/${itemType}`, formData, { headers: selectedHeader });
                }else{
                    response = await this.$axios.$post(`${Backend[backend]}/${itemType}`, formData, { headers: selectedHeader });
                }

            } catch (e) {
                response = e.response;
            }

            const payload = {
                itemType: stateName,
                data: response?.data || response,
                page: dataToSend.page ?? 1,
                forceAPICall
            }

            if(!noSet){

                commit('SET_ITEMS', payload);

            }

            return payload;

        } catch (e) {
            console.log(e)
            return e?.response?.status;
        };

    },

    async rawCall({ }, { backend, itemType, requestConfig, file, typeOfRequest }) {

        const dataToSend = requestConfig;
        try {

            let response;
            let formData;

            const selectedHeader =
                file != null && Object.values(file).length > 0
                    ? { "content-type": "multipart/form-data" }
                    : { "Content-Type": "application/json" };
            if (file != null && Object.values(file).length > 0) {
                // En caso de que me manden file el formData hará la preparación de los archivos
                formData = new FormData();
                // La nueva funcionalidad del backend permite diferenciar los archivos según su nombre del parametro. En caso de utilizar este metodo (File.type es null)
                // se ha de tratar de forma dinamica.
                if (file.type == null) {
                    for (const row in file) {
                        formData.append(row, file[row]);
                    }
                } else {
                    // En caso de utilizar el metodo antiguo (file es el archivo) ha de montarlo simple
                    formData.append("file", file);
                }
                formData.append("data", JSON.stringify(dataToSend));
            } else {
                // En caso de que no exista ningún archivo adjunto para mandar el formData será el JSON de requestData
                formData = dataToSend;
            }

            try {

                if(typeOfRequest === "put"){
                    response = await this.$axios.$put(`${Backend[backend]}/${itemType}`, formData, { headers: selectedHeader });
                }else if(typeOfRequest === "post"){
                    response = await this.$axios.$post(`${Backend[backend]}/${itemType}`, formData, { headers: selectedHeader });
                }else if(typeOfRequest === "get"){
                    response = await this.$axios.$get(`${Backend[backend]}/${itemType}`, formData, { headers: selectedHeader });
                }

            } catch (e) {
                response = e.response;
            }

            const payload = {
                itemType,
                data: response?.data || response,
                page: dataToSend.page ?? 1,
                forceAPICall: true
            }

            return payload;

        } catch (e) {
            console.log(e)
            return e?.response?.status;
        };

    },

    async addToItem({commit }, {itemType, customName, data}){

        const stateName: string = getStateName(itemType, customName);

        const payload = {
            itemType: stateName,
            data,
            page: 1
        }

        commit('SET_ITEMS', payload);
    }
    
}










const getStateName = (itemType: string, customName: string): string => {

    let stateName = itemType;

    if (customName != null) {
        stateName = customName;
    }

    return stateName;
}

const checkPersistence = (state: any, name: string, page: number) => {
    if (state[name]?.meta?.page === page || state[name]?.meta?.total <= state[name]?.items?.length) {
        return false;
    }

    return true;

}