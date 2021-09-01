<template>
  <div class="project">
    <div class="project-image desktop">
      <router-link :to="{ name: project.name }">
        <img :src="`/images/${project.images.showcase}`" :alt="`${project.name} Screenshot`" ref="showcaseImage" />
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
  props: ["project"],
  computed: {
    meta() {
      return this.$store.getters["meta"]
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
  mounted() {
    const image = this.$refs.showcaseImage

    image.addEventListener("mousemove", (e) => {
      const imageCenterX = image.getBoundingClientRect().x + image.offsetWidth / 2
      const imageCenterY = image.getBoundingClientRect().y + image.offsetHeight / 2

      const y = (imageCenterX - e.x) / -35
      const x = (imageCenterY - e.y) / 35

      image.style.transform = `scale(1.015) rotateX(${x}deg) rotateY(${y}deg)`
      image.style.boxShadow = "0px 20px 100px rgba(0,0,0,0.1)"
    })

    image.addEventListener("mouseleave", (e) => {
      image.style.transform = `scale(1) rotateX(0deg) rotateY(0deg)`
      image.style.boxShadow = "0px 20px 60px rgba(0,0,0,0.1)"
    })

    image.addEventListener("mousedown", () => {
      image.style.transform = `translateZ(-20px)`
      image.style.boxShadow = "0px 0px 60px rgba(0,0,0,0.1)"
    })
  },
}
</script>

<style></style>
