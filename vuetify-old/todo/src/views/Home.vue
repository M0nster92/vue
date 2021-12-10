<template>
  <div class="Home">
    <h1>Homepage</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia officiis non cum eveniet! Ullam quod quidem porro necessitatibus sequi cupiditate dolorem quasi beatae aperiam magni in, fugit et debitis.</p>

    <v-btn class="pink white--text">Button</v-btn>

    <v-container fluid>
      <v-layout row wrap>
        <v-flex lg6 md4>
          <v-card>Card</v-card>
        </v-flex>
        <v-flex lg6 md4>
          <v-card>Card</v-card>
        </v-flex>
        
      </v-layout>

    </v-container>

    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  <v-container class="grey lighten-5">
    <v-row no-gutters
        style="height: 150px;">
      <v-col>Col</v-col>
    </v-row>
  </v-container>
    
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data () {
      return {
        dialog: false,
        alignments: [
        'start',
        'center',
        'end',
      ],
      }
    },
}
</script>
