<template>
  <div class="email-block">
    <h2 class="email-block__title">SEND EMAIL</h2>
    <h2 class="email-block__title">FORM</h2>
    <!-- <form class="email-block__form">
      <input type="text" class="email-block__input" placeholder="Name" />
      <input type="email" class="email-block__input" placeholder="Email" />
      <textarea class="email-block__textarea" placeholder="Message"></textarea>
      <button class="email-block__button">Send</button>
    </form> -->
  </div>
</template>

<style lang="scss" scoped>
.email-block {
  grid-area: email;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-primary);
  border-radius: 10px;
  padding: 10px;
  color: var(--color-secondary);

  &__title {
    font-size: 1rem;
    font-weight: 700;
    font-family: "Raleway", sans-serif;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__input {
    width: 100%;
    height: 2rem;
    border-radius: 0.5rem;
    border: 1px solid var(--color-secondary);
  }

  &__textarea {
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    border: 1px solid var(--color-secondary);
  }

  &__button {
    width: 100%;
    height: 2rem;
    border-radius: 0.5rem;
  }
}
</style>
