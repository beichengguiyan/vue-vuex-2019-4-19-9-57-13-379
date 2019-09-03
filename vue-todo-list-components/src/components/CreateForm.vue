<template>
  <div>
    <input type="text" :value="inputtingtext" @change="handleChange" />
    <button @click="handleAdd">add</button>
  </div>
</template>

<script>
export default {
  name: "creat-form",
  components: {},
  data: function() {
    return {
      inputtingtext: ""
    };
  },
  methods: {
    handleAdd: function() {
      console.log(this.inputtingtext);
      this.$emit("addNewToDo", this.inputtingtext);
    },
    handleChange: function(event) {
      this.inputtingtext = event.target.value;
    }
  }
};
</script>

<style>
</style>
