import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export const accordion = new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: true,
  onOpen: function (currentElement) {
    console.log(currentElement);
    currentElement.style.backgroundColor = 'green';
  },
  onClose: function (currentElement) {
    console.log(currentElement);
    currentElement.style.backgroundColor = 'white';
  },
});
