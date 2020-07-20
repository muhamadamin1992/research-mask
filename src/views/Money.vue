<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center"
      vs-align="center" vs-w="6">
      <vs-card>
        <div slot="header">
          <h3>
            V-money
          </h3>
        </div>
        <vs-list>
          <vs-list-header title="Размеры"></vs-list-header>
          <vs-list-item title='С сжатием 4.72кб'></vs-list-item>
          <vs-list-item title='Gzip 2кб'></vs-list-item>
          <vs-list-header title="Минусы"></vs-list-header>
          <vs-list-item title='Собития change срабативает 2 раза за каждый ввод'></vs-list-item>
          <vs-list-item
            title='Чтобы директиво правильно работало надо всегда обработать
            число чтобы после точки было 2 число небольше и не меньше'>
          </vs-list-item>
          <vs-list-item title='Если вводит число когда уже есть 2 число после точки.
            Точка перешается в одну позицию вправо'></vs-list-item>
          <vs-list-item title='Версия ниже чем 1'></vs-list-item>
          <vs-list-item title='Последный раз обновлен 3 года назад'></vs-list-item>
          <vs-list-item>
            <div slot="avatar">
              <input @input='input' @change='change' v-money='money' v-model='value' />
            </div>
          </vs-list-item>
        </vs-list>
      </vs-card>
    </vs-col>
  </vs-row>
</template>
<script>
/* eslint-disable no-param-reassign */
import { VMoney } from 'v-money';

export default {
  name: 'Money',
  data() {
    return {
      value: 9000.99999,
      money: {
        decimal: '.',
        thousands: ' ',
        precision: 2,
      },
    };
  },
  methods: {
    input() {
      // eslint-disable-line no-console
      console.log(this.value, 'input');
    },
    change() {
      // eslint-disable-line no-console
      console.log('change');
    },
  },
  directives: { money: VMoney },
  mounted() {
    // eslint-disable-line no-console
    setTimeout(() => console.log(this.value, 'initied'), 1000);
  },
};
</script>
