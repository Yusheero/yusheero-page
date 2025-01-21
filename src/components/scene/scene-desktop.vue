<script setup>
import { onMounted, useTemplateRef } from 'vue';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import modelPath from '@/assets/models/trueno/toyota_ae86.glb';

// const canvasContainer = useTemplateRef('canvasContainer');
// const initThreeJS = () => {
//   // Создаем сцену
//   const scene = new THREE.Scene();

//   // Создаем камеру
//   const camera = new THREE.PerspectiveCamera(75, canvasContainer.value.offsetWidth / canvasContainer.value.offsetHeight, 0.1, 1000);
//   camera.position.set(3, 1, 1);

//   // Настройка рендерера
//   const renderer = new THREE.WebGLRenderer({ antialias: true });
//   renderer.setSize(canvasContainer.value.offsetWidth, canvasContainer.value.offsetHeight);
//   canvasContainer.value.appendChild(renderer.domElement);

//   // Добавляем освещение
//   const light = new THREE.AmbientLight(0xffffff, 0.5);
//   scene.add(light);
//   const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//   directionalLight.position.set(5, 5, 5).normalize();
//   scene.add(directionalLight);

//   // Загружаем модель
//   const loader = new GLTFLoader();
//   loader.load(modelPath, function ( gltf ) {
//     scene.add(gltf.scene);
//     console.error('Всё по кайфу');
//   }, undefined, function (error) {
// 	  console.error(error);
//   });

//   // Добавляем OrbitControls
//   const controls = new OrbitControls(camera, renderer.domElement);
//   controls.enableDamping = true; // Включаем затухание
//   controls.dampingFactor = 0.25; // Фактор затухания
//   controls.screenSpacePanning = false; // Запрет панорамирования в пространстве экрана
//   function animate() {
//     requestAnimationFrame(animate)
//     renderer.render(scene, camera);
//   }
//   animate();
// };

onMounted(() => {
  // initThreeJS();
});
</script>
<template>
  <div class="scene" ref="canvasContainer"> There will be my car </div>
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