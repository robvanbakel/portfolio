<template>
  <div class="project">
    <div class="project-image desktop">
      <router-link :to="{ name: project.name }">
        <img :src="`/images/${project.images.showcase}`" :alt="`${project.name} Screenshot`" />
      </router-link>
    </div>
    <div class="project-title">
      <h1>
        <router-link :to="{ name: project.name }">
          {{ project.name }}
        </router-link>
      </h1>
      <ul class="chips">
        <li v-for="(component, index) in Object.values(project.techStack)" :key="index">
          {{ component }}
        </li>
      </ul>
      <div class="project-image mobile">
        <router-link :to="{ name: project.name }">
          <img :src="`/images/${project.images.showcase}`" :alt="`${project.name} Screenshot`" />
        </router-link>
      </div>
      <p class="lead">
        {{ project.text.intro }}
      </p>
      <div class="links" @mouseleave="setGitHubActive($event, false)">
        <div class="github-link" @mouseenter="setGitHubActive($event, true)">
          <a target="_blank" :href="project.links.GitHub">
            <i class="fab fa-github"></i>
            <div>{{ meta.structure.viewOnGitHub }}</div>
          </a>
        </div>
        <router-link class="project-link" :to="{ name: project.name }">{{ meta.structure.learnMore }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
  computed: {
    meta() {
      return this.$store.getters.meta;
    },
  },
  methods: {
    setGitHubActive(e, payload) {
      if (payload) {
        e.target.classList.add('expanded');
      } else {
        e.target.firstChild.classList.remove('expanded');
      }
    },
  },
};
</script>

<style></style>
