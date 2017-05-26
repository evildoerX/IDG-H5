<template>
  <div>
    <div style="padding:15px;">
      <x-button @click.native="showPosition" type="primary">Middle</x-button>
    </div>
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="123"></toast>
  </div>
</template>



<script>
import { Toast, Group, XSwitch, XButton } from 'vux'
export default {
  components: {
    Toast,
    XButton
  },
  methods: {
    showPosition () {
      this.showPositionValue = true
    }
  },
  data () {
    return {
      showPositionValue: false
    }
  }
}
</script>