<template>
  <div id="app">
    <v-app :ripple="false">
      <router-view />
    </v-app>
  </div>
</template>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // font-family: Open Sans, "Helvetica Neue", Arial, Helvetica, sans-serif !important;
  font-family: "Open Sans", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  font-size: 14px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

a {
  text-decoration: none;
}

.feather {
  margin-right: 3px;
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid white;
}

.bg-main-color {
  background-color: #163241 !important;
  color: white !important;
}

.d-flex {
  display: flex;
}

.space-between {
  justify-content: space-between;
}

.align-center {
  align-items: center;
}
</style>
