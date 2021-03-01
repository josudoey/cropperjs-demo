import template from './template.pug'
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'

export default {
  template,
  props: ['src', 'options'],
  data () {
    return {}
  },
  mounted () {
    this.cropper = new Cropper(this.$refs.img, this.options)
  },
  methods: {
    getCroppedCanvas () {
      return this.cropper.getCroppedCanvas()
    }
  }

}
