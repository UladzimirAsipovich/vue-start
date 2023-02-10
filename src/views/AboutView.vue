<template>
  <section className="about">
    <div className="about__greeting">
      <header>
        <h1>Привет! Меня зовут Владимир Осипович!</h1>
      </header>
      <p>
        Я постоянно учусь и занимаюсь саморазвитием. Имею два высших технических
        образования. Могу принимать разумные и взвешенные решения в резко
        меняющейся обстановке. Стараюсь логически мыслить, умею отстаивать своё
        мнение и при этом спокойно воспринимать конструктивную критику. Умею
        ладить с группой людей. В среднесрочной перспективе (1-3 мес.) полностью
        готов к переезду. Все работы в портфолио (дизайн, вёрстка, программная
        разработка, поисковая оптимизация и все другие сопутствующие работы)
        делал сам (один) с самого начала (с нуля), включая серверную часть и
        административную панель.
      </p>
    </div>
    <div className="content-section">
      <header><h2>Профессиональные качества</h2></header>
      <ul>
        <li>HTML, CSS (SASS, SCSS), schema.org;</li>
        <li>JS (“Vanilla”, React, NextJS, Node, ExpressJS, Webpack);</li>
        <li>DB (MySQL, Firestore, ORM Sequelize);</li>
      </ul>
    </div>
    <div className="content-section">
      <header><h2>Личностные качества</h2></header>
      <ul>
        <li>Самоорганизован, не требую контроля со стороны руководства;</li>
        <li>Исполнительный, дисциплинированный, работоспособный;</li>
        <li>
          Не имею вредных привычек (курение), спиртное как у медианы здорового
          большинства — редко, в хорошей компании и по праздникам.
        </li>
      </ul>
    </div>
    <div className="content-section">
      <header><h2>Социальные сети</h2></header>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/vladimirosipovich/"
            target="_blank"
            >LinkedIn</a
          >
          - LinkedIn Page;
        </li>
      </ul>
    </div>
    <div className="content-section">
      <header><h2>Опыт работы 3+ лет</h2></header>
      <ul>
        <li>
          <a href="https://tpmbarbershop.by/" target="_blank"
            >The Prankster Monkey’s Barbershop</a
          >
          - Дизайн и разработка сайта. Полностью написан на Next.js +
          TypeScript, включая серверную часть (проверка формы и отправка
          электронного письма на почту для обратной связи), выложен не на
          хостинг от Vercel;
        </li>
        <li>
          <a href="https://3dmasterhand.by/" target="_blank">3D Master Hand</a>
          - Дизайн и разработка сайта. Клиентский рендеринг – React, SCSS,
          Bootstrap;
        </li>
        <li>
          <a href="https://healthylife.by/" target="_blank">Healthylife</a>
          - Дизайн и разработка интернет-магазина. Серверный рендеринг –
          ExpressJS, PUG, React (административная панель), SCSS, Bulma. СУБД
          MySQL;
        </li>
        <li>
          <a href="https://camonasia.com/" target="_blank">Camonasia</a> -
          Дизайн и разработка сайта. Серверный рендеринг – ExpressJS, PUG, SCSS,
          Bulma. СУБД MySQL; В настоящий момент сайт находится в процессе
          редизайна и переписывается под Next.js.
        </li>
      </ul>
    </div>
    <hr />
    <footer className="content-section">
      <header>
        <h2>
          Спасибо что прочитали до конца! Я был бы очень рад присоединиться к
          вашей команде!
        </h2>
      </header>
    </footer>
  </section>
</template>

<script lang="ts">
export default {
  created() {
    document.title = "Обо мне";
  },
};
</script>

<style scoped lang="scss">
.about {
  max-width: 780px;
  margin: auto;

  &__greeting {
    margin-bottom: 2rem;
    font-size: 1rem;

    h1 {
      font-size: 3rem;
    }
  }

  .content-section {
    margin-bottom: 2.5rem;

    ul {
      font-size: 1.25rem;
    }

    header {
      margin-bottom: 1.5rem;
    }
  }

  footer.content-section {
    font-size: 3.5rem;
    text-align: center;

    h2 {
      font-weight: 100;
      line-height: 1;
    }
  }
}
</style>
