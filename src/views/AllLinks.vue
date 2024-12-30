<template>
  <ProjectHeader />
  <ProjectIntro />

  <section id="hero">
    <div class="container">
      <img src="/images/alllinks_hero.jpg" alt="AllLinks Screenshot" />
    </div>
  </section>

  <section id="features">
    <div class="container">
      <feature img="alllinks_feature_edit.jpg">
        <template #title v-if="lang === 'nl'">Dashboard</template>
        <template #title v-else>Dashboard</template>
        <template #body v-if="lang === 'nl'">
          <p>
            Gebruikers kunnen een profiel op AllLinks aanmaken met hun Google
            account. Tijdens dit proces wordt aan de gebruiker gevraagd een
            gebruikersnaam te kiezen, die gebruikt zal worden in de unieke,
            deelbare link.
          </p>
          <p>
            In het dashboard kunnen gebruikers links toevoegen, bewerken en
            verwijderen. Updates die de gebruiker doet zijn meteen zichtbaar op
            hun pagina.
          </p>
        </template>
        <template #body v-else>
          <p>
            Users can create a profile on AllLinks using their Google account.
            During this process, users are prompted to choose a username, which
            will be used in the unique, shareable link.
          </p>
          <p>
            In the dashboard, users can add, edit, and delete links. Updates
            made by the user are immediately reflected on their page.
          </p>
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
    ProjectHeader,
    ProjectIntro,
    Feature,
    Footer,
  },
  computed: {
    lang() {
      return this.$store.getters.lang;
    },
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
