(self.webpackChunkcropperjs_demo=self.webpackChunkcropperjs_demo||[]).push([[469],{469:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>s});var t=r(129),n=r.n(t);const s={template:'<div class="container-fluid px-0"><nav class="navbar navbar-dark bg-dark"><div class="navbar-brand">cropperjs-demo</div></nav><label class="m-0 btn btn-primary btn-sm" @change="loadImage"> <input id="loadImage" type="file" accept=".jpg, .png" plain style="display:none;">讀取圖片</label><template v-if="imageUrl"><button class="btn btn-primary btn-sm m-0" @click="crop"><b-icon-crop></b-icon-crop></button>\x3c!-- ref https://github.com/fengyuanchen/cropperjs#options--\x3e<cropper ref="cropper" :src="imageUrl" :options="{\n        responsive: true,\n        guides: true,\n        aspectRatio:1,\n        zoomable: false\n      }"></cropper></template></div>',data:()=>({imageUrl:""}),components:{cropper:{template:'<img ref="img" :src="src">',props:["src","options"],data:()=>({}),mounted(){this.cropper=new(n())(this.$refs.img,this.options)},methods:{getCroppedCanvas(){return this.cropper.getCroppedCanvas()}}}},async mounted(){},methods:{loadImage(e){const a=this,r=e.srcElement,t=r.files[0];r.value="";const n=new window.FileReader;n.addEventListener("load",(function(){a.imageUrl=n.result}),!1),t&&n.readAsDataURL(t)},crop(){this.$refs.cropper.getCroppedCanvas().toBlob((e=>{const a=URL.createObjectURL(e);window.open(a)}),"image/jpeg",1)}}}}}]);