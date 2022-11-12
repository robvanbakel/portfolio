<template>
  <div id="skillsJson" ref="skillsJson">
    <div id="top-bar">
      <img src="/images/controls.svg" alt="" />
      <div id="title">skills.json</div>
    </div>
    <div id="main" ref="main">
      <div class="tab0">[</div>
      <div class="tab1">{</div>
      <div class="tab2"><span class="attribute">"skills"</span>: {</div>
      <div class="tab3"><span class="attribute">"frontend"</span>: [</div>
      <div class="tab4">
        <span class="item">"HTML"</span>,<br />
        <span class="item">"(S)CSS"</span>,<br />
        <span class="item">"JavaScript"</span>,<br />
        <span class="item">"TypeScript"</span>,<br />
        <span class="item">"Vue.js"</span>
      </div>
      <div class="tab2">],</div>
      <div class="tab3"><span class="attribute">"backend"</span>: [</div>
      <div class="tab4">
        <span class="item">"Node.js"</span>,<br />
        <span class="item">"Firebase"</span>,<br />
        <span class="item">"MongoDB"</span>
      </div>
      <div class="tab3">]</div>
      <div class="tab2">},</div>
      <div class="tab2"><span class="attribute">"nowLearning"</span>: [</div>
      <div class="tab3">
        <span class="item">"Redis"</span>,<br />
        <span class="item">"GraphQL"</span>
      </div>
      <div class="tab2">]</div>
      <div class="tab1">}</div>
      <div class="tab0">]</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const baseSpeed = 20;
    const speedVariation = 45;

    const mainHTML = this.$refs.main.innerHTML;

    this.$refs.main.innerHTML = '|';

    let isTyping = false;

    const blinkingCursor = setInterval(() => {
      this.$refs.main.innerHTML == '|' ? (this.$refs.main.innerHTML = '&nbsp;') : (this.$refs.main.innerHTML = '|');
    }, 650);

    let outputHTML = '';

    const speed = () => Math.random() * speedVariation + baseSpeed;
    const wait = () => new Promise((res) => setTimeout(res, speed()));

    const type = async () => {
      window.removeEventListener('scroll', checkPlacement);
      clearInterval(blinkingCursor);
      this.$refs.main.innerHTML = '&nbsp;';

      for (let i = 0; i < mainHTML.length; i++) {
        switch (mainHTML[i]) {
          case ' ':
            if (mainHTML[i + 1] == ' ') {
              outputHTML += mainHTML[i];
            } else {
              outputHTML += mainHTML[i];
              await wait();
            }
            break;
          case '<':
            outputHTML += mainHTML[i];
            while (mainHTML[i] != '>') {
              i++;
              outputHTML += mainHTML[i];
            }
            break;
          default:
            outputHTML += mainHTML[i];
            await wait();
        }

        if (this.$route.name === 'Home') {
          this.$refs.main.innerHTML = outputHTML;
        }
      }
    };

    const checkPlacement = () => {
      if (this.$refs.skillsJson.getBoundingClientRect().top < window.innerHeight / 2 && !isTyping) {
        isTyping = true;
        type();
      }
    };

    window.addEventListener('scroll', checkPlacement);
  },
};
</script>

<style></style>
