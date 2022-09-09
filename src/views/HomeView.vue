<template>
  <div class="home">
    <div class="card-section">
      <div class="card-section-bg"></div>
      <div class="card-wrapper grid">
        <Card />
      </div>
    </div>
    <div class="form-section grid">
      <form class="grid">
        <BaseInput
          label="Cardholder Name"
          v-model="cardData.name"
          placeholder="e.g. Jane Appleseed"
          :class="{ error: $v.card.name.$error }"
          @blur="$v.card.name.$touch()"
        />
        <template v-if="$v.card.name.$error">
          <span v-if="!$v.card.name.required" class="errorMessage"
            >Name is required</span
          >
        </template>
        <BaseInput
          label="Card Number"
          :number="true"
          v-model="cardData.number"
          placeholder="e.g. 1234 5678 9123 0000"
          :class="{ error: $v.card.number.$error }"
          @blur="$v.card.number.$touch()"
        />
        <template v-if="$v.card.number.$error">
          <span v-if="!$v.card.number.required" class="errorMessage"
            >Card number is required</span
          >
        </template>
      </form>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import BaseInput from "@/components/BaseInput.vue";
import Card from "@/components/Card.vue";

export default {
  name: "HomeView",
  data() {
    return {
      cardData: {
        name: "",
        number: "",
        dateMonth: "",
        dateYear: "",
        cvc: "",
      },
    };
  },
  components: { BaseInput, Card },
  validations: {
    card: {
      name: { required },
      number: { required },
      dateMonth: { required },
      dateYear: { required },
      cvc: { required },
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  height: 100vh;
  @media (min-width: 48rem) {
    grid-template-columns: repeat(2, 1fr);
  }
}
.card-section {
  display: grid;
  @media (min-width: 48rem) {
    grid-template-columns: 60% 40%;
  }
}
.card-section-bg {
  background-image: url(../assets/images/bg-main-desktop.png);
  background-size: cover;
  background-repeat: no-repeat;
  grid-column: 1 / 2;
  grid-row: 1 / -1;
}
.card-wrapper {
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  place-items: center;
}
.form-section {
  grid-column: 2 / -1;
  align-items: center;
  form {
    max-width: 28.125rem;
  }
  .errorMessage {
    font-size: 0.8125rem;
    font-weight: var(--fw-light);
    color: red;
  }
}
</style>
