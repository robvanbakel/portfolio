<template>
  <section id="intro">
    <div class="container">
      <div class="intro-text">
        <h2>{{ meta.structure.aboutThisProject }}</h2>
        <p>{{ project.text.intro }}</p>
      </div>
      <div class="tech-stack">
        <h3>{{ meta.structure.techStack }}</h3>
        <div class="tech-stack-grid">
          <div v-for="(tech, index) in project.techStack" :key="index">
            <h6>{{ index }}</h6>
            <p>{{ tech }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    meta() {
      return this.$store.getters.meta;
    },
    project() {
      return this.$store.getters.meta.projects.find(
        (project) => project.name === this.$route.name,
      );
    },
  },
};
</script>

<style></style>
