export default {
    // strict: true,
    state: {
        // 应用的数据
        test: 'hello vuex',
        todoList: [
            { content: "吃饭", status: "active" },
            { content: "睡觉", status: "active" },
            { content: "打豆豆", status: "active" }
          ],
          inputtingtext: "",
          currentFilter: "active"
    },
    getters: {
        tudolistfilter: function(state) {
            let filterList = [];
            for (let index = 0; index < state.todoList.length; index++) {
              const element = state.todoList[index];
              if (
                element.status === state.currentFilter ||
                state.currentFilter === "all"
              ) {
                filterList.push(element);
              }
            }
            return filterList;
          }
    },
    mutations: {

    }
}