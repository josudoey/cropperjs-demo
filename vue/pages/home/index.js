import template from './template.pug'
import cropper from './cropper'
export default {
  template,
  data () {
    return {
      imageUrl: ''
    }
  },
  components: {
    cropper: cropper
  },
  async mounted () {
  },
  methods: {
    loadImage (e) {
      const self = this
      const input = e.srcElement
      const file = input.files[0]
      input.value = ''
      const reader = new window.FileReader()
      reader.addEventListener('load', function () {
        self.imageUrl = reader.result
      }, false)

      if (!file) {
        return
      }
      reader.readAsDataURL(file)
    },
    crop () {
      this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
        const objectURL = URL.createObjectURL(blob)
        window.open(objectURL)
      }, 'image/jpeg', 1)
    }
  }
}
