<template>
  <div>
      <FirstScreen />
      <EventBlock />
      <NewsBlock />
      <PublicationsBoard />
      <WorkShop />
      <PolicyBoard />
  </div>
</template>

<script>
import FirstScreen from './main/firstScreen.vue'
import EventBlock from './main/eventBlock.vue'
import NewsBlock from './main/newsBlock.vue'
import PublicationsBoard from './main/publicationsBoard.vue'
import WorkShop from './main/workShop.vue'
import PolicyBoard from './main/policyBoard.vue'

export default {
  name: 'HomeView',
  components: {
    FirstScreen,
    EventBlock,
    NewsBlock,
    PublicationsBoard,
    WorkShop,
    PolicyBoard
  }
}
</script>
