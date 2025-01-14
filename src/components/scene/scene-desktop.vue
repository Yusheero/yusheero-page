<script setup>
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { onMounted, ref } from 'vue';

// const canvasContainer = ref(null);
// let scene, camera, renderer;

// const initThreeJS = () => {
//   scene = new THREE.Scene();

//   // Настройка камеры
//   camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);
//   camera.position.z = 5;

//   // Настройка рендерера
//   renderer = new THREE.WebGLRenderer();
//   renderer.setSize(300, 300);
//   canvasContainer.value.appendChild(renderer.domElement);

//   // Добавление освещения
//   const light = new THREE.AmbientLight(0xffffff); // мягкий белый свет
//   scene.add(light);

//   // Загрузка модели GLB
//   const loader = new GLTFLoader();
//   loader.load('/assets/models/trueno/toyota_ae86.glb', (gltf) => {
//     scene.add(gltf.scene);
//   }, undefined, (error) => {
//     console.error(error);
//   });

//   // Запуск анимации
//   animate();
// };

// const animate = () => {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// };

// onMounted(() => {
//   initThreeJS();
// });
</script>
<template>
  <div class="scene" ref="canvasContainer">
    THERE WILL BE MY CAR
  </div>
</template>
<style lang="scss" scoped>
.scene {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px;
  background: var(--color-secondary);
  color: var(--color-primary);
}
</style>