const accordionActiveClass = 'accordion--active';
const accordionTrigger = document.querySelectorAll('.accordion');
const accordionHandler = (event) =>
  event.target.classList.toggle(accordionActiveClass);

for (const item of accordionTrigger) {
  item.addEventListener('click', accordionHandler);
}
