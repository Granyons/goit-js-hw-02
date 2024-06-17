'use strict';
function getShippingCost(country) {
  let messageAboutDelivery;
  const priseToChina = 100;
  const priseToChile = 250;
  const priseToAustralia = 170;
  const priseToJamaica = 120;
  switch (country) {
    case 'China':
      messageAboutDelivery = `Shipping to ${country} will cost ${priseToChina} credits`;
      break;
    case 'Chile':
      messageAboutDelivery = `Shipping to ${country} will cost ${priseToChile} credits`;
      break;
    case 'Australia':
      messageAboutDelivery = `Shipping to ${country} will cost ${priseToAustralia} credits`;
      break;
    case 'Jamaica':
      messageAboutDelivery = `Shipping to ${country} will cost ${priseToJamaica} credits`;
      break;
    default:
      messageAboutDelivery = 'Sorry, there is no delivery to your country';
  }
  return messageAboutDelivery;
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
