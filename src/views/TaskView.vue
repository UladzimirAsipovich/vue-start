<template>
  <div class="task">
    <div>
      <header class="task__header">
        <h1>Тестовое задание на Middle Front-end Developer!</h1>
      </header>
      <div class="task__greeting">
        <p>
          <small>
            Приветствую тебя, друг, рада, что ты заинтересовался вакансией в
            нашей компании! Мы ищем классных специалистов и единомышленников к
            себе в команду Надеемся, что ты, как раз тот, кто нам нужен! (А мы
            те, кто нужны тебе) Тебя ждет тестовое задание, цель которого
            оценить уровень кандидата и его готовность приступить к работе.
          </small>
        </p>
        <p>
          <small>
            Желаю тебе удачи, также помни, что по любым вопросам по вакансии и
            тестовому заданию ты можешь написать мне в телеграм
            <strong>Beta Sveta (+79291646679)</strong>
          </small>
        </p>
      </div>
      <div class="task__content">
        <p>
          <strong>ЗАДАЧА:</strong> Cоздать одностраничное приложение с
          компонентом поиска и с выводом результатов поиска в список. В списке
          результатов каждый элемент должен быть инстансом компонента для
          результатов. Для поиска использовать
          <a href="https://nominatim.org/release-docs/latest/api/Search"
            >nominatim.org</a
          >. Без кнопок поиска и сабмитов формы не нужно, достаточно автоматом
          обновлять результаты после каждого изменения (keyup_event) в инпуте.
        </p>
        <p>
          <strong>УСЛОВИЯ:</strong> Использовать Vue 3 (Composition api
          обязательно), TypeScript, Pinia Обязательно задействовать SSR Не
          использовать Nuxt, Quasar и подобные фреймворки с высокоуровневой
          реализацией SSR. Стили SCSS (UI киты не использовать, но стилизовать
          надо. Сильно можно не заморачиваться.
        </p>
        <p>
          <strong>РЕЗУЛЬТАТ:</strong> Ссылку на Git репозиторий с решением
          отправить в телеграм @Beta_Sveta ( 89291646679 ) и дождаться решения
          (1-3 дня)
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  created() {
    document.title = "Задание";
  },
};
</script>

<style scoped lang="scss">
.task {
  max-width: 780px;
  margin: auto;

  p {
    margin-bottom: 1rem;
  }

  &__header {
    margin-bottom: 2rem;

    > * {
      font-size: 3rem;
    }
  }

  &__greeting {
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  &__content {
    font-size: 1.5rem;
  }
}
</style>
