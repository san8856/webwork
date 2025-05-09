import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  //data(){return {} }  =
  state: () => ({ userid: 'kkk', grade:"admin" }),
  getters: { },
  //methods:{}  =
  actions: {
    setUserid(userid) {
      this.userid = userid;
    },
  },
})