import Vue from 'vue';

Vue.filter('average', function (value, precision = 2) {
  if (!isNaN(value) && value !== null) {
    return parseFloat(value).toFixed(precision);
  }
  return value;
});

