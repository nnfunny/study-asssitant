<template>
  <div class="wrapper">
    <SideBar></SideBar>
    <div id="content">
      <Header title="RPS"></Header>
      <div class="score-board">
        <div class="user-score">
          <h4>{{ user.name }}</h4>
          <h3>{{ user.score }}</h3>
        </div>
        <div class="comp-score">
          <h4>{{ computer.name }}</h4>
          <h3>{{ computer.score }}</h3>
        </div>
      </div>

      <div class="result">
        <p>{{ result }}</p>
      </div>

      <div class="choices">
        <button
          class="choice"
          v-for="item in itemChoices"
          v-bind:key="item.id"
          v-on:click="play(item.choice)"
        >
          <i v-bind:class="item.icon"></i>
        </button>
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
  name: "Rock Papper Scissors",
  components: {
    Header,
    SideBar,
    Footer
  },
  data: function() {
    return {
      result: "Let's Started!!!",
      user: {
        name: "User",
        score: 0
      },
      computer: {
        name: "Computer",
        score: 0
      },
      itemChoices: [
        {
          id: 1,
          choice: "rock",
          icon: "far fa-hand-rock"
        },
        {
          id: 2,
          choice: "paper",
          icon: "far fa-hand-paper"
        },
        {
          id: 3,
          choice: "scissors",
          icon: "far fa-hand-scissors"
        }
      ]
    };
  },
  methods: {
    play: function(choice) {
      let handList = ["rock", "paper", "scissors"];

      if (choice === "rock") {
        let handComp = handList[Math.floor(Math.random() * handList.length)];

        if (handComp === "rock") {
          this.result = "Rock(user) is equal to Rock(comp). It's a draw.";
        } else if (handComp === "paper") {
          this.result = "Paper covers Rock. Computer wins!";
          this.computer.score += 1;
        } else {
          this.result = "Rock covers Scissors. You win!";
          this.user.score += 1;
        }
      } else if (choice === "paper") {
        let handComp = handList[Math.floor(Math.random() * handList.length)];

        if (handComp === "rock") {
          this.result = "Paper covers Rock. You win!";
          this.user.score += 1;
        } else if (handComp === "paper") {
          this.result = "Paper(user) is equal to Paper(comp). It's a draw.";
        } else {
          this.result = "Scissors cover Paper. Computer wins!";
          this.computer.score += 1;
        }
      } else {
        let handComp = handList[Math.floor(Math.random() * handList.length)];

        if (handComp === "rock") {
          this.result = "Rock covers Scissors. Computer wins!";
          this.computer.score += 1;
        } else if (handComp === "paper") {
          this.result = "Scissors cover Paper. You win!";
          this.user.score += 1;
        } else {
          this.result =
            "Scissors(user) are equal to Scissors(comp). It's a draw.";
        }
      }
    }
  }
};
</script>
<style scoped>
    .score-board {
        color: white;

        margin: 20px auto;
        border: 1px solid rgb(214, 209, 209);
        width: 200px;
        height: 100px;
        border-radius: 5px;
        box-shadow: 0 1px 4px 0px rgb(218, 214, 214);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .user-score {
        height: 100px;
        width: 100px;
        border: 1px solid rgb(199, 194, 194);
        border-radius: 5px;
        background: #5cb85cab;
        box-shadow: 1px 1px 4px 1px rgb(126, 123, 123);

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 2px;
    }
    .comp-score {
        height: 100px;
        width: 100px;
        border: 1px solid rgb(216, 210, 210);
        border-radius: 5px;
        background: #d9544fa6;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        box-shadow: 1px 1px 4px 1px rgb(126, 123, 123);
        margin: 2px;
    }

    .user-score h4 {
        background: #d9544fa6;
        height: 20px;
        width: 40px;
        text-align: center;
        margin-bottom: 10px;
        font-size: 1rem;
        border-radius: 5px;
    }

    .comp-score h4 {
        background: #5cb85cab;
        height: 20px;
        width: 90px;
        text-align: center;
        margin-bottom: 10px;
        font-size: 1rem;
        border-radius: 5px;
    }

    .result p {
        text-align: center;
        color: rgb(104, 100, 100);
        font-weight: bold;
        font-size: 1.5rem;
    }

    .choices {
        display: flex;
        align-items: center;
        justify-content: center;

        margin: 100px;
    }

    .choice {
        display: flex;
        align-items: center;
        justify-content: center;

        color: rgb(104, 100, 100);
        font-size: 5rem;
        margin: 20px 50px;

        border: 5px solid rgba(221, 183, 11, 0.603);
        border-radius: 50%;
        height: 150px;
        width: 150px;

        box-shadow: none;
        background: none;
        outline: none;
        cursor: pointer;
    }

    @media screen and (max-width: 800px) {
        .choices {
            flex-direction: column;
        }
    }

    .choice i {
        margin: 20px;
    }
</style>
