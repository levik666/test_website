<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Вчимося разом ефективно</h1>
            <h4>
              Навчання для Java-розробників. Наш дивіз мінімум теорії головне
              практика з кодом
            </h4>
            <br />
            <md-button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              class="md-success md-lg"
              target="_blank"
              ><i class="fas fa-play"></i> Watch video</md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">
                Наша ціль - це розказати складні речі простими словами
              </h2>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>chat</md-icon>
                  </div>
                  <h4 class="info-title">Тренінги</h4>
                  <p>
                    З нами ви отримаєте мінімум теорії, а головне у вас буде
                    можливість закріпити матеріал в коді на прикладах.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>verified_user</md-icon>
                  </div>
                  <h4 class="info-title">Коучинг</h4>
                  <p>
                    Допоможемо вам більш впевнено проходити співбесіди. А також
                    проведемо мокову співбесіду з вами. І сплануємо як виправити
                    прогалини які є.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Наша команда</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg1"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Yevgen Polukov
                      <br />
                      <small class="card-description text-muted"
                        >Технічні питання, програма тренінгів, консультаційні
                        послуги</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Понад 10 років досвіду в розробці та побудові архітектур
                        високонавантажених систем.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <a
                        href="https://www.linkedin.com/in/yevgen-polukov-37a97949/"
                        target="_blank"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </a>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg2"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Bogdana Gul
                      <br />
                      <small class="card-description text-muted"
                        >Маркетинг, організація тренінгів та заходів</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        You can write here details about one of your team
                        members. You can give more details about what they do.
                        Feel free to add some <a href="#">links</a> for people
                        to be able to follow them outside the site.>
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <a
                        href="https://www.linkedin.com/in/bogdana-gul-146307146/"
                        target="_blank"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </a>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sharing-area text-center">
        <div class="md-layout">
          <div class="md-layout-item">
            <h3>Дякуємо, що підтримуєте нас!</h3>
          </div>
        </div>

        <md-button class="md-twitter"
          ><i class="fab fa-twitter"></i>Tweet</md-button
        >
        <md-button class="md-facebook"
          ><i class="fab fa-facebook-square"></i> Share</md-button
        >
        <md-button class="md-google"
          ><i class="fab fa-google-plus"></i> Share</md-button
        >
        <md-button class="md-github"
          ><i class="fab fa-github"></i> Star</md-button
        >
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
