<template>
    <div v-if="BookIDProp" id="book-details">
        <ApolloQuery :query="require('../graphql/SingleBook.gql')" :variables="{ BookIDProp }">
        <template slot-scope="{ result: { loading, error, data } }">
          <!-- Result -->
          <div v-if="data">

             <h2>{{data.Book.Name}}</h2>
            <p>{{data.Book.Genre}}</p>
            <p>{{data.Book.Author.Name}}</p>
            <p>All Books By The Author:</p>
            <ul class="other-books">
                <li v-for="Book in data.Book.Author.Books" :key="Book.id">{{Book.Name}}</li>
            </ul>  


          </div>

          <!-- No result -->
          <div v-else-if="loading">Loading...</div>

          <!-- No result -->
          <div v-else>No result :(</div>
        </template>
      </ApolloQuery>
    </div>
</template>

<script>
    export default {
        props: {
            BookIDProp: {
                type: String,
                required: false,
            }
        }
    }
</script>

<style scoped>

</style>