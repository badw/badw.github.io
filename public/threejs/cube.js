import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xEEEEEE);

// Create a camera
const camera = new THREE.PerspectiveCamera(20, 4/3, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('threejs-container-hello').appendChild(renderer.domElement);

// Create a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add animation
const animate = () => {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

// Create an animation loop
const animate_wired_cube = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate_wired_cube();
