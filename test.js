import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 }, // 30 сек: плавно наращиваем до 10 пользователей
    { duration: '1m', target: 10 },  // 1 минута: держим постоянную нагрузку 10 пользователей
    { duration: '30s', target: 0 },  // 30 сек: плавно снижаем до 0
  ],
};

export default function () {
  // Запрашиваем главную страницу и статические ресурсы (CSS и векторную диаграмму)
  http.get('https://rostclimat.ru/');
  http.get('https://rostclimat.ru/assets/css/docs.css');
  http.get('https://rostclimat.ru/assets/images/architecture-diagram.svg');
  
  sleep(1); // Пауза 1 секунда между итерациями каждого пользователя
}