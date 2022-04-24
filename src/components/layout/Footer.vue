<template>
  <footer>
    <div class="container">
      <h1 class="desktop">{{ meta.footer.title }}</h1>
      <h1 class="mobile">{{ meta.footer.titleMobile }}</h1>
      <div class="footer-content">
        <div class="card">
          <h2>Rob van Bakel</h2>
          <p>{{ meta.footer.intro }}</p>
          <div class="contact"><i class="fas fa-phone-alt"></i>{{ meta.footer.phone }}</div>
          <div class="contact">
            <i class="fas fa-envelope"></i><a :href="`mailto:${meta.footer.email}`">{{ meta.footer.email }}</a>
          </div>
          <div class="contact"><a href="https://github.com/robvanbakel" target="_blank"><i class="fab fa-github"></i>github.com/robvanbakel</a></div>
        </div>
        <div class="success" v-if="showThankYou">
          {{ meta.footer.thankYouMessage }}
        </div>
        <div class="form" v-else>
          <form id="contact" @submit.prevent="submitHandler">
            <div class="form-block" id="name">
              <label for="name">{{ meta.footer.form.name }}</label>
              <input type="text" name="name" id="name" v-model="name" />
            </div>
            <div class="form-block" id="email">
              <label for="email">{{ meta.footer.form.email }}</label>
              <input type="email" name="email" id="email" required v-model="email" />
            </div>
            <div class="form-block" id="message">
              <label for="message">{{ meta.footer.form.message }}</label>
              <textarea name="message" id="message" required v-model="message"></textarea>
            </div>
            <div class="button-wrapper">
              <input type="text" name="empty" id="empty" v-model="empty" :style="{ display: 'none' }" />
              <button type="submit">{{ meta.footer.form.send }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      showThankYou: false,
      name: "",
      email: "",
      message: "",
      empty: "",
    }
  },
  computed: {
    meta() {
      return this.$store.getters["meta"]
    },
  },
  methods: {
    async submitHandler() {

      if(this.empty.length) return

      await fetch("/contactform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: this.meta.footer.email,
          name: this.name,
          email: this.email,
          message: this.message,
        }),
      })

      this.showThankYou = true

    },
  },
}
</script>

<style></style>
