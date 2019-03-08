<template>
  <div class="video-section">
    <div class="container">
      <a href="#" class="p-0 float-left">
        <img class="img-fluid" src="../../assets/video-player.svg" alt="Youtube Video">
      </a>
      <h2>Get To Know Us a Little Better!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, 
        vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. 
        Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, 
        luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p>
      <p>Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. 
        Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p>
     </div>
  </div>
</template>

<script>
export default {
    name: 'Video'
}

</script>

<style>
  .video-section {
      margin-top: 48px;
      margin-bottom: 44px;
      padding: 39px 0px 39px 0px;
      background-color: #efefef;
  }
  .video-section h2 {
    margin-bottom: 20px;
    margin-top: -6px;
  }
  .video-section .container p:last-child {
      margin-bottom: 1px;
      margin-top: 21px;
  }
  .video-section img {
    margin-right: 27px;
    margin-bottom: 27px;
  }
  @media (max-width: 576px) {
    .video-section a {
    float: none !important;
  }
  .video-section .container img {
    width: 100%;
  }
}
@media (max-width: 320px) {
    .video-section h2 {
    text-align: center
  }
}
</style>
