// utils/yandexMetrika.js
export const yandexMetrika = {
  // Отслеживание события
  reachGoal: (target) => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(106270317, 'reachGoal', target)
    }
  },
  
  // Отправка hit вручную
  hit: (url, options) => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(106270317, 'hit', url || window.location.href, options)
    }
  },
  
  // Добавление в корзину
  addToCart: (product) => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(106270317, 'addToCart', product)
    }
  }
}

// Пример использования в компоненте
// import { yandexMetrika } from '../utils/yandexMetrika'

// const ProductButton = () => {
//   const handleClick = () => {
//     yandexMetrika.reachGoal('buy_button_click', {
//       product_id: '123',
//       price: 1000
//     })
//   }
  
//   return <button onClick={handleClick}>Купить</button>
// }