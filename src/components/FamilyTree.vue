<script setup>
import f3 from "family-chart"; // npm install family-chart@0.1.1 or yarn add family-chart@0.1.1
import "family-chart/styles/family-chart.css";
import { transformCsvToD3Data } from "../utils/transformations";
import familyMembers from "../assets/family-members.csv";
import { onMounted } from "vue";

    const createFamilyTree = (data) => {
      const f3Chart = f3.createChart('#FamilyChart', data)
        .setTransitionTime(1000)
        .setCardXSpacing(250)
        .setCardYSpacing(150)
        .setOrientationVertical()
    
      const f3Card = f3Chart.setCard(f3.CardHtml)
        .setCardDisplay([["first name","last name"],[]])
        .setCardDim({})
        .setMiniTree(true)
        .setStyle('imageCircle')
        .setOnHoverPathToMain()
    
      f3Card.setOnCardClick((e, d) => {
        f3Card.onCardClickDefault(e, d)
      })
    
      f3Chart.updateTree({initial: true})
    }

    onMounted(() => {
      const data = transformCsvToD3Data(familyMembers);
      
      createFamilyTree(data);
    })
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
