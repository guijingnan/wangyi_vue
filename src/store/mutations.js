import {
  GET_HOME_DATA,
  GET_KNOWLEDGE_DATA,
  GET_CLASSIFY_DATA,
  GET_SHOPPING_DATA,
  GET_PERSONAL_DATA
} from './mutation-types'
export default {
[GET_HOME_DATA](state,{home}){
state.home = home
},
  [GET_KNOWLEDGE_DATA](state,{knowledge}){
    state.knowledge = knowledge
  },
  [GET_CLASSIFY_DATA](state,{classify}){
    state.classify = classify
  },
  [GET_SHOPPING_DATA](state,{shopping}){
    state.shopping = shopping
  },
  [GET_PERSONAL_DATA](state,{personal}){
    state.personal = personal
  },

}
