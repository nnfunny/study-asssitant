<template>
  <div class="wrapper">
    <SideBar></SideBar>
    <div id="content">
      <Header title="Dinosaur"></Header>
      <div class="game-container">
        <h4>Dinosour Game</h4>
        <h5>Instruction: Click on the green dinosour and press mouse left button to jump over pipes</h5>
        <iframe src="https://editor.p5js.org/vnngucs/embed/HowLnKmug" height="500px" width="375px"></iframe>
      </div>
      <div style="height: 20vh"></div>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
export default {
  name: "Dinosaur",
  components: {
    Header,
    SideBar,
    Footer
  },
}
</script>
<style scoped>
  iframe {
    border: none;
  }

  .game-container {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .game-container h5, .game-container h4 {
    text-align: center;
  }

</style>
