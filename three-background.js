// Three.js 3D background animation
let scene, camera, renderer, particles;

function init() {
  // Create scene
  scene = new THREE.Scene();

  // Set up camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 50;

  // Set up renderer
  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("bg-canvas"),
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Create particle system
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1000;

  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    // Create a field of particles in 3D space
    posArray[i] = (Math.random() - 0.5) * 100;
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  );

  // Create material
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.2,
    color: "#3b82f6",
    transparent: true,
    opacity: 0.5,
  });

  // Create particle system
  particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  // Handle window resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Start animation
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  // Rotate particles slowly
  particles.rotation.x += 0.0005;
  particles.rotation.y += 0.0005;

  // Render scene
  renderer.render(scene, camera);
}

// Initialize 3D scene when window loads
window.addEventListener("load", init);
