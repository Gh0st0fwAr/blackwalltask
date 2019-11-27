# Тестовое задание BlackWall Group

> Перед установкой зависимостей и запуском проекта убедитесь, что у вас установлена [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/), а так же 
[последняя версия Yarn](https://yarnpkg.com/ru/docs/install)

##  Чтобы развернуть проект необходимо:
```sh
$ git clone https://github.com/Gh0st0fwAr/blackwalltask.git
$ cd blackwalltask
$ yarn
```

## Скрипты package.json:

| Скрипт | Назначение |
| ------ | ------ |
| dev | Запустит webpack-dev-server с _горячей_ заменой модулей |


#### Чтобы запустить скрипт:
```sh
$ npm run dev
```

##### Либо:
```sh
$ yarn dev
```

#### Для изменения размера поля и количества шашек:
Необходимо зайти в файл src/styles/variables.scss и прописать значение в $gamebox-size. Для полей 9\16\25 - 3\4\5 соответственно
Также в основном файле App.vue изменить значение cellsNum на 9\16\25 соответственно.
