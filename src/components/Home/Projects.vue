<template>
  <section class="portfolio">
    <div class="container text-center projects ">
      <h2>A Couple of Our Featured Projects</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. 
        Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros.</p>
    </div>
  </section>
</template>

<script>
export default {
    name: 'Projects'
}
</script>

<style>
  .projects h2 {
    margin-bottom: 18px;
  }
  .projects {
      margin-bottom: 42px;
  }
  .projects p {
      max-width: 750px;
      margin-left: auto;
      margin-right: auto;
  }
  @media (max-width: 768) {
    .projects p {
      width: 100%;
      display: block;

  }
}
</style>
