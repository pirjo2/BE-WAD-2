<template>
  <div class="Header">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/signup">Signup</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

.Header {
  padding-top: .8em;
  padding-bottom: .4em;
  border: 1px solid #938999;
  background-color: #C4B7CB;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  border-radius: 1px;
  display: block;
}
nav ul {
  list-style: none;
  padding: 0;
  display: flex; /* Display the list items in a row */
}

nav ul li {
  margin-right: 15px;
}

nav ul li:last-child {
  margin-right: 0;
}

nav a {
  padding: 5px 10px;
  text-transform: uppercase;
  color: #000000;
  font-size: .99em;
  text-decoration: none;
}

nav a:hover {
  background-color: #cadede;
  color: #000000;
  border-radius: 15%;
}

nav a.router-link-exact-active {
  color: #860CE8;
}
</style>