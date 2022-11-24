
import currencyFormatter from 'currency-formatter';


export function formatPrice(price, currency = 'EUR') {

  return currencyFormatter.format(price, { code: currency });

}//formatPrice