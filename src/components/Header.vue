<template>
  <div class="header d-flex">
    <div class="header-left d-flex desktop-mode">
      <a href="/" class="header-item">
        <img
          src="https://brand-assets-cc.s3.amazonaws.com/CUBICASA/cubicasa-logo-white.svg"
          alt=""
          width="100"
        />
      </a>
      <a href="javascript;:" class="header-item">
        <feather type="list" size="18" stroke-width="3"></feather>
        <span class="mb-0">List & Search</span>
      </a>
      <a href="javascript;:" class="header-item">
        <feather type="plus" size="16" stroke-width="4"></feather>
        <span class="mb-0">New Order</span>
      </a>
    </div>
    <div class="header-left mobile-mode">
      <div
        class="button-menu-mobile open-left d-flex"
        @click="drawer = !drawer"
      >
        <feather type="menu"></feather>
      </div>
    </div>
    <div class="header-right">
      <v-menu
        offset-y
        :rounded="'0'"
        content-class="header-menu"
        style="right: 0px; transform-origin: right top;"
      >
        <template v-slot:activator="{ attrs, on }">
          <v-btn v-bind="attrs" v-on="on">
            <feather
              type="user"
              size="16"
              stroke-width="2"
              fill="white"
            ></feather>
            Nguyen Le Thu Hien Huy
            <div class="arrow-down"></div>
          </v-btn>
        </template>

        <v-list>
          <v-list-item link class="menu-list-item">
            <v-list-item-icon>
              <feather type="user" size="16" fill="black"></feather>
            </v-list-item-icon>
            <v-list-item-content class="text-left">
              <v-list-item-title v-text="`My profile`"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link class="menu-list-item">
            <v-list-item-icon>
              <feather type="settings" size="16"></feather>
            </v-list-item-icon>
            <v-list-item-content class="text-left">
              <v-list-item-title v-text="`Settings`"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link class="menu-list-item">
            <v-list-item-icon>
              <feather type="log-out" size="16"></feather>
            </v-list-item-icon>
            <v-list-item-content class="text-left">
              <v-list-item-title v-text="`Log out`"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      class="left-bar bg-main-color"
      absolute
      left
      temporary
      width="280"
    >
      <div class="logo">
        <a href="javascript: void(0);" class="d-flex">
          <img
            src="https://brand-assets-cc.s3.amazonaws.com/CUBICASA/cubicasa-logo-white.svg"
            width="160"
          />
        </a>
      </div>
      <div>
        <a href="javascript;:" class="d-flex space-between">
          <span class="mb-0">List & Search</span>
          <feather type="list" size="18" stroke-width="3"></feather>
        </a>
      </div>
      <div>
        <a href="javascript;:" class="d-flex space-between">
          <span class="mb-0">New Order</span>
          <feather type="plus" size="18" stroke-width="3"></feather>
        </a>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style lang="scss" scoped>
//
// header.scss
//
$header-height: 40px;

.header {
  background-color: #163241;
  height: $header-height;
  justify-content: space-between;

  .header-left,
  .header-right {
    align-items: center;
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    position: relative;

    a {
      color: #fff;
    }

    .header-item {
      height: $header-height;

      .dropdown-lg {
        padding: 0;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.08);
      }

      &::before {
        position: absolute;
        content: "";
        top: 0;
        height: 100%;
        width: 1px;
        background: rgba(255, 255, 255, 0.08);
      }
    }
  }

  .header-left {
    .header-item {
      display: flex;
      align-items: center;
      position: relative;
      padding: 0 16px;
      color: rgba(255, 255, 255, 0.9);

      &::before {
        right: 0;
      }
    }
  }

  .header-right {
    .arrow-down {
      margin-left: 10px;
    }

    button {
      height: $header-height;
      color: rgba(255, 255, 255, 0.9);
      background-color: #163241;
      border: none;
      outline: none;
      box-shadow: none;
      text-transform: inherit;
      border-radius: 0;
      border-left: 1px solid rgba(255, 255, 255, 0.08);
      font-weight: 400;
      letter-spacing: 0.01em;
    }

    .header-item {
      align-items: center;
      cursor: pointer;
    }

    .menu-item {
      a {
        color: rgba(0, 0, 0, 0.87);
      }

      &:hover {
        background: rgba(0, 0, 0, 0.05);
        color: rgba(0, 0, 0, 0.95);
      }
    }
  }

  .mobile-mode {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .header {
    .desktop-mode {
      display: none !important;
    }

    .mobile-mode {
      display: block;

      .button-menu-mobile {
        padding: 0 18px;
        align-items: center;
        height: $header-height;

        &::before {
          position: absolute;
          content: "";
          top: 0;
          right: 0;
          height: 100%;
          width: 1px;
          background: rgba(255, 255, 255, 0.08);
        }
      }
    }

    .left-bar {
      a {
        color: white;
        font-weight: 500;
        font-size: 16px;
        padding: 14px 18px;
        position: relative;
        width: 100%;

        &::before {
          position: absolute;
          content: "";
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
        }
      }

      .logo {
        position: relative;

        a {
          justify-content: center;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.header-menu {
  .menu-list-item {
    height: 36px !important;
    padding: 0 8px;
    .v-list-item__icon {
      margin: 12px !important;
    }
  }
}

.v-menu__content {
  box-shadow: 0 !important;
}
</style>
