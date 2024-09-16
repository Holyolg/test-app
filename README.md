## Установка

```bash
npm i
```

## Запуск

```bash
npm run dev
```

Открывается на [http://localhost:3000](http://localhost:3000)

## О приложении

Тестовое задание

```
/auth - страница аутентификации
```

Производится аутентификация путем GraphQl запроса к https://api.escuelajs.co/graphql. В ответ приходит JWT-токен, которые сохраняются в cookie. Через Zustand устанавливается флаг авторизации, сохраняемый в localStorage. Проверка сессии производится через middleware

```
/my-info - страница My-info
```

Страница, которая обращается через GraphQl к https://api.escuelajs.co/graphql. В ответ приходят имя и аватар пользователя. Кнопка выхода из аккаунта удаляет JWT-токены и устанавливает флаг авторизации в Zustand на false.

## Деплой на Versel

[Сайт](https://www.example.com)
