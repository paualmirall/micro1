<template>
  <div class="hello">
    {{ text }}
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    text() {
      return _.snakeCase('THIS IS MICROFRONTEND NUMBER 1');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
