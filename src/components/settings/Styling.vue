<template>
  <div class="styling-settings">
    <h3 class="text-center tab-title mb-2">Floor plan language and logo</h3>
    <hr class="mb-2" />
    <span>
      Style options will be applied to all new floor plans in your account.
    </span>

    <v-select
      class="mt-5"
      :items="items"
      outlined
      label="Language"
      dense
      :height="40"
      hide-details
    ></v-select>

    <v-select
      class="mt-5"
      :items="units"
      outlined
      label="Units"
      dense
      :height="40"
      hide-details
    ></v-select>

    <div class="setting-logo mt-5">
      <div>
        <div class="placeholder-logo">
          <img v-if="imgSrc" :src="imgSrc" alt="" />
          <img
            v-else
            src="https://4197r62cmrjs32n9dndpi2o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/square-placeholder.jpg"
            alt=""
          />

          <div v-if="imgSrc" @click="viewImage">
            <feather type="eye" stroke-width="3" fill="white"></feather>
          </div>
        </div>
        <div class="mt-3">
          <v-btn
            depressed
            v-if="imgSrc"
            class="btn btn-soft-danger width-md mr-2"
            @click="handleDelete"
            color="error"
          >
            <feather type="trash" size="14" stroke-width="3"></feather>

            Clear
          </v-btn>
          <v-btn
            class="btn width-md"
            depressed
            :color="`${imgSrc ? `success` : ''}`"
            @click="!imgSrc ? handleUpload() : handleSubmit()"
          >
            <div v-if="!imgSrc" class="d-flex align-center">
              <feather type="plus" size="14" stroke-width="3"></feather>
              Add logo
            </div>
            <div v-else>
              <feather type="check" size="14" stroke-width="3"></feather>
              Submit
            </div>
          </v-btn>
        </div>

        <input
          v-show="false"
          ref="input"
          type="file"
          accept="image/*"
          @change="onChange"
        />
      </div>
    </div>

    <h3 class="text-center tab-title mb-2 mt-5">Floor plan theme</h3>
    <hr class="mb-2" />

    <v-layout row wrap align-center justify-center no-gutters setting-color>
      <v-flex xs12 md6 my-2 px-2>
        <div class="d-flex">
          <v-swatches
            v-model="wetspace_color"
            fallback-ok-text="Select"
            show-fallback
            show-border
            swatch-size="39"
            :trigger-style="triggerColorStyle"
          ></v-swatches>
          <v-text-field
            label="Wetspce color"
            disabled
            outlined
            dense
            hide-details=""
            v-model="wetspace_color"
          ></v-text-field>
        </div>
      </v-flex>
      <v-flex xs12 md6 my-2 px-2>
        <div class="d-flex">
          <v-swatches
            v-model="bedroom_color"
            fallback-ok-text="Select"
            show-fallback
            show-border
            swatch-size="39"
            :trigger-style="triggerColorStyle"
          ></v-swatches>
          <v-text-field
            label="Bedroom color"
            disabled
            outlined
            dense
            hide-details=""
            v-model="bedroom_color"
          ></v-text-field>
        </div>
      </v-flex>
      <v-flex xs12 md6 my-2 px-2>
        <div class="d-flex">
          <v-swatches
            v-model="floor_color"
            fallback-ok-text="Select"
            show-fallback
            show-border
            swatch-size="39"
            :trigger-style="triggerColorStyle"
          ></v-swatches>
          <v-text-field
            label="Floor color"
            disabled
            outlined
            dense
            hide-details
            v-model="floor_color"
          ></v-text-field>
        </div>
      </v-flex>
      <v-flex xs12 md6 my-2 px-2>
        <div class="d-flex">
          <v-swatches
            v-model="wall_color"
            fallback-ok-text="Select"
            show-fallback
            show-border
            swatch-size="39"
            :trigger-style="triggerColorStyle"
          ></v-swatches>
          <v-text-field
            label="Wall color"
            disabled
            outlined
            dense
            hide-details
            v-model="wall_color"
          ></v-text-field>
        </div>
      </v-flex>
    </v-layout>

    <!-- <v-container class="setting-color">
      <v-row>
        <v-col xs12 md6>
          <div class="d-flex">
            <v-swatches
              v-model="wetspace_color"
              fallback-ok-text="Select"
              show-fallback
              show-border
              swatch-size="39"
              :trigger-style="triggerColorStyle"
            ></v-swatches>
            <v-text-field
              label="Wetspce color"
              disabled
              outlined
              dense
              hide-details=""
              v-model="wetspace_color"
            ></v-text-field>
          </div>
        </v-col>
        <v-col xs12 md6>
          <div class="d-flex">
            <v-swatches
              v-model="bedroom_color"
              fallback-ok-text="Select"
              show-fallback
              show-border
              swatch-size="39"
              :trigger-style="triggerColorStyle"
            ></v-swatches>
            <v-text-field
              label="Bedroom color"
              disabled
              outlined
              dense
              hide-details=""
              v-model="bedroom_color"
            ></v-text-field>
          </div>
        </v-col>
        <v-col xs12 md6>
          <div class="d-flex">
            <v-swatches
              v-model="floor_color"
              fallback-ok-text="Select"
              show-fallback
              show-border
              swatch-size="39"
              :trigger-style="triggerColorStyle"
            ></v-swatches>
            <v-text-field
              label="Floor color"
              disabled
              outlined
              dense
              hide-details
              v-model="floor_color"
            ></v-text-field>
          </div>
        </v-col>
        <v-col xs12 md6>
          <div class="d-flex">
            <v-swatches
              v-model="wall_color"
              fallback-ok-text="Select"
              show-fallback
              show-border
              swatch-size="39"
              :trigger-style="triggerColorStyle"
            ></v-swatches>
            <v-text-field
              label="Wall color"
              disabled
              outlined
              dense
              hide-details
              v-model="wall_color"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
    </v-container> -->

    <v-select
      class="mt-5"
      :items="resolutions"
      outlined
      label="Resolution"
      dense
      :height="40"
      hide-details
    ></v-select>

    <v-text-field
      class="mt-5"
      v-model="degree"
      label="Door swing degree"
      outlined
      dense
      type="number"
    ></v-text-field>

    <div class="mt-5">
      <v-checkbox
        class="my-3"
        v-model="checkbox1"
        label="Measurement Arrow"
        hide-details
      ></v-checkbox>
      <v-checkbox
        class="my-3"
        v-model="checkbox2"
        label="No fill fixed furniture"
        hide-details
      ></v-checkbox>
      <div class="my-3 d-flex align-center">
        <v-checkbox
          v-model="checkbox3"
          label="Add estimated total area element to the floor plan."
          hide-details
        ></v-checkbox>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <feather
              class="ml-2"
              type="alert-circle"
              size="14"
              v-bind="attrs"
              v-on="on"
            ></feather>
          </template>
          <span>test</span>
        </v-tooltip>
      </div>
      <div class="my-3 d-flex align-center">
        <v-checkbox
          v-model="checkbox4"
          label="Add compass to the floor plan."
          hide-details
        ></v-checkbox>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <feather
              class="ml-2"
              type="alert-circle"
              size="14"
              v-bind="attrs"
              v-on="on"
            ></feather>
          </template>
          <span>test 1</span>
        </v-tooltip>
        <div class="badge">
          Experimental
        </div>
      </div>
    </div>

    <div class="setting-disclaimer mt-5">
      <p class="mb-2">
        Disclaimer Text (Leave empty for default, maximum 85 characters)
      </p>
      <span>
        Please note, that CubiCasa shall take no responsibility for the
        disclaimers or changes you make to the floorplan.
      </span>
      <v-text-field
        class="mt-2"
        label="SIZES AND DIMENSIONS ARE APPROXIMATE. ACTUAL MAY VARY."
        single-line
        outlined
        dense
      ></v-text-field>
    </div>

    <div class="my-5 text-center">
      <v-btn depressed class="btn-no-bg mr-2">
        <span>Undo</span>
      </v-btn>

      <v-btn depressed class="btn-main">
        <span>Save settings</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import UploadImage from "@/mixins/upload-image";

import VSwatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.css";

export default {
  mixins: [UploadImage],
  components: {
    VSwatches
  },
  data() {
    return {
      items: ["English", "Finnish", "Vietnamese"],
      units: ["Metric", "Imperial", "Both"],
      resolutions: [
        "4:3 – 4000x3000px (high resolution)",
        "4:3 – 2000x1500px (web optimized)",
        "3:2 – 4000x2667px (high resolution)",
        "3:2 – 2000x1333px (web optimized)"
      ],
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: true,
      degree: 40,
      imgSrc: "",
      bedroom_color: "#eaeaea",
      wetspace_color: "#777777",
      wall_color: "#fffff",
      floor_color: "#fffff",
      triggerColorStyle: {
        width: "40px",
        height: "40px",
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
        border: "1px solid #9e9e9e"
        // borderLeft: "1px solid #9e9e9e",
        // borderBottom: "1px solid #9e9e9e"
        // borderBottom: "1px solid #9e9e9e"
      }
    };
  },
  created() {
    console.log("created styling");
  },

  methods: {
    handleUpload() {
      this.$refs.input.click();
    },

    handleDelete() {
      this.imgSrc = null;
    },

    handleSubmit() {
      console.log("submit");
    },

    viewImage() {
      this.visible = true;
    },

    onChange(data) {
      this.loading = true;
      const file = data.target.files[0];
      if (file) {
        this.$_uploadImage_readImage(file).then(baseFile => {
          this.imgSrc = baseFile;
          this.loading = false;
        });
      }
    }
  }
};
</script>

<style lang="scss">
.styling-settings {
  .v-input--selection-controls {
    padding: 0;
    margin: 0;
  }
  .badge {
    background-color: #fbbd08 !important;
    border-color: #fbbd08 !important;
    color: #fff !important;
    font-size: 10px;
    font-weight: 700;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 4px;
  }

  .setting-disclaimer {
    p {
      font-weight: 700;
      color: rgba(0, 0, 0, 0.87);
    }
  }
  .placeholder-logo {
    width: 110px;
    height: 110px;
    position: relative;
    background: #eaeaea;
    overflow: hidden;

    &:hover {
      div {
        bottom: 0;
      }
    }

    img {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      max-width: 100%;
      max-height: 100%;
    }

    div {
      width: 110px;
      height: 110px;
      position: absolute;
      background: #111827;
      opacity: 0.65;
      transition: all 0.3s;
      bottom: -100%;
      cursor: pointer;

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .setting-color {
    fieldset {
      border-left: 0;
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
    }
  }
}
</style>
