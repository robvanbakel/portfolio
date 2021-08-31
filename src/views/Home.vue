<template>
  <header class="home">
    <div class="container">
      <router-link :to="{ name: 'Home' }"><img src="/images/logo.svg" alt="Logo Rob van Bakel"/></router-link>
      <span>Web Development Portfolio</span>
    </div>
  </header>

  <section id="about">
    <div class="container">
      <div class="text" v-if="lang === 'nl'">
        <h2>Welkom!</h2>
        <p>
          Al zolang ik me kan herinneren is web development een passie van me. Ik merkte dat ik het leuk vond om me bezig te houden met de kleinste details die
          de gemiddelde bezoeker nooit zouden opvallen. Het netjes afwerken van de laatste 2%&nbsp;van een website fascineerde me en ik werd steeds
          nieuwsgieriger naar hoe de verschillende onderdelen van een website functioneerden en samenwerkten.
        </p>

        <p>
          Ik was altijd al geboeid door systemen en het organiseren van data, dus ik ben op zoek gegaan naar een manier om dit te combineren met mijn
          enthousiasme voor web development. Ik ben me gaan verdiepen in wat er achter de schermen gebeurt bij een website. Ik dook dieper in JavaScript, leerde
          mezelf Node.js en hoe om te gaan met servers en databases.
        </p>

        <p>
          Ondertussen ben ik altijd mijn focus op de gebruikerservaring blijven richten. Is het doel van de website helder? Is hij toegankelijk? Is het
          duidelijk wat er van de bezoeker verwacht wordt? Als gedurende het proces het antwoord op één van deze vragen 'nee' is, gaat het idee terug naar de
          tekentafel voordat ik iets uit zou werken wat alleen maar in de weg zit.
        </p>

        <p>
          Deze balans tussen mijn passie voor de systemen waar het internet op draait en het nadenken over de ervaring van de eindgebruiker is wat me heeft
          geïnspireerd tot de projecten in dit portfolio. Voel je vrij om je feedback achter te laten; hoe kritischer, hoe beter! Heb je een andere vraag, idee
          of opmerking? <a href="#contact">Laat het me dan weten</a>!
        </p>
      </div>
      <div class="text" v-else>
        <h2>Welcome!</h2>
        <p>
          For as long as I can remember, web development has been a passion of mine. I realized I enjoy the process of working on the smallest details that the
          average user would never notice. Finishing up those last 2%&nbsp;of a website fascinated me and I grew to become more curious about how different
          components of a website functioned and worked together.
        </p>

        <p>
          I've always been interested in data structures and the organization thereof, so I wanted to find ways to combine that with my enthusiasm for web
          development. I started to explore what happens behind the scenes of websites that I visited. I dived deeper into JavaScript, taught myself Node.js and
          how to handle servers and databases.
        </p>

        <p>
          Meanwhile, I've been continuing to focus on the user experience. Is the page's goal clear? Is it accessible? Would a user know where or what to do
          next? If at any point during the process, the answer to any of these questions is 'no', the idea is going back to the drawing board before I'd work
          out something that headed in the wrong direction from the start.
        </p>

        <p>
          This balance between my passion for the structures that make up the internet and designing for a great user experience is what inspired me to build
          the projects in this portfolio. Feel free to leave any feedback; the more critical, the better! If you have another question, idea or you just want to
          say hi,
          <a href="#contact">please let me know</a>!
        </p>
      </div>
      <div class="skills desktop">
        <SkillsJson />
      </div>
    </div>
  </section>

  <section id="portfolio">
    <div class="container">
      <div class="project">
        <div class="project-image desktop">
          <router-link :to="{ name: meta.projects[0].name }">
            <img :src="`/images/${meta.projects[0].images.showcase}`" :alt="`${meta.projects[0].name} Screenshot`" />
          </router-link>
        </div>
        <div class="project-title">
          <h1>
            <router-link :to="{ name: meta.projects[0].name }">
              {{ meta.projects[0].name }}
            </router-link>
          </h1>
          <ul class="chips">
            <li v-for="(component, index) in Object.values(meta.projects[0].techStack)" :key="index">
              {{ component }}
            </li>
          </ul>
          <div class="project-image mobile">
            <router-link :to="{ name: meta.projects[0].name }">
              <img :src="`/images/${meta.projects[0].images.showcase}`" :alt="`${meta.projects[0].name} Screenshot`" />
            </router-link>
          </div>
          <p class="lead">
            {{ meta.projects[0].text.intro }}
          </p>
          <div class="links" @mouseleave="setGitHubActive($event, false)">
            <div class="github-link" @mouseenter="setGitHubActive($event, true)">
              <a target="_blank" :href="meta.projects[0].links.GitHub">
                <i class="fab fa-github"></i>
                <div>{{ meta.structure.viewOnGitHub }}</div>
              </a>
            </div>
            <router-link class="project-link" :to="{ name: meta.projects[0].name }">{{ meta.structure.learnMore }}</router-link>
          </div>
        </div>
      </div>

      <div class="project">
        <div class="project-title">
          <h1>
            <router-link :to="{ name: meta.projects[1].name }">
              {{ meta.projects[1].name }}
            </router-link>
          </h1>
          <ul class="chips">
            <li v-for="(component, index) in Object.values(meta.projects[1].techStack)" :key="index">
              {{ component }}
            </li>
          </ul>
          <div class="project-image mobile">
            <router-link :to="{ name: meta.projects[1].name }">
              <img :src="`/images/${meta.projects[1].images.showcase}`" :alt="`${meta.projects[1].name} Screenshot`" />
            </router-link>
          </div>
          <p class="lead">
            {{ meta.projects[1].text.intro }}
          </p>
          <div class="links" @mouseleave="setGitHubActive($event, false)">
            <div class="github-link" @mouseenter="setGitHubActive($event, true)">
              <a target="_blank" :href="meta.projects[1].links.GitHub">
                <i class="fab fa-github"></i>
                <div>{{ meta.structure.viewOnGitHub }}</div>
              </a>
            </div>
            <router-link class="project-link" :to="{ name: meta.projects[1].name }">{{ meta.structure.learnMore }}</router-link>
          </div>
        </div>
        <div class="project-image desktop">
          <router-link :to="{ name: meta.projects[1].name }">
            <img :src="`/images/${meta.projects[1].images.showcase}`" :alt="`${meta.projects[1].name} Screenshot`" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import SkillsJson from "@/components/ui/SkillsJson"
import Footer from "@/components/layout/Footer"

export default {
  components: { Footer, SkillsJson },
  computed: {
    lang() {
      return this.$store.getters["lang"]
    },
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
}
</script>
