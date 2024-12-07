<script>
import f3 from "family-chart"; // npm install family-chart@0.1.1 or yarn add family-chart@0.1.1
import "family-chart/styles/family-chart.css";
import { transformCsvToD3Data } from "../utils/transformations";
import familyMembers from "../assets/family-members.csv";

export default {
  name: "FamilyChart",
  mounted() {
    create(data());

    function create(data) {
      const f3Chart = f3
        .createChart("#FamilyChart", data)
        .setTransitionTime(1000)
        .setCardXSpacing(250)
        .setCardYSpacing(150);

      const f3Card = f3Chart
        .setCard(f3.CardHtml)
        .setCardDisplay([["first name", "last name"], ["birthday"]])
        .setCardDim({})
        .setMiniTree(true)
        .setStyle("imageRect")
        .setOnHoverPathToMain();

      // const f3EditTree = f3Chart
      //   .editTree()
      //   .fixed(true)
      //   .setFields(["first name", "last name", "birthday"])
      //   .setEditFirst(true);

      // f3EditTree.setNoEdit();

      f3Card.setOnCardClick((e, d) => {
        // f3EditTree.open(d);
        // if (f3EditTree.isAddingRelative()) return;
        f3Card.onCardClickDefault(e, d);
      });

      f3Chart.updateTree({ initial: true });
      f3EditTree.open(f3Chart.getMainDatum());

      f3Chart.updateTree({ initial: true });
    }

    function data() {
      return transformCsvToD3Data(familyMembers)
    }
  },
};
</script>

<template>
  <div
    id="FamilyChart"
    class="f3"
    style="
      width: 100vw;
      height: 100vh;
      margin: auto;
      background-color: rgb(33, 33, 33);
      color: #fff;
    "
  ></div>
</template>
