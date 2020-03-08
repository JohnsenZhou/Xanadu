<template>
  <ParentLayout>
    <template #sidebar-top>
      <SidebarAds/>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import SidebarAds from '@theme/components/SidebarAds.vue'
export default {
  name: 'Layout',
  components: {
    ParentLayout,
    SidebarAds,
  }
}
</script>