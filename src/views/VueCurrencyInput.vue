<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center"
      vs-align="center" vs-w="6">
      <vs-card>
        <div slot="header">
          <h3>
            Vue Currency Input
          </h3>
        </div>
        <vs-list>
          <vs-list-header title="Размеры"></vs-list-header>
          <vs-list-item title='Без сжатия 23.7кб'></vs-list-item>
          <vs-list-item title='С сжатием 13.38кб'></vs-list-item>
          <vs-list-item title='Gzip 4.55кб'></vs-list-item>
          <vs-list-header title="Минусы"></vs-list-header>
          <vs-list-item title='Собития change срабативает 2 раза вместо 1 ого'></vs-list-item>
          <vs-list-item title='Форматтирования не работает при вводе'></vs-list-item>
          <vs-list-item
            title='Разделитель нельзя заменит на точку когда разделитель для тисячи пустое строка'>
          </vs-list-item>
          <vs-list-item
            title='При использвания как директива до первого
            focus на input не сработывает форматирования'>
          </vs-list-item>
          <vs-list-item
            title='Чтобы директиво правильно работало надо всегда обработать
            число чтобы после точки было 2 число небольше и не меньше'>
          </vs-list-item>
          <vs-list-item title='Если вводит число когда уже есть 2 число после точки.
            Точка перешается в одну позицию вправо'></vs-list-item>
          <vs-list-item>
            <div slot="avatar">
              <input @input='input' @change='change'
                v-currency="{
                  currency: null,
                }" v-model='value' />
            </div>
          </vs-list-item>
        </vs-list>
      </vs-card>
    </vs-col>
  </vs-row>
</template>
<script>
/* eslint-disable no-param-reassign */
import { CurrencyDirective } from 'vue-currency-input';

export default {
  name: 'Money',
  data() {
    return {
      value: 9000.999999,
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
  directives: { currency: CurrencyDirective },
  mounted() {
    // eslint-disable-line no-console
    setTimeout(() => console.log(this.value, 'initied'), 1000);
  },
};
</script>
