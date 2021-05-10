<template>
  <q-header bordered class="bg-white text-black">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="left = !left" />

      <q-toolbar-title class="text-weight-bold">
        <span class="gt-sm">{{ $route.name }}</span>
        <q-icon
          class="header-icon q-pa-md lt-md"
          name="fab fa-earlybirds"
          size="sm"
          color="primary"
        ></q-icon>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
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
