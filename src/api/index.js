import ajax from './ajax'
export const gethomeData = ()=>ajax('/home');
export const getKnowledgeData = ()=>ajax('/knowledge');
export const getClassifyData = () =>ajax('/classify');
export const getShoppingData= () =>ajax('/shopping');
export const getPersonalData = () =>ajax('/personal');


