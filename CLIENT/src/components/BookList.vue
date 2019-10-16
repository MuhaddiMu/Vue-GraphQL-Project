<template>
  <div>
    <ul id="Book-List">
      <ApolloQuery :query="require('../graphql/BookLists.gql')">
        <template slot-scope="{ result: { loading, error, data } }">
          <!-- Result -->
          <div v-if="data">
            <li @click="GetSingleBook(Book.id)" v-for="Book in data.Books" :key="Book.id">{{ Book.Name }}</li>
          </div>

          <!-- No result -->
          <div v-else-if="loading">Loading...</div>

          <!-- No result -->
          <div v-else>No result :(</div>
        </template>
      </ApolloQuery>
    </ul>
    <BookDetail :BookIDProp='BookID' />
  </div>
</template>

<script>
import BookDetail from "./BookDetail"
export default {
  components: {
    BookDetail
  },
  data() {
    return {
      BookID: null
    }
  },
  methods: {
    GetSingleBook(Data){
      this.BookID = Data
    }
  }
}
</script>

<style scoped></style>
