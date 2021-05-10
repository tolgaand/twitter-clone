<template>
  <q-list>
    <transition-group
      appear
      enter-active-class="animated fadeIn slow"
      leave-active-class="animated fadeOut slow"
    >
      <q-item class="q-py-md tweet" v-for="tweet in tweets" :key="tweet.id">
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img :src="tweet.user.avatarURL" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>{{ tweet.user.name }} </strong>
            <span class="text-grey-7">@{{ tweet.user.nickname }}</span>
            &bull;
            <br class="lt-md" />
            <span class="text-grey-7">{{ tweet.time | formatDate }}</span>
          </q-item-label>
          <q-item-label class="tweet-content text-body1">
            {{ tweet.content }}
          </q-item-label>
          <div class="row tweet-icons justify-between q-mt-sm">
            <q-btn
              flat
              round
              color="grey"
              size="sm"
              icon="far fa-comment"
            ></q-btn>
            <q-btn
              flat
              round
              color="grey"
              size="sm"
              icon="fas fa-retweet"
            ></q-btn>
            <q-btn
              flat
              round
              size="sm"
              :icon="tweet.liked ? 'fas fa-heart' : 'far fa-heart'"
              :color="tweet.liked ? 'pink' : 'grey'"
              @click="$emit('toggleLiked', tweet.id)"
            ></q-btn>
            <q-btn
              flat
              round
              color="grey"
              size="sm"
              icon="fas fa-trash"
              @click="$emit('deleteTweet', tweet.id)"
            ></q-btn>
          </div>
        </q-item-section>
      </q-item>
    </transition-group>
  </q-list>
</template>

<script>
import moment from "moment-timezone";

export default {
  props: ["tweets"],
  data() {
    return {
      moment
    };
  },
  filters: {
    formatDate(date) {
      return moment(date)
        .locale("tr")
        .fromNow();
    }
  }
};
</script>
