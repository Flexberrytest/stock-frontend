import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  количество: DS.attr('number'),
  цена: DS.attr('number'),
  склад: DS.belongsTo('i-i-s-stock-склад', { inverse: 'товар', async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-stock-товар.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-stock-товар.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-stock-товар.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  склад: {
    descriptionKey: 'models.i-i-s-stock-товар.validations.склад.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-stock-товар', {
    наименование: attr('Наименование', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    цена: attr('Цена', { index: 2 })
  });
};
