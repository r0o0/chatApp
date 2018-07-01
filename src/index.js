import './main.scss';

console.log('webpack works :)');

if (module.hot) {
  module.hot.accept('../src')
}