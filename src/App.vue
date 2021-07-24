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
  font-family: Open Sans, "Helvetica Neue", Arial, Helvetica, sans-serif !important;
  // font-family: "Open Sans", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  font-size: 14px;
  background-color: #eaeaea;
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

hr {
  border: none;
  height: 1px !important;
  background-color: rgba(34, 36, 38, 0.15);
}

.tab-title {
  color: rgba(0, 0, 0, 0.87);
  font-weight: 700;
  font-size: 18px;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Montserrat", sans-serif !important;
}

.v-input {
  font-size: 14px !important;
}
.v-btn {
  letter-spacing: 0 !important;
  text-transform: unset !important;
}

.btn-no-bg {
  background: transparent none !important;
  color: rgba(0, 0, 0, 0.6) !important;
  font-weight: 400;
  border-radius: 0.28571429rem;
  text-transform: none;
  text-shadow: none !important;
  box-shadow: 0 0 0 1px rgb(34 36 38 / 15%) inset;
}

.btn-main {
  background-color: #569789;
  background-image: linear-gradient(60deg, #1d4357, #569789);
  box-shadow: 0 0 0 0 rgb(34 36 38 / 15%) inset;
  color: #fff !important;
  font-weight: 700 !important;
  text-shadow: none;
}

.btn-delete {
  box-shadow: 0 0 0 1px #f90066 inset !important;
  color: #f90066 !important;
}
</style>
