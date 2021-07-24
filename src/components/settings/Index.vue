<template>
  <div class="settings">
    <v-tabs v-model="tab" align-with-title>
      <v-tab v-for="item in tabItems" :key="item" class="ml-0">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems" :key="item">
        <v-card>
          <v-card-text>
            <General v-if="item === tabItems[0]" />
            <Styling v-if="item === tabItems[1]" />
            <Manage v-if="item === tabItems[2]" />
            <Developers v-if="item === tabItems[3]" />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import General from "./General";
const Styling = () => import("./Styling");
const Manage = () => import("./Manage");
const Developers = () => import("./Developers");

export default {
  components: {
    General,
    Styling,
    Manage,
    Developers
  },

  data() {
    return {
      tabItems: ["General", "Styling", "Users & offices", "Developers"],
      tab: null
    };
  }
};
</script>

<style lang="scss">
.settings {
  max-width: 700px;
  margin: 40px auto;
  //   margin-top: 40px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;

  .v-tabs-slider {
    display: none;
  }

  .v-tabs {
    .v-tabs-bar {
      background-color: #569789 !important;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      text-transform: initial;

      .v-slide-group__prev {
        display: none !important;
      }

      .v-tab {
        text-transform: initial;
        color: white !important;
        letter-spacing: 0;

        &.v-tab--active {
          color: #569789 !important;
          font-weight: 700;
          background-color: white;
          border: 1px solid #d4d4d5;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          border-bottom: 0;
        }
      }
    }
  }

  .v-tabs-items {
    border: 1px solid #d4d4d5;
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}

@media screen and (max-width: 768px) {
  .settings {
    margin-left: 16px;
    margin-right: 16px;
  }
}
</style>
