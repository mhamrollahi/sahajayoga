import jm from 'jalali-moment'

export function toPersianDate(date,format='YYYY/MM/DD'){
  return jm(date).locale('fa').format(format)
}