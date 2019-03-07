new Vue({
  el: '#dg-wrapper',
  data: {
    slides: 6
  },
  components: {
    'carousel-3d': Carousel3d.Carousel3d,
    'slide': Carousel3d.Slide
  }
})

/*import Vue from 'vue';
import Carousel3d from 'carousel-3d';
Vue.use(Carousel3d);*/



var month;

switch (new Date().getMonth()) {
  default:
    month = "this is null";
    break;
  case 0:
    month = "june";
    break;
    case 1:
    month = "july";
    break;
                             }

document.querySelector('.test').innerHTML = month;