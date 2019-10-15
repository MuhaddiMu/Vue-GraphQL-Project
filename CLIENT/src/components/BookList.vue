<template>
  <div>
    <ul id="Book-List">
      <ApolloQuery
      :query="require('../graphql/BookLists.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Result -->
        <div v-if="data"><li v-for="Book in data.Books" :key="Book.id">{{Book.Name}}</li></div>

        <!-- No result -->
        <div v-else-if="loading">Loading...</div>

        <!-- No result -->
        <div v-else>No result :(</div>
      </template>
    </ApolloQuery>
    </ul>
  </div>
</template>


<style scoped>

</style>