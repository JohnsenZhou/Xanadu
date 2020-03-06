<template>
  <ParentLayout>
    <template #sidebar-top>
      <Ads/>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import Ads from '@theme/components/Ads.vue'
export default {
  name: 'Layout',
  components: {
    ParentLayout,
    Ads
  }
}
</script>