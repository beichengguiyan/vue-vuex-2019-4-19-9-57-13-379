<template>
  <div id="app">
    <h2>
      Vue To Do List
      Simple Todo List with adding and filter by diff status.
    </h2>

    <div id="list">
      <ul>
        <li v-for="(item,index) in tudolistfilter" :key="index">
          <input type="checkbox" @change="handleChose(item)" v-model="item.selected">
          {{item.content}}
          </li>
      </ul>
    </div>

    <div id="filter">
      当前状态：{{this.$store.state.currentFilter}}
      <button @click="handleStatus('active')">active</button>
      <button @click="handleStatus('complete')">complete</button>
    </div>

    <CreateForm  @addNewToDo="handleAdd"/>
  </div>
</template>

<script>
import CreateForm from './components/CreateForm.vue'
export default {
  name: "app",
  components: {
      CreateForm
  },
  data: function() {
    return {
      /**
       * 定义了 todo item 中属性为 {content:'吃饭',status:'active'}
       * 定义了 todo 的两种状态 completed、active，默认为 active
       */
      // todoList: [
      //   { content: "吃饭", status: "active" },
      //   { content: "睡觉", status: "active" },
      //   { content: "打豆豆", status: "active" }
      // ],
      inputtingtext: "",
      // currentFilter: "active"
    };
  },

  computed: {


    tudolistfilter: function() {
      let filterList = [];
      for (let index = 0; index < this.$store.state.todoList.length; index++) {
        const element = this.$store.state.todoList[index];
        if (
          element.status === this.$store.state.currentFilter ||
          this.$store.state.currentFilter === "all"
        ) {
          filterList.push(element);
        }
      }
      return filterList;
    }
  },

  methods: {
    handleAdd: function(inputtingtext) {
      console.log(40, inputtingtext);
      this.$store.state.todoList.push({
        content: inputtingtext,
        status: "active"
      });
    },
    handleStatus: function(status) {
      this.$store.state.currentFilter = status;
    },
    handleChose: function(item) {
      if (item.selected) {
        item.status="complete";
      }else{
        item.status="active";
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.items {
  list-style: none;
  text-align: left;
  line-height: 30px;
}

.items li.completed {
  text-decoration: line-through;
}

.filter a {
  margin: 0 10px;
  line-height: 30px;
}

.filter a.active {
  color: #f60;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 3px;
  cursor: pointer;
}

button{
display: inline-block;
background-color:#fc999b;
color:#ffffff;
border-radius: 5px;
text-align:center;
margin-top:2px;
padding: 5px 15px;
}

button:hover{
cursor: pointer;
opacity: .8;
}

</style>
