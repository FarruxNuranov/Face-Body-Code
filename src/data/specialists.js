// ⚠️ Шаблонные данные — замените на реальные (соцсети). Фото — настоящие.
import elnoraPhoto from '../assets/elnora.jpg'
import anastasiaPhoto from '../assets/anastasia.jpg'

export const specialists = [
  {
    id: 'elnora',
    name: 'Эльнора',
    role: 'Эстетист-косметолог',
    photo: elnoraPhoto,
    tagline: 'Аппаратная косметология и перманентный макияж',
    services: [
      'Лазерная эпиляция',
      'Микроигольчатый лифтинг',
      'Перманентный макияж',
      'Удаление перманента и татуировок',
      'Эндосфера массаж',
    ],
    instagram: '#',
  },
  {
    id: 'anastasia',
    name: 'Анастасия',
    role: 'Мастер ногтевого сервиса и lash-мастер',
    photo: anastasiaPhoto,
    tagline: 'Маникюр, ресницы и уходовые процедуры',
    services: [
      'Маникюр',
      'Педикюр',
      'Наращивание ресниц',
      'Ламинирование ресниц и бровей',
      'Эндосфера массаж',
    ],
    instagram: '#',
  },
]
