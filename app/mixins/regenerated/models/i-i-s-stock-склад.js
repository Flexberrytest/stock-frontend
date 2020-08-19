import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  работников: DS.attr('number'),
  товар: DS.hasMany('i-i-s-stock-товар', { inverse: 'склад', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-stock-склад.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  работников: {
    descriptionKey: 'models.i-i-s-stock-склад.validations.работников.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-stock-склад.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};
