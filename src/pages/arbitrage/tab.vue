  <template>
   <div class="tab">
     <router-link tag="div" class="tab-item">
       <span class="tab-link">{{$t('tab.text1')}}</span>
     </router-link>
     <router-link tag="div" class="tab-item">
       <span class="tab-link">{{$t('tab.text2')}}</span>
     </router-link>
     <router-view></router-view>
   </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 .tab
     width 100%
     display flex
     flex-direction row
     justify-content space-between
     .tab-item
       flex 1
       text-align center
       .tab-link
         &.router-link-active
         .tab-link
          border-bottom 1px solid #3653f5
</style>
