<template>
  <q-drawer show-if-above v-model="right" side="right" bordered>
    <q-input rounded outlined class="q-ma-md" placeholder="Search Clone" dense>
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
    <q-list bordered padding separator>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">Education</q-item-label>
          <q-item-label class="text-weight-bold"
            >Something amazing happend!</q-item-label
          >
          <q-item-label caption
            >Secondary line text. Lorem ips LeftMenuum dolor sit amet,
            consectetur adipiscit elit.</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">Education</q-item-label>
          <q-item-label class="text-weight-bold"
            >Something amazing happend!</q-item-label
          >
          <q-item-label caption
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">Education</q-item-label>
          <q-item-label class="text-weight-bold"
            >Something amazing happend!</q-item-label
          >
          <q-item-label caption
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.</q-item-label
          >
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  data() {
    return {
      right: false
    };
  }
};
</script>
<style></style>
