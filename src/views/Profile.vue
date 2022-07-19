<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">Yevgen Polukov</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              Завдання тренінгів — навчити вас вчитися і дізнаватися щось нове,
              чи закрити прогалини. У вас буде можливість вибрати тему яку ви
              хочете покршити, а ми зробими лекцію цікавою і не нудною.
            </p>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['SQL', 'Java']"
              :tab-icon="['camera', 'palette', 'favorite', 'palette']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <a href="#/trainings/1" > <h4>1. Для початківців </h4></a>
                SQL для аналізу даних – це курс для початківців, який навчить вас усього, що вам потрібно знати, щоб почати використовувати SQL для запиту даних. <br />
                Я збираюся викладати це так, як навчився, працюючи у великих технологічних компаніях. <br />
                Я буду використовувати інструменти, дуже схожі на ті, які ви будете використовувати в таких компаніях, як EPAM, Ciklum і інші.<br />
                <a href="#"> детальніше</a><br />
              </template>
              <template slot="tab-pane-1">
                <a href="#"> <h4>2. Теми для поглибленого знання</h4></a>
                SQL optimization <br />
                Windows functions <br />
                Query tuning <br />
                <br />
                <a href="#"> детальніше</a><br />
              </template>
              <template slot="tab-pane-2">
                <a href="#" > <h4>3. Працюємо з Optional API правильно</h4></a>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed base
                benefits.<br />
                <a href="#"> детальніше</a><br />
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
export default {
  components: {
    Tabs
  },
  bodyClass: "profile-page",
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") }
      ]
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    }
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
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
