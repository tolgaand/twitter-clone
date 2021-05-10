<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <new-post v-on:addTweet="addTweet($event)" />

      <q-separator class="divider" size="10px" color="grey-2" />

      <Posts
        :tweets="tweets"
        @deleteTweet="deleteTweet($event)"
        @toggleLiked="toggleLiked($event)"
      />
    </q-scroll-area>
  </q-page>
</template>

<script>
import db from "src/boot/firebase";

import NewPost from "src/components/NewPost.vue";
import Posts from "src/components/Posts.vue";

export default {
  components: { NewPost, Posts },
  name: "PageHome",
  data: () => {
    return {
      tweets: []
    };
  },

  methods: {
    addTweet(tweet) {
      if (tweet != undefined)
        db.collection("tweets")
          .add(tweet)
          .then(() => {})
          .catch(error => {
            console.error("Error writing document: ", error);
          });
    },
    deleteTweet(id) {
      db.collection("tweets")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch(error => {
          console.error("Error removing document: ", error);
        });
    },
    toggleLiked(id) {
      const tweet = this.tweets.find(item => item.id == id);
      db.collection("tweets")
        .doc(id)
        .update({
          liked: !tweet.liked
        })
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch(error => {
          console.error("Error removing document: ", error);
        });
    }
  },
  mounted() {
    db.collection("tweets").onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        let document = change.doc.data();
        document.id = change.doc.id;
        if (change.type === "added") {
          this.tweets.unshift(document);
        }
        if (change.type === "modified") {
          const index = this.tweets.findIndex(item => item.id == document.id);
          Object.assign(this.tweets[index], document);
        }
        if (change.type === "removed") {
          const tweetIndex = this.tweets.findIndex(
            item => item.id == document.id
          );
          if (tweetIndex != -1) this.tweets.splice(tweetIndex, 1);
        }
      });
    });
  }
};
</script>

<style lang="sass">
.new-tweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.tweet:not(:first-child)
  border-top: 1px solid rgba(0,0,0,0.12)
.tweet-content
  white-space: pre-line
.tweet-icons
  margin-left: -5px
</style>
