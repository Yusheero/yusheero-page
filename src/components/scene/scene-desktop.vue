<script setup>
import { ref, onMounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import modelPath from '@/assets/models/trueno/toyota_ae86.glb';

const canvasContainer = ref();
let scene, camera, renderer, controls;
let cube;

const initThreeJS = () => {
  // Создаем сцену
  scene = new THREE.Scene();

  console.log('canvasContainer.offsetHeight', canvasContainer.value.offsetHeight);
  console.log('canvasContainer.offsetWidth', canvasContainer.value.offsetWidth);

  // Создаем камеру
  camera = new THREE.PerspectiveCamera(75, canvasContainer.value.offsetWidth / canvasContainer.value.offsetHeight, 0.1, 1000);
  camera.position.set(0, 0, 5);

  // Настройка рендерера
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(canvasContainer.value.offsetWidth, canvasContainer.value.offsetHeight);
  canvasContainer.value.appendChild(renderer.domElement);



  // Создаем куб
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Добавляем OrbitControls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Включаем затухание
  controls.dampingFactor = 0.25; // Фактор затухания
  controls.screenSpacePanning = false; // Запрет панорамирования в пространстве экрана
};

onMounted(() => {
  initThreeJS();
});
</script>
<template>
  <div class="scene" ref="canvasContainer"></div>
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