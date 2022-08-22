import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import http from '@/http';

interface state {
    user: {
        id: number,
        name: string,
        token: string
    }
}

export const key: InjectionKey<Store<state>> = Symbol();

export const store = createStore<state>({
    state: {
        user: {
            id: 0,
            name: "",
            token: ""
        }
    },

    mutations: {
        'SET_USER' (state, { id, name, token }) {
            state.user.id = id,
            state.user.name = name,
            state.user.token = token
        },

        'LOGOUT_USER' (state) {
            state.user.id = 0,
            state.user.name = "",
            state.user.token = ""
        }
    },

    actions: {
        signIn({ commit }, user) {
            return new Promise((resolve, reject) => {
                http.post("/api/user/authenticate", user)
                    .then(response => {
                        commit('SET_USER', {
                            id: response.data.id,
                            name: response.data.name,
                            token: response.data.token
                        })
                        resolve(response)
                    })
                    .catch(error => { reject(error) }
                );
            });
        }
    }
});

export function useStore(): Store<state> {
    return baseUseStore(key);
}