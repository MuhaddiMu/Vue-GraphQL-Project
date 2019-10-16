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

#app h1{
  color: #444;
  text-align: center;
}

#app {
  padding: 0px;
  box-sizing: border-box;
  width: 60%;
  height: 100%;
}

#Book-List {
  padding: 0;
}

#Book-List li{
  display: inline-block;
  margin: 12px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #88004F;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.3);
  cursor: pointer;
  color: #88004F;
}

form {
  background: #fff;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 400px;
}

form .field{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}    

form label {
  text-align: right;
  padding: 6px;
}

form select, form input {
  margin: 4px;
  padding: 6px;
  box-sizing: border-box;
} 

form button {
  color: #fff;
  font-size: 2em;
  background: #AD1457;
  border: 0;
  padding: 0 10px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 10px;
}
#book-details {
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  background-color: #AD1457;
  padding: 30px;
  overflow: auto;
  box-shadow: -2px -3px 5px rgba(0,0,0,0.3);
  box-sizing: border-box;
  color: #fff;
}

body {
  background-color: #eee;
  font-weight: 700;
}
</style>
