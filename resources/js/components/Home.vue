<template>
  <div>
    <nav class="panel column is-offset-2 is-8">
      <p class="panel-heading">
        Phonebook
        <button class="button is-link is-outlined" @click="openAdd">
          New
        </button>
        <span class="is-pulled-right" v-if="loading">
            <i class="fa fa-refresh fa-spin fa-2x fa-fw"></i>
        </span>
      </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-small" type="text" placeholder="search" v-model="searchQuery">
          <span class="icon is-small is-left">
            <i class="fa fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <a class="panel-block" v-for="item, key in tempQuery">
        <span class="column is-9">
          {{ item.name }}
        </span>
        <span class="panel-icon column is-1">
          <i class="has-text-danger fa fa-trash" aria-hidden="true" @click="openDelete(key, item.id)"></i>
        </span>
        <span class="panel-icon column is-1">
          <i class="has-text-info fa fa-edit" aria-hidden="true" @click="openUpdate(key)"></i>
        </span>
        <span class="panel-icon column is-1">
          <i class="has-text-primary fa fa-eye" aria-hidden="true" @click="openShow(key)"></i>
        </span>
      </a>
    </nav>
  <add :openmodal='addActive' @closeRequest='close'></add>
  <show :openmodal='showActive' @closeRequest='close'></show>
  <update :openmodal='updateActive' @closeRequest='close'></update>
  </div>
</template>

<script>
let add = require("./Add.vue");
let show = require("./Show.vue");
let update = require("./Update.vue");
export default {
  components: { add, show, update },
  data() {
    return {
      addActive: "",
      showActive: "",
      updateActive: "",
      lists: {},
      errors: {},
      loading: false,
      searchQuery: "",
      tempQuery: ""
    };
  },
  watch: {
    searchQuery() {
      //console.log(this.searchQuery);
      if (this.searchQuery.length > 0) {
        this.tempQuery = this.lists.filter(item => {
          //console.log(index);
          return (
            item.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
          );
        });
        //console.log(result);
      } else {
        this.tempQuery = this.lists;
      }
    }
  },
  mounted() {
    //console.log("working");
    axios
      .post("/getData")
      .then(response => (this.lists = this.tempQuery = response.data))
      .catch(error => (this.errors = error.response.data.errors));
  },
  methods: {
    openAdd() {
      this.addActive = "is-active";
    },
    openShow(key) {
      //console.log(this.$children[1]);
      //childre[1] ->   <show :openmodal='showActive' @closeRequest='close'></show>
      this.$children[1].list = this.lists[key];
      this.showActive = "is-active";
    },
    openUpdate(key) {
      //console.log(this.$children[1]);
      //children[2] -> <update :openmodal='updateActive' @closeRequest='close'></update>
      this.$children[2].list = this.lists[key];
      this.updateActive = "is-active";
    },
    openDelete(key, id) {
      //delete confirmation
      if (confirm("Are you sure?")) {
        this.loading = !this.loading; //true, show loading icon
        axios
          .delete(`/phonebook/${id}`, this.$data.list)
          .then(response => {
            this.lists.splice(key, 1);
            this.loading = !this.loading; //false, hide loading icon
          })
          .catch(error => (this.errors = error.response.data.errors));
      }
      console.log(`${key} ${id}`);
    },
    //close window
    close() {
      this.addActive = "";
      this.showActive = "";
      this.updateActive = "";
    }
  }
};
</script>
