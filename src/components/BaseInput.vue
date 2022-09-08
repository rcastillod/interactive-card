<template>
  <div class="form-group">
    <label v-if="label">{{ label }}</label>
    <input :value="value" v-bind="$attrs" @input="updateValue" />
    <span class="error">Name is required</span>
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
    value: [String, Number],
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
