<template>
  <div class="card-item grid">
    <div class="card-item__side -front flex direction-column">
      <div class="card-item__logo flex">
        <span class="big-circle"></span>
        <span class="small-circle"></span>
      </div>
      <div class="card-item__content grid">
        <div class="card-item__number">
          <p>0000 0000 0000 0000</p>
        </div>
        <div class="card-item__name">Rodrigo Castillo D</div>
        <div class="card-item__date">00/00</div>
      </div>
    </div>
    <div class="card-item__side -back grid">
      <div class="card-item__bar"></div>
      <div class="card-item__cvc">
        <span>000</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardComponent",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card-item {
  --gap: 2.5rem;
}
.card-item__side {
  border-radius: 0.625rem;
  height: 18.75rem;
  width: 31.25rem;
  &.-front {
    background-image: url("../assets/images/bg-card-front.png");
    background-size: cover;
    background-repeat: no-repeat;
    justify-content: space-between;
    padding: 2.5rem;
  }
  &.-back {
    background-color: var(--grey-color);
    margin-left: 6.25rem;
    padding-block: 2.5rem;
    text-align: center;
  }
}
.card-item__logo {
  --gap: 1.25rem;
  align-items: center;
  & > * {
    border-radius: 50%;
  }
  .big-circle {
    background-color: var(--white-color);
    height: 3.125rem;
    width: 3.125rem;
  }
  .small-circle {
    border: 1px solid var(--white-color);
    height: 1.5625rem;
    width: 1.5625rem;
  }
}
.card-item__content {
  --gap: 0.625rem;
  grid-template-columns: repeat(2, 1fr);
  > * {
    color: var(--white-color);
    font-weight: var(--fw-light);
  }
}
.card-item__name {
  letter-spacing: 0.125rem;
  text-transform: uppercase;
}
.card-item__number {
  grid-column: 1 / -1;
  > p {
    color: var(--white-color);
    font-size: 1.625rem;
    letter-spacing: 0.1875rem;
  }
}
.card-item__date {
  text-align: right;
}

.card-item__bar {
  background-color: var(--dark-grey-color);
  height: 3.125rem;
  width: 100%;
}
</style>
