<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center"
      vs-align="center" vs-w="6">
      <vs-card>
        <div slot="header">
          <h3>
            VMask
          </h3>
        </div>
        <vs-list>
          <vs-list-header title="Размеры"></vs-list-header>
          <vs-list-item title='Без сжатия 20.62кб'></vs-list-item>
          <vs-list-item title='С сжатия 8.72кб'></vs-list-item>
          <vs-list-item title='Gzip 4.16кб'></vs-list-item>
          <vs-list-header title="Минусы"></vs-list-header>
          <vs-list-item title='Собития input срабативает 3 раза вместо 1'></vs-list-item>
          <vs-list-item title='Когда есть дроби не удобно редактироват. После ввода каждого
          число курсор передвигается в конец и так как нельзя вводит дроби больше
          2 ввод блокируется. Чтобы вводит еще число каждый раз самому надо
          передвинут курсор'></vs-list-item>
          <vs-list-item>
            <div slot="avatar">
              <input v-mask='mask' @input='input' @change='change' v-model='value' />
            </div>
          </vs-list-item>
        </vs-list>
      </vs-card>
    </vs-col>
  </vs-row>
</template>
<script>
/* eslint-disable no-param-reassign */
import { VueMaskDirective } from 'v-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const currencyMask = createNumberMask({
  prefix: '',
  allowDecimal: true,
  thousandsSeparatorSymbol: ' ',
  allowLeadingZeroes: true,
});

export default {
  name: 'v-mask',
  data() {
    return {
      value: 9000.99999,
      mask: currencyMask,
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
    mask: VueMaskDirective,
  },
};
</script>
