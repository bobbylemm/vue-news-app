<template>
  <div class="mt5">
    <div class="garamond">
      <ul class="list pl0 ml0 center mw7 ba b--light-silver br2">
        <li class="ph3 pv3 bb b--light-silver" v-for="item in items" :key="item.id">
          <div class="details bb mv3 b--light-gray">
            <span class="b calisto">This was written by</span>
            <nuxt-link :to="'/user/' + item.by" class="ttc link">{{item.by}}</nuxt-link>
            {{item.time}}
          </div>
          <div class="title bb mv3 b--light-gray">
            <span class="b">News Title:</span>
            {{item.title}}
            <a :href="item.url">Read more</a>
          </div>
          <div class="score bb mv3 b--light-gray">
            <span class="b">This news scored</span>
            {{item.score}}
          </div>
          <template v-if="item.descendants">
            <div class="comments bb mv3 b--light-gray">{{item.descendants || 0}} comments</div>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["users", "items"])
};
</script>