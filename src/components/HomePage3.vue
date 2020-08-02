<template>
  <div class="homePageThree">
    <div class="homePageThreeNavigation">
      <a
        class="[active === 'Masks' ? 'selected' : 'unselected']"
        @click="setText('Masks')"
      >
        Masks
      </a>
      |
      <a
        class="[active === 'Sanitizers' ? 'selected' : 'unselected']"
        @click="setText('Sanitizers')"
        >Sanitizers</a
      >
      |
      <a
        class="[active === 'Disinfectants' ? 'selected' : 'unselected']"
        @click="setText('Disinfectants')"
        >Disinfectant</a
      >
      |
      <a
        class="[active === 'Other' ? 'selected' : 'unselected']"
        @click="setText('Other')"
        >Other</a
      >
    </div>
    <div>
      <img
        class="homePageThreeImg"
        alt="Guy in Mask"
        src="../assets/facemaskguy.jpg"
      />
    </div>
    <p>
      {{ text }}
    </p>
    <button class="homePageThreeButton" @click="navTo(active)">
      Find Now ->
    </button>
  </div>
</template>

<script>
export default {
  name: "HomePage3",
  components: {},
  data() {
    return {
      text:
        "Air-purifying respirators protect by filtering particles out of the air the user is breathing. There are seven classes of filters for NIOSH-approved face masks, starting at ninety-five percent filtration. The N, R, and P designations refer to the filter’s oil resistance.",
      active: "Masks"
    };
  },
  methods: {
    navTo(active) {
      this.$router.push(`FindPPE/${active}`);
    },
    setText(category) {
      if (category === "Masks") {
        this.text =
          "Air-purifying respirators protect by filtering particles out of the air the user is breathing. There are seven classes of filters for NIOSH-approved face masks, starting at ninety-five percent filtration. The N, R, and P designations refer to the filter’s oil resistance.";
        this.active = "Masks";
      } else if (category === "Sanitizers") {
        this.text =
          "A chemical disinfectant, usually alcohol based that reduces the number of germs on a surface. Sanitizer typically work faster than disinfectants on surfaces but are less effective. Sanitization is recommended for organic surfaces and food preparation surfaces.";
        this.active = "Sanitizers";
      } else if (category === "Disinfectants") {
        this.text =
          "A chemical, that destroys, neutralizes, or inhibits the growth of disease. Disinfectants are usually applied to inanimate objects since they are too strong to be used on living tissues.";
        this.active = "Disinfectants";
      } else if (category === "Other") {
        this.text = "Other";
        this.active = "Other";
      }
    }
  }
};
</script>

<style scoped>
.homePageThree {
  height: 80vh;
}
.homePageThreeNavigation {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.homePageThreeNavigation a {
  font-size: 18px;
  line-height: 25px;
  font-weight: bold;
  text-decoration: none;
}
.homePageThreeImg {
  height: auto;
  width: 100%;
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
.homePageThreeButton {
  border: none;
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  margin-left: 1.25rem;
  padding: 0;
  margin-bottom: 1.5rem;
}
p {
  font-size: 1rem;
  font-weight: normal;
  color: #10182f;
  margin: 1.25rem;
  text-align: left;
}
</style>
