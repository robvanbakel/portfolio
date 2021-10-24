<template>
  <ProjectHeader />
  <ProjectIntro />

  <section class="two-images" id="hero">
    <div class="container">
      <div class="img-wrapper">
        <img src="/images/spark_employeelist.jpeg" alt="Spark Employee List" />
      </div>
      <div class="img-wrapper">
        <img src="/images/spark_planner.png" alt="Spark Planner" />
      </div>
    </div>
  </section>

  <section id="features">
    <div class="container">
      <div class="feature">
        <div class="feature-image-wrapper">
          <img src="/images/spark_feature_customcomponents.jpg" alt="Custom components" />
        </div>
        <div class="feature-text" v-if="lang === 'nl'">
          <h3>Custom componenten</h3>
          <p>
            Omdat ik met Spark de ervaring wilde wekken dat de gebruiker een native app gebruikt in plaats van een
            website, heb ik custom componenten gemaakt voor alle modals, datumpikkers, keuzemenu's etc. Deze componenten
            hebben als bijkomend voordeel dat ze volledig aan te passen zijn voor ieder gebruik.
          </p>
          <p>
            Alle componenten zijn gemaakt in Vue 3, waarbij ik focus ben blijven houden op de flexibiliteit. Ik wilde de
            componenten kunnen behandelen als bouwstenen op verschillende plekken binnen Spark, waarbij ik geen code
            meer hoefde aan te passen voor elk gebruik.
          </p>
        </div>
        <div class="feature-text" v-else>
          <h3>Custom components</h3>
          <p>
            Because I want Spark to feel like an app rather than a website, I created custom components for all modals,
            date pickers, dropdown menus, toggles and so on. Components like these make the user forget they're working
            in a web browser, with the added benefit of being highly customizable.
          </p>

          <p>
            All components are built using Vue 3, making use of props and custom events to allow usage in different
            places within Spark. This approach enabled me to use these components like building blocks, without needing
            to change any of the underlying code for each instance.
          </p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-image-wrapper">
          <video src="/images/spark_feature_searchandfilter.mp4" autoplay loop muted playsinline></video>
        </div>
        <div class="feature-text" v-if="lang === 'nl'">
          <h3>Zoeken en filteren</h3>
          <p>
            Het bijhouden van een werknemerslijst die bestaat uit slechts een paar mensen is eenvoudig, maar het
            doorzoeken van een eindeloze lijst aan personeel is niet te doen. Ook wilde ik een snelle manier maken om
            alle werknemers met een bepaalde status weer te geven.
          </p>
          <p>
            De zoek- en filterresultaten zijn meteen zichtbaar vanaf het moment dat de eerste letter wordt getypt. De
            werknemer kan een zoekterm combineren met één of meer filters zodat een elke werknemer binnen een paar
            seconden gevonden kan worden.
          </p>
        </div>
        <div class="feature-text" v-else>
          <h3>Search and Filter</h3>
          <p>
            I built Spark with scalability in mind. Managing a list of just a few employees is easy, but searching an
            employee in a long list would be a nightmare. Also, I wanted to provide a way to quickly display all
            employees with a specific status.
          </p>

          <p>
            Both the search and filter functions respond instantly from the first letter that's being typed. The user
            can even combine a search query with any one -or more- filters, making it effortless to narrow down a long
            list of staff to just one employee in literal seconds.
          </p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-image-wrapper">
          <img src="/images/spark_feature_calendarsubscriptions.jpg" alt="Calendar Subscriptions" />
        </div>
        <div class="feature-text" v-if="lang === 'nl'">
          <h3>Agenda synchroniseren</h3>
          <p>
            Het maken van de planning in Spark gebeurt per week. Wanneer een lege week wordt weergegeven, krijgt de
            werknemer de optie om een nieuwe, lege planning te openen of de planning van een bestaande week te kopiëren
            om als startpunt te kunnen gebruiken.
          </p>
          <p>
            Iedere werknemer kan inloggen om zijn/haar rooster te zien, inclusief details voor iedere shift. Voor
            iedereen wordt een aparte agenda feed gemaakt, waarop de werknemer zich kan abonneren via zijn/haar
            telefoon. Op deze manier wordt de agenda van de werknemer altijd gesynchroniseerd met de laatste
            aanpassingen van de werkgever.
          </p>
        </div>
        <div class="feature-text" v-else>
          <h3>Calendar subscriptions</h3>
          <p>
            Creating work schedules in Spark happens on a weekly basis. When navigating to a week that doesn't hold a
            schedule yet, the employer will be presented with an option to start with an empty schedule or copy an
            existing week to use as a starting point.
          </p>

          <p>
            Each employee can login to see their schedule and details for every shift. A calendar feed is served for
            each employee's schedule, which can be easily subscribed to via their computer or phone. This way, any
            changes made by the employer will be immediately visible the employee's own calendar.
          </p>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import ProjectHeader from "@/components/layout/ProjectHeader"
import ProjectIntro from "@/components/layout/ProjectIntro"
import Footer from "@/components/layout/Footer"

export default {
  components: { ProjectHeader, ProjectIntro, Footer },
  computed: {
    lang() {
      return this.$store.getters["lang"]
    },
    meta() {
      return this.$store.getters["meta"]
    },
    project() {
      return this.$store.getters["meta"].projects.find((project) => project.name === this.$route.name)
    },
  },
}
</script>

<style></style>
