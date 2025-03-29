const t={template:`
    <div class="async-loading">
      <div class="loading-spinner"></div>
      <p>Загрузка...</p>
    </div>
  `},o={template:`
    <div class="async-error">
      <p>Произошла ошибка при загрузке компонента</p>
      <button @click="$emit('retry')">Повторить</button>
    </div>
  `,emits:["retry"]};function e(n){return{loader:n,loadingComponent:t,errorComponent:o,delay:200,timeout:1e4}}export{e as c};
