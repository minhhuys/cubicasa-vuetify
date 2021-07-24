<template>
  <div class="general-settings">
    <h3 class="text-center tab-title mb-2">
      Basic Infomation
    </h3>
    <hr />

    <div class="info-setting mt-5">
      <v-text-field label="Name" outlined dense></v-text-field>

      <v-text-field
        label="VAT ID | required for EU based companies"
        outlined
        dense
      ></v-text-field>

      <div>
        <p class="mb-0" style="font-weight: 700; color: rgba(0,0,0,.87)">
          Country
        </p>
        <div>
          <img
            class="mr-3"
            src="https://www.norden.org/sites/default/files/styles/content_size_800/public/images/Finsk%2520flag106604.jpeg"
            width="16"
            height="11"
            alt=""
          />
          <span>FI</span>
        </div>
      </div>
      <v-checkbox
        v-model="checkbox"
        label="Allow collaborators to create orders without drafts"
        hide-details
      ></v-checkbox>

      <div class="mt-3">
        <p class="mb-2">Delivery emails send to:</p>
        <v-select
          v-model="emailTo"
          :items="emailList"
          label="Email"
          multiple
          chips
          outlined
          clearable
          dense
          deletable-chips
          small-chips
          :height="40"
          hide-details
        ></v-select>
      </div>
    </div>

    <h3 class="text-center tab-title mt-5 mb-2">
      Current plan
    </h3>
    <hr />

    <div class="plan-settings mt-5">
      <v-select
        v-model="plan"
        :items="plans"
        label="Change plan"
        multiple
        chips
        outlined
        clearable
        dense
        deletable-chips
        small-chips
        :height="40"
        hide-details
      ></v-select>

      <div class="credit-card mt-5">
        <div class="card-icon" @click="toggleHidden">
          <feather type="eye" class="icon-xs icon-dual"></feather>
        </div>
        <div class="card-logo-visa">
          <img src="@/assets/images/visa.png" width="30" alt="" />
        </div>
        <div class="card-description">
          <p class="card-number">
            <span>{{
              isHidden
                ? hidden_card_number.slice(0, 4)
                : card_number.slice(0, 4)
            }}</span>
            <span>{{
              isHidden
                ? hidden_card_number.slice(4, 8)
                : card_number.slice(4, 8)
            }}</span>
            <span>{{
              isHidden
                ? hidden_card_number.slice(8, 12)
                : card_number.slice(8, 12)
            }}</span>
            <span>{{
              isHidden
                ? hidden_card_number.slice(12, 16)
                : card_number.slice(12, 16)
            }}</span>
          </p>
          <div class="card-info d-flex">
            <p class="reset-mg card-info-expired">Thru: <span>11/21</span></p>
            <p class="reset-mg card-info-cvv">CVV: <span>999</span></p>
          </div>
          <h3 class="card-name">
            Nguyen Minh Huy
          </h3>
        </div>
      </div>
      <div class="credit-action text-center d-flex align-center">
        <feather type="refresh-cw" size="16" stroke-width="3"></feather>
        <p class="pa-2 mb-0">
          Update credit card
        </p>
      </div>

      <div class="plan-action my-5 d-flex">
        <v-btn depressed class="btn-no-bg mr-2">
          <feather type="slash" size="16"></feather>
          <span>Cancel subscription</span>
        </v-btn>

        <v-btn depressed class="btn-main">
          <feather type="list" size="16" stroke-width="3"></feather>
          <span>View invoces</span>
        </v-btn>
      </div>
    </div>
    <hr />

    <div class="my-5 text-center">
      <v-btn depressed class="btn-no-bg mr-2">
        <span>Undo</span>
      </v-btn>

      <v-btn depressed class="btn-main">
        <span>Save settings</span>
      </v-btn>
    </div>

    <h3 class="text-center tab-title mb-2">
      Delete account infomation
    </h3>
    <hr />

    <div class="text-center">
      <v-btn depressed class="btn-no-bg btn-delete mt-5 ">
        <span>Delete 'testing company'</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: false,
      emailTo: [],
      emailList: ["Alaska", "Hawaii", "California"],

      plan: ["pay-as-you-go President"],
      plans: ["pay-as-you-go President", "Premium"],

      card_number: "1234567898765432",
      hidden_card_number: "",

      isHidden: true
    };
  },

  created() {
    this.hiddenNumberCard();
  },

  mounted() {
    console.log("mounted general");
  },

  methods: {
    toggleHidden() {
      this.isHidden = !this.isHidden;
    },

    hiddenNumberCard() {
      let hidden =
        new Array(this.card_number.length - 3).join("*") +
        this.card_number.substr(this.card_number.length - 4, 4);
      this.hidden_card_number = hidden;
    }
  }
};
</script>

<style lang="scss">
.credit-card {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 300px;
  height: 170px;
  position: relative;
  border: 1px solid #d4d4d5;
  border-bottom: 0;

  .card-icon {
    position: absolute;
    top: -8px;
    left: -8px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    background: white;
  }

  .card-logo {
    position: absolute;
    top: 24px;
    right: 24px;
  }

  .card-logo-visa {
    position: absolute;
    bottom: 24px;
    right: 24px;
  }

  .card-description {
    position: absolute;
    left: 24px;
    bottom: 10%;
    color: rgba(0, 0, 0, 0.68);

    .card-name {
      font-size: 18px;
      font-weight: 700;
    }

    .card-number {
      font-size: 14px;
      font-weight: 600;

      span:not(:last-child) {
        margin-right: 24px;
      }
    }

    .card-info {
      font-size: 13px;
      font-weight: 600;
      justify-content: flex-start;

      > p {
        margin-right: 30px;
      }
    }
  }
}

.credit-action {
  width: 300px;
  border: 1px solid rgba(86, 151, 137, 0.85);
  color: rgba(86, 151, 137, 0.85);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
  justify-content: center;

  i.feather {
    transform: rotate(0deg);
    transition: all 0.5s ease;
    height: auto;
    width: auto;
  }

  &:hover {
    i {
      transform: rotate(180deg);
      transition: all 0.5s ease;
    }
  }
}

@media screen and (max-width: 769px) {
  .credit-card,
  .credit-action {
    width: 100%;
  }
  .plan-action {
    flex-direction: column;

    .btn-main {
      margin-bottom: 16px;
      order: 1;
    }

    .btn-no-bg {
      order: 2;
      margin-right: 0 !important;
    }
  }
}
</style>
