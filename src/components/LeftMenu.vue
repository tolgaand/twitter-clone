<template>
  <q-drawer show-if-above v-model="left" side="left" bordered :width="283">
    <q-icon
      name="fab fa-earlybirds"
      size="lg"
      color="primary"
      class="q-pa-md"
    />
    <q-list>
      <q-item to="/" clickable v-ripple exact>
        <q-item-section avatar>
          <q-icon name="home" size="md" />
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
      </q-item>
      <q-item to="/about" clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="help" size="md" />
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  data() {
    return {
      left: false
    };
  },
  watch: {
    left(data) {
      this.$root.$emit("changeLeftMenu", data);
    }
  },
  mounted() {
    this.$root.$on("changeLeftMenu", data => {
      this.left = data;
    });
  }
};
</script>
<style></style>
