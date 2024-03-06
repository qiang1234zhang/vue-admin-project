const actions={
    do({commit},data){
        commit("COMMIT_TOKEN",data)
    },
    doOther(context){
      context.commit("TAGES_LIST")
    }
}
//在vue组件中使用
//this.$store.dispatch("do",{data:data}) 或 this.$store.dispatch({type:"do"}) 
//this.$store.dispatch("does")
export default actions