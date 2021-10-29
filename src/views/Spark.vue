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
      <feature img="spark_feature_customcomponents.jpg">
        <template v-slot:title v-if="lang === 'nl'">Custom componenten</template>
        <template v-slot:title v-else>Custom components</template>
        <template v-slot:body v-if="lang === 'nl'">
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
        </template>
        <template v-slot:body v-else>
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
        </template>
      </feature>

      <feature img="spark_feature_searchandfilter.mp4">
        <template v-slot:title v-if="lang === 'nl'">Zoeken en filteren</template>
        <template v-slot:title v-else>Search and filter</template>
        <template v-slot:body v-if="lang === 'nl'">
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
        </template>
        <template v-slot:body v-else>
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
        </template>
      </feature>

      <feature img="spark_feature_calendarsubscriptions.jpg">
        <template v-slot:title v-if="lang === 'nl'">Agenda synchroniseren</template>
        <template v-slot:title v-else>Calendar subscriptions</template>
        <template v-slot:body v-if="lang === 'nl'">
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
        </template>
        <template v-slot:body v-else>
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
        </template>
      </feature>
    </div>
  </section>

  <section id="spark-admin-code" ref="sparkAdminCode">
    <div class="container">
      <div class="text-wrapper" v-if="lang === 'nl'">
        <h3>Spark Admin</h3>
        <p>
          De Spark Admin is verantwoordelijk voor de functies van Spark die niet uitgevoerd kunnen worden door de app
          aan de voorkant. Voorbeelden van dit soort functies zijn het aanmaken van nieuwe gebruikers, het herstellen
          van wachtwoorden en het serveren van de agenda feed naar individuele gebruikers.
        </p>
        <p>
          Vanuit de app worden verschillende endpoints aangesproken, die daarna de opgevraagde informatie doorgeven aan
          de frontend. Door de database via de Spark Admin te benaderen heeft de werkgever volledige controle over welke
          informatie met welke werknemer gedeeld wordt en kan de data zo nodig geherstructureerd worden.
        </p>
        <a class="project-link" target="_blank" href="https://github.com/robvanbakel/spark-admin">bekijk op GitHub</a>
      </div>
      <div class="text-wrapper" v-else>
        <h3>Spark Admin</h3>
        <p>
          The Spark Admin is responsible for the higher-level functions of Spark, that cannot or should not be executed
          by the app on the frontend. Creating new users, resetting passwords and serving calendar feeds to individual
          employees are some of those functions.
        </p>
        <p>
          From within the app, several endpoints are being called, which then provide the requested information to the
          frontend. Accessing the database via Spark Admin gives the employer full control over what information is
          being sent to the user, being able to reformat data on the way.
        </p>
        <a class="project-link" target="_blank" href="https://github.com/robvanbakel/spark-admin">view on GitHub</a>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script>
import ProjectHeader from "@/components/layout/ProjectHeader"
import ProjectIntro from "@/components/layout/ProjectIntro"
import Feature from "@/components/layout/Feature"
import Footer from "@/components/layout/Footer"

export default {
  components: { ProjectHeader, ProjectIntro, Feature, Footer },
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
  mounted() {
    const sparkAdminCode = this.$refs.sparkAdminCode

    window.addEventListener("scroll", () => {
      const sectionTop = window.innerHeight - sparkAdminCode.getBoundingClientRect().top
      sparkAdminCode.style.backgroundPositionY = `calc(50% - ${sectionTop / 2}px)`
    })
  },
}
</script>

<style></style>
