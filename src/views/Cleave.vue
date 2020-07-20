<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center"
      vs-align="center" vs-w="6">
      <vs-card>
        <div slot="header">
          <h3>
            Cleave.js
          </h3>
        </div>
        <vs-list>
          <vs-list-header title="Размеры"></vs-list-header>
          <vs-list-item title='Без сжатия 52.5кб'></vs-list-item>
          <vs-list-item title='С сжатия 21.52кб'></vs-list-item>
          <vs-list-item title='Gzip 6.66кб'></vs-list-item>
          <vs-list-header title="Минусы"></vs-list-header>
          <vs-list-item title='Собития input срабативает 3 раза вместо 1'></vs-list-item>
          <vs-list-item>
            <div slot="avatar">
              <input v-cleave @input='input' @change='change' v-model='value' />
            </div>
          </vs-list-item>
        </vs-list>
      </vs-card>
    </vs-col>
  </vs-row>
</template>
<script>
/* eslint-disable no-param-reassign */
import Cleave from 'cleave.js';

export default {
  name: 'cleave',
  data() {
    return {
      value: 9000.99999,
    };
  },
  methods: {
    input() {
      // eslint-disable-line no-console
      console.log(this.value);
    },
    change() {
      // eslint-disable-line no-console
      console.log('change');
    },
  },
  mounted() {
    // eslint-disable-line no-console
    setTimeout(() => console.log(this.value), 1000);
  },
  directives: {
    cleave: {
      inserted: (el) => {
        el.cleave = new Cleave(el, {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          delimiter: ' ',
        });
      },
      update: (el) => {
        const event = new Event('input', { bubbles: true });
        setTimeout(() => {
          el.value = el.cleave.properties.result;
          el.dispatchEvent(event);
        }, 100);
      },
    },
  },
};
</script>
