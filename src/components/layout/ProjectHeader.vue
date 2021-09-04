<template>
  <header class="project">
    <div class="container">
      <nav>
        <router-link :to="{ name: 'Home' }">
          <img src="/images/logo.svg" alt="Logo Rob van Bakel" />
        </router-link>
        <ul class="desktop">
          <li v-for="(project, index) in meta.projects" :key="index">
            <router-link :to="{ name: project.name }">
              {{ project.name }}
            </router-link>
          </li>
          <li>
            <router-link class="contact" to="#contact">Contact</router-link>
          </li>
        </ul>
      </nav>
      <div class="header">
        <div class="project-title">
          <h1>{{ project.name }}</h1>
          <ul class="chips">
            <li v-for="(component, index) in Object.values(project.techStack)" :key="index">
              {{ component }}
            </li>
          </ul>
          <div class="title-image mobile">
            <img :src="'/images/' + project.images.showcase" :alt="project.name + ' Screenshot'" />
          </div>
          <p class="lead">
            {{ project.text.lead }}
          </p>
          <div class="links" @mouseleave="setGitHubActive($event, false)">
            <div class="github-link" @mouseenter="setGitHubActive($event, true)">
              <a target="_blank" :href="project.links.GitHub">
                <i class="fab fa-github"></i>
                <div>{{ meta.structure.viewOnGitHub }}</div>
              </a>
            </div>
            <a class="project-link" target="_blank" :href="project.links.live">{{ meta.structure.goToLiveSite }}</a>
          </div>
        </div>
        <div class="title-image desktop">
          <img :src="'/images/' + project.images.hero" :alt="project.name + ' Screenshot'" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    meta() {
      return this.$store.getters["meta"]
    },
    project() {
      return this.$store.getters["meta"].projects.find((project) => project.name === this.$route.name)
    },
  },
  methods: {
    setGitHubActive(e, payload) {
      if (payload) {
        e.target.classList.add("expanded")
      } else {
        e.target.firstChild.classList.remove("expanded")
      }
    },
  },
}
</script>

<style></style>
