<template>
  <!--Component FOOTER réutilisable de partout-->
  <footer class="footer-distributed">
    <div class="footer-left">
      <img
        class="logo_footer"
        src="../assets/img/logo_without_title.png"
        alt="your_daily_assistant_logo"
      />
    </div>

    <div class="footer-center">
      <p class="text">400 AV ROUMANILLE 06410 BIOT</p>
      <br />
      <br />
      <a class="footer-links" href="tel:+33643884382"> +33 6 43 88 43 82 </a>
      <br />
      <br />
      <a class="footer-links" href="mailto:assistantes@your-daily-assistant.fr">
        assistantes@your-daily-assistant.fr
      </a>
    </div>

    <div class="footer-right">
      <div class="footer-icons">
        <a
          target="_blank"
          href="https://www.facebook.com/yda.yourdailyassistant/"
          ><i class="fab fa-facebook-square"></i
        ></a>
        <a
          target="_blank"
          href="https://www.instagram.com/yda.yourdailyassistant/"
          ><i class="fab fa-instagram"></i
        ></a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/yourdailyassistant/"
          ><i class="fab fa-linkedin-in"></i
        ></a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCcjWFm7MIB4Jop42q3ym-6g/"
          ><i class="fab fa-youtube"></i
        ></a>
      </div>
    </div>
  </footer>
</template>
 

<script>
export default {
  name: "Footer",
  props: {
    msg_footer: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-distributed {
  background-color: #0f0f0f;
  box-shadow: 0 1px 1px 0 #0000001f;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 100% sans-serif;
  color: #ffffff;
  padding: 2%;
  margin-top: 2%;
  position: absolute;
  bottom: 0%;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}

.footer-distributed .footer-left {
  width: 40%;
}
.footer-distributed .footer-right {
  margin-left: 10%;
}

.logo_footer {
  width: 15%;
}

.footer-distributed .footer-links {
  color: #ffffff;
  margin: 20px 0 12px;
  text-decoration: none;
  padding: 0;
}

.footer-distributed .footer-center {
  width: 35%;
}

.footer-distributed .footer-center p {
  display: inline-block;
  color: #ffffff;
  vertical-align: middle;
  margin: 0;
}

.footer-distributed .footer-icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #0f0f0f;
  border-radius: 2px;
  margin-top: 25px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;
  margin-right: 3px;
  margin-bottom: 5px;
}

@media (max-width: 880px) {
  .footer-distributed {
    font: bold 14px sans-serif;
  }

  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }

  .footer-distributed .footer-center i {
    margin-left: 0;
  }
  .main {
    line-height: normal;
    font-size: auto;
  }
}
</style>
