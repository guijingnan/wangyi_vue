import {
  GET_HOME_DATA,
  GET_KNOWLEDGE_DATA,
  GET_CLASSIFY_DATA,
  GET_SHOPPING_DATA,
  GET_PERSONAL_DATA
} from './mutation-types'
import {gethomeData,getKnowledgeData,getClassifyData,getShoppingData,getPersonalData} from '../api'
export default {
 async getHomeData({commit},cb){
    const result = await gethomeData();
    const home = result.data;
   console.log(home);
    commit(GET_HOME_DATA,{home})
   cb && cb();
  },
  async getKnowledgeData({commit},cb){
    const result = await getKnowledgeData();
    const knowledge = result.data;
    commit(GET_KNOWLEDGE_DATA,{knowledge})
    cb && cb();
  },
  async getClassifyData({commit},cb){
    const result = await getClassifyData();
    const classify = result.data;
    commit(GET_CLASSIFY_DATA,{classify})
    cb && cb();
  },
  async getShoppingData({commit},cb){
    const result = await getShoppingData();
    const shopping = result.data;
    commit(GET_SHOPPING_DATA,{shopping})
    cb && cb();
  },
  async getPersonalData({commit},cb){
    const result = await getPersonalData();
    const personal = result.data;
    commit(GET_PERSONAL_DATA,{personal})
    cb && cb();
  }
}
