<template>
  <ProjectHeader />
  <ProjectIntro />

  <section id="hero">
    <div class="container">
      <img src="/images/scheduler_hero.jpg" alt="Scheduler Screenshot" />
    </div>
  </section>

  <section id="features">
    <div class="container">
      <div class="feature">
        <div class="feature-image-wrapper">
          <img src="/images/scheduler_feature_doel.jpg" alt="Goal" />
        </div>
        <div class="feature-text" v-if="lang === 'nl'">
          <h3>Het doel</h3>
          <p>
            Het doel was eenvoudig: Werknemers moeten zo snel en pijnloos mogelijk het werkrooster van Slack in hun kalender moeten kunnen krijgen, waarbij geen
            handwerk of overtypen te pas komt. Hoe minder interactie, hoe beter.
          </p>
          <p>
            Omdat ik geen toegang had tot het Slack account vanuit waar de planner iedere week de berichten stuurde, zou ik dit project vanaf de buitenkant
            moeten aanpakken. Met een paar regels aan platte tekst als enige input ging ik aan de slag.
          </p>
        </div>
        <div class="feature-text" v-else>
          <h3>The goal</h3>
          <p>
            The goal was simple: Employers would have be able to easily and quickly put their work schedule from Slack into their own calendars, without having
            to manually type anything. The less user interaction, the better.
          </p>

          <p>
            Because I didn't have access to the Slack account that was used to send out the weekly schedules, I would have to tackle this project from the
            outside. With just a few lines of plain text in my messages on Slack as my only input, I got to work.
          </p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-image-wrapper">
          <img src="/images/scheduler_feature_eersteversie.jpg" alt="First version" />
        </div>
        <div class="feature-text" v-if="lang === 'nl'">
          <h3>Eerste versie</h3>
          <p>
            Mijn eerste idee was om gebruikers het bericht te laten kopiëren en plakken op een webpagina, vanuit waar de tekst de nodige Regex-Magie&trade; zou
            ondergaan en omgezet zou worden naar een downloadbaar bestand. Dit bestand konden gebruikers vervolgens importeren in hun agenda.
          </p>
          <p>
            Dit werkte, maar ging mijn doel compleet voorbij. Dit was allesbehalve snel en pijnloos. Ik heb ze geteld, het waren 16 kliks. Bovendien was iedere
            oplossing waarbij in de uitleg de termen '.ics file' of 'downloaden en importeren' voorkwamen, bij voorbaat al afgeschreven. Tijd voor versie 2.
          </p>
        </div>
        <div class="feature-text" v-else>
          <h3>Version 1</h3>
          <p>
            My first idea was to let users copy the message's body text and paste it onto a web page, from where the text would be undergoing some
            RegEx&#8209;magic&trade; and be parsed into an
            <code>.ics</code> file, which the employee could then download and import in their calendar.
          </p>

          <p>
            This worked, but completely missed the goal. Every aspect about this workflow was far from quick or hassle-free. I counted them, it took 16 clicks.
            Besides that, every solution that included the terms '.ics file' and 'download and import' were out of the question. Time for version 2.
          </p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-image-wrapper">
          <img src="/images/scheduler_feature_slackbot.jpg" alt="Slack Bot" />
        </div>
        <div class="feature-text" v-if="lang === 'nl'">
          <h3>Slack Bot</h3>
          <p>
            Om gebruikers zo snel mogelijk hun werkrooster in hun agenda te laten zetten, moest dat vanuit Slack kunnen. Ik ging aan de slag met de Slack API en
            de Scheduler bot was geboren.
          </p>
          <p>
            Vanuit Slack kunnen werknemers de bot aanroepen die direct het bericht leest, de agenda items genereert en een voorvertoning laat zien. Met één tik
            kan de gebruiker alles in zijn/haar agenda zetten; inclusief het type shift, locatie en natuurlijk de datum en werktijden.
          </p>
          <p>Uiteindelijke score: 3 tikken.</p>
        </div>
        <div class="feature-text" v-else>
          <h3>Slack Bot</h3>
          <p>
            To enable users to put their schedules in their calendars as quickly as possible, this had to be done without leaving Slack. I got to work with the
            Slack API and the Scheduler Bot was born.
          </p>

          <p>
            From within Slack, employees can activate the bot, which will then directly read the message, runs the parsing logic, generates the calendar items
            and outputs a preview to the user. With one tap, the user can then add all shifts to their calendar, including the shift's name, location and of
            course, start and end times.
          </p>

          <p>Final score: 3 clicks.</p>
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
