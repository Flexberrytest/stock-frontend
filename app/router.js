import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-stock-склад-l');
  this.route('i-i-s-stock-склад-e',
  { path: 'i-i-s-stock-склад-e/:id' });
  this.route('i-i-s-stock-склад-e.new',
  { path: 'i-i-s-stock-склад-e/new' });
});

export default Router;
