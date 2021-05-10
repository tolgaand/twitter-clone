<template>
  <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
    <div class="col-12">
      <q-input
        bottom-slots
        v-model="newTweetContent"
        placeholder="What's happening?"
        counter
        maxlength="280"
        autogrow
        class="new-tweet"
      >
        <template v-slot:before>
          <q-avatar size="xl">
            <img
              src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
            />
          </q-avatar>
        </template>
      </q-input>
    </div>
    <div class="col-12 column items-end">
      <q-btn
        unelevated
        rounded
        color="primary"
        label="Send Tweet"
        no-caps
        :disable="!newTweetContent"
        class="q-mt-lg"
        @click="addTweet"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTweetContent: null,
      newTweet: {}
    };
  },
  methods: {
    addTweet() {
      const newTweet = {
        content: this.newTweetContent,
        time: Date.now(),
        liked: false,
        user: {
          name: "Anonymous",
          nickname: "anonymous",
          avatarURL:
            "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
        }
      };
      this.$emit("addTweet", newTweet);
      this.newTweetContent = "";
    }
  }
};
</script>

<style></style>
