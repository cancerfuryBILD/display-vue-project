<template>
    <div class="map" v-html="mapIframe"></div>
</template>

<script>
export default {
    name: 'GeoMap',
    data() {
        return {
        mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9797.442886287994!2d-106.67100434777717!3d52.12775950885092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6d739438e67%3A0xedae07fdf241d0bf!2s102+2nd+Ave+N%2C+Saskatoon%2C+SK+S7K+2B2%2C+Canada!5e0!3m2!1sen!2s!4v1544311212563" 
                  width="100%" 
                  height="498" 
                  frameborder="0"
                  style="border:0" 
                  allowfullscreen>
                  </iframe>`
        }
    }
}
</script>

<style>
.map {
margin-bottom: 38px;
}
@media (max-width: 768px) {
    iframe {
        height: 300px;
    }
}
</style>
