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
      <feature img="scheduler_feature_doel.jpg">
        <template #title v-if="lang === 'nl'">Het doel</template>
        <template #title v-else>The Goal</template>
        <template #body v-if="lang === 'nl'">
          <p>
            Het doel was eenvoudig: Werknemers moeten zo snel en pijnloos mogelijk het werkrooster van Slack in hun
            kalender moeten kunnen krijgen, waarbij geen handwerk of overtypen te pas komt. Hoe minder interactie, hoe
            beter.
          </p>
          <p>
            Omdat ik geen toegang had tot het Slack account vanuit waar de planner iedere week de berichten stuurde, zou
            ik dit project vanaf de buitenkant moeten aanpakken. Met een paar regels aan platte tekst als enige input
            ging ik aan de slag.
          </p>
        </template>
        <template #body v-else>
          <p>
            The goal was simple: Employers would have be able to easily and quickly put their work schedule from Slack
            into their own calendars, without having to manually type anything. The less user interaction, the better.
          </p>
          <p>
            Because I didn't have access to the Slack account that was used to send out the weekly schedules, I would
            have to tackle this project from the outside. With just a few lines of plain text in my messages on Slack as
            my only input, I got to work.
          </p>
        </template>
      </feature>

      <feature img="scheduler_feature_eersteversie.jpg">
        <template #title v-if="lang === 'nl'">Eerste versie</template>
        <template #title v-else>First version</template>
        <template #body v-if="lang === 'nl'">
          <p>
            Mijn eerste idee was om gebruikers het bericht te laten kopiëren en plakken op een webpagina, vanuit waar de
            tekst de nodige Regex&#8209;Magie&trade; zou ondergaan en omgezet zou worden naar een
            <code>.ics</code> bestand. Dit bestand konden gebruikers vervolgens downloaden importeren in hun agenda.
          </p>
          <p>
            Dit werkte, maar ging mijn doel compleet voorbij. Dit was allesbehalve snel en pijnloos. Ik heb ze geteld,
            het waren 16 kliks. Bovendien was iedere oplossing waarbij in de uitleg de termen '.ics bestand' of
            'downloaden en importeren' voorkwamen, bij voorbaat al afgeschreven. Tijd voor versie 2.
          </p>
        </template>
        <template #body v-else>
          <p>
            My first idea was to let users copy the message's body text and paste it onto a web page, from where the
            text would be undergoing some RegEx&#8209;magic&trade; and be parsed into an
            <code>.ics</code> file, which the employee could then download and import in their calendar.
          </p>

          <p>
            This worked, but completely missed the goal. Every aspect about this workflow was far from quick or
            hassle-free. I counted them, it took 16 clicks. Besides that, every solution that included the terms '.ics
            file' and 'download and import' were out of the question. Time for version 2.
          </p>
        </template>
      </feature>

      <feature img="scheduler_feature_slackbot.jpg">
        <template #title>Slack Bot</template>
        <template #body v-if="lang === 'nl'">
          <p>
            Om gebruikers zo snel mogelijk hun werkrooster in hun agenda te laten zetten, moest dat vanuit Slack kunnen.
            Met behulp van de Slack API heb ik een bot gemaakt die deze taak op zich nam.
          </p>
          <p>
            Vanuit Slack kunnen werknemers de bot aanroepen die direct het bericht leest, de agenda items genereert en
            een voorvertoning laat zien. Met één tik kan de gebruiker alles in zijn/haar agenda zetten; inclusief het
            type shift, locatie en natuurlijk de datum en werktijden.
          </p>
          <p>Uiteindelijke score: 3 tikken.</p>
        </template>
        <template #body v-else>
          <p>
            To enable users to put their schedules in their calendars as quickly as possible, this had to be done
            without leaving Slack. Using the Slack API, I created a bot that would be responsible for this.
          </p>
          <p>
            From within Slack, employees can activate the bot, which will then directly read the message, runs the
            parsing logic, generates the calendar items and outputs a preview to the user. With one tap, the user can
            then add all shifts to their calendar, including the shift's name, location and of course, start and end
            times.
          </p>

          <p>Final score: 3 clicks.</p>
        </template>
      </feature>
    </div>
  </section>
  <Footer />
</template>

<script>
import ProjectHeader from '@/components/layout/ProjectHeader';
import ProjectIntro from '@/components/layout/ProjectIntro';
import Feature from '@/components/layout/Feature';
import Footer from '@/components/layout/Footer';

export default {
  components: {
    ProjectHeader, ProjectIntro, Feature, Footer,
  },
  computed: {
    lang() {
      return this.$store.getters.lang;
    },
    meta() {
      return this.$store.getters.meta;
    },
    project() {
      return this.$store.getters.meta.projects.find((project) => project.name === this.$route.name);
    },
  },
};
</script>

<style></style>
