<template>
  <div class="home">
    <div class="card-section">
      <div class="card-section-bg"></div>
      <div class="card"></div>
    </div>
    <div class="form-section">
      <form action="">
        <BaseInput
          label="Cardholder Name"
          v-model="cardData.name"
          placeholder="e.g. Jane Appleseed"
          type="text"
        />
        <BaseInput
          label="Card Number"
          v-model="cardData.number"
          placeholder="e.g. 1234 5678 9123 0000"
          type="number"
        />
      </form>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
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
  components: { BaseInput },
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
    grid-template-columns: 70% 30%;
  }
}
.card-section-bg {
  background-image: url(../assets/images/bg-main-desktop.png);
  background-size: cover;
  background-repeat: no-repeat;
  grid-column: 1 / 2;
  grid-row: 1 / -1;
}
</style>
