import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

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

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СкладE', 'i-i-s-stock-склад', {
    адрес: attr('Адрес', { index: 0 }),
    работников: attr('Работников', { index: 1 }),
    товар: hasMany('i-i-s-stock-товар', 'Товар', {
      наименование: attr('Наименование', { index: 0 }),
      количество: attr('Количество', { index: 1 }),
      цена: attr('Цена', { index: 2 })
    })
  });

  modelClass.defineProjection('СкладL', 'i-i-s-stock-склад', {
    адрес: attr('Адрес', { index: 0 }),
    работников: attr('Работников', { index: 1 })
  });
};
