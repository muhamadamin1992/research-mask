<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center"
      vs-align="center" vs-w="6">
      <vs-card>
        <div slot="header">
          <h3>
            VanillaMasker
          </h3>
        </div>
        <vs-list>
          <vs-list-header title="Размеры"></vs-list-header>
          <vs-list-item title='Без сжатия 6.2кб'></vs-list-item>
          <vs-list-item title='С сжатия 3.24кб'></vs-list-item>
          <vs-list-item title='Gzip 1.3кб'></vs-list-item>
          <vs-list-header title="Минусы"></vs-list-header>
          <vs-list-item title='Собития input срабативает 3 раза вместо 1'></vs-list-item>
          <vs-list-item
            title='Чтобы директиво правильно работало надо всегда обработать
            число чтобы после точки было 2 число небольше и не меньше'>
          </vs-list-item>
          <vs-list-item title='Если вводит число когда уже есть 2 число после точки.
            Точка перешается в одну позицию вправо'></vs-list-item>
          <vs-list-item>
            <div slot="avatar">
              <input v-masker @input='input' @change='change' v-model='value' />
            </div>
          </vs-list-item>
        </vs-list>
      </vs-card>
    </vs-col>
  </vs-row>
</template>
<script>
/* eslint-disable no-param-reassign */
import VMasker from 'vanilla-masker';

export default {
  name: 'vanilla-masker',
  data() {
    return {
      value: 900099999,
    };
  },
  methods: {
    input() {
      console.log(this.value);
    },
    change() {
      console.log('change');
    },
  },
  mounted() {
    setTimeout(() => console.log(this.value), 1000);
  },
  directives: {
    masker: {
      inserted: (el) => {
        VMasker(el).maskMoney({
          precision: 2,
          separator: '.',
          delimiter: ' ',
          unit: '',
          suffixUnit: '',
        });
      },
      update(el) {
        const event = new Event('input', { bubbles: true });
        setTimeout(() => {
          el.dispatchEvent(event);
        }, 100);
      },
    },
  },
};
</script>
