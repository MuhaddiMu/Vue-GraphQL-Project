<template>
  <div>
    <ApolloMutation
      :mutation="require('../graphql/NewBook.gql')"
      :variables="{
        Title,
        Genre,
        AuthorID,
      }"
      class="form"
      @done="AddBook"
    >
      <template slot-scope="{ mutate }">
        <form @submit.prevent="AddBook && mutate()" id="add-book">
          <div class="field">
            <label>Book Title</label>
            <input v-model="Title" placeholder="Book Title" type="text" />
          </div>
          <div class="field">
            <label>Book Genre</label>
            <input v-model="Genre" placeholder="Book Genre" type="text" />
          </div>
          <div class="field">
            <label>Book Title</label>
            <select v-model="AuthorID">
              <option value="" selected disabled>Select Author</option>
              <option v-if="!Authors" disabled>Loading Authors</option>
              <option
                v-else
                v-for="Author in Authors"
                :key="Author.id"
                :value="Author.id"
                >{{ Author.Name }}</option
              >
            </select>
          </div>

          <button>+</button>
        </form>
      </template>
    </ApolloMutation>
  </div>
</template>

<script>
import gql from "graphql-tag"
export default {
  data() {
    return {
      Authors: null,
      AuthorID: "",
      Title: null,
      Genre: null
    }
  },

  methods: {
    AddBook() {
    }
  },

  apollo: {
    // Simple query that will update the 'hello' vue property
    Authors: gql`
      {
        Authors {
          Name
          Age
          id
        }
      }
    `
  }
}
</script>

<style scoped></style>
