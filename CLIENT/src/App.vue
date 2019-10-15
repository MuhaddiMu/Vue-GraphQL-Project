<template>
  <div id="app">
    <div id="nav">
      <h1>Muhaddi's Reading List</h1>
      <BookList/>
      <AddBook/>
    </div>
  </div>
</template>

<script>
import BookList from './components/BookList';
import AddBook from './components/AddBook';


export default {
  components: {
    BookList,
    AddBook
  }
}
</script>

<style>
#app {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  background-color: #eee;
}
</style>
