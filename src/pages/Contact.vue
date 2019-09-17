<template>
  <div class="wrapper">
    <SideBar></SideBar>
    <div id="content">
      <Header title="Contact"></Header>
      <Footer></Footer>
      <div class="container big-box">
        <div class="contact-form form-group">
          <h5
            style="margin: 30px 0px; text-align: center;"
          >Please send me your feedback or request of collaboration</h5>
          <div class="email row">
            <label for="email" class="col-sm-2">Your email</label>
            <div class="col-sm-8">
              <input type="text" name="email" class="form-control" placeholder="vnngu@deakin.edu.au" />
            </div>
          </div>
          <div class="name row">
            <label for="name" class="col-sm-2">Your name</label>
            <div class="col-sm-8">
              <input type="text" name="email" class="form-control" placeholder="Nam Nguyen" />
            </div>
          </div>
          <div class="message row">
            <label for="message" class="col-sm-2">Message</label>
            <div class="col-sm-8">
              <textarea class="form-control" placeholder="Explore my world..."></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-link">
        <button>Submit</button>
        <div class="media">
          <a href="https://www.linkedin.com/in/nam-nguyen-cs/" target=”_blank”><i class="fab fa-linkedin"></i></a>
          <a href="https://github.com/nnfunny" target=”_blank”><i class="fab fa-github"></i></a>
          <a href="https://www.instagram.com/nam.viet.nguyen/" target=”_blank”><i class="fab fa-instagram"></i></a>
          <a href="https://twitter.com/namnguyenDev" target=”_blank”><i class="fab fa-twitter"></i></a>
          <a href="https://www.facebook.com/vietnam.nguyen.186" target=”_blank”><i class="fab fa-facebook"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
export default {
  name: "Contact",
  components: {
    Header,
    SideBar,
    Footer
  }
};
</script>
<style coped>
.big-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;

  
  margin-top: 10px;
}

.contact-link button {
  border: 0.5px solid rgba(178, 201, 178, 0.568);
  box-shadow: 1px 1px 1px 1px rgba(145, 153, 145, 0.459);
  border-radius: 5px;
  width: 100px;
  height: 30px;
  font-weight: bold;
  outline: none;
}

.contact-link {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.media a {
  transform: scale(2);
  cursor: pointer;
  margin: 30px;
  color: rgb(120, 177, 120)
}

.email,
.name,
.message {
  margin-bottom: 30px;
}

label {
  font-weight: bold;
}

@media (min-width: 765px) {
  .email,
  .name,
  .message {
    margin-left: 30px;
  }
}
</style>
