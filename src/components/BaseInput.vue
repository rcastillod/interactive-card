<template>
  <div class="form-group flex direction-column">
    <label v-if="label">{{ label }}</label>
    <input
      :class="{}"
      :value="value | formatCardNumber"
      v-bind="$attrs"
      @input="updateValue"
      v-on="listeners"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
    },
    number: {
      type: Boolean,
      default: false,
    },
    value: [String, Number],
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      };
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
  filters: {
    formatCardNumber(value) {
      // if (!this.number) return "";
      return value ? value.match(/.{1,4}/g).join(" ") : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  --gap: 0.5rem;
}
label {
  font-size: 0.875rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}
input {
  border: 1px solid var(--grey-color);
  border-radius: 0.3125rem;
  padding: 0.625em;
  &::placeholder {
    color: var(--grey-color);
  }
}
</style>
