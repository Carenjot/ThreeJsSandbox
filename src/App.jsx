import { useEffect } from "react";

import * as THREE from "three";

import SceneInit from "./lib/SceneInit";

function App() {
  useEffect(() => {
    const test = new SceneInit("myThreeJsCanvas");
    test.initialize();
    test.animate();

    const geometry = new THREE.SphereGeometry(15, 32, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sphere = new THREE.Mesh(geometry, material);
    // sphere.position.set(1, 10, 10);

    const eye = new THREE.SphereGeometry(5, 10, 5);
    const materialEye = new THREE.MeshBasicMaterial({ color: "white" });
    const leftEye = new THREE.Mesh(eye, materialEye);
    const rightEye = new THREE.Mesh(eye, materialEye);

    leftEye.position.set(10, 7, 5);
    rightEye.position.set(10, 7, -5);

    const pupil = new THREE.SphereGeometry(1, 2, 1);
    const materialPupil = new THREE.MeshBasicMaterial({ color: "black" });
    const leftPupil = new THREE.Mesh(pupil, materialPupil);
    const rightPupil = new THREE.Mesh(pupil, materialPupil);

    leftPupil.position.set(15, 8, 5);
    rightPupil.position.set(15, 8, -5);

    const geometryNose = new THREE.ConeGeometry(5, 20, 32);
    const materialNose = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const nose = new THREE.Mesh(geometryNose, materialNose);

    const nose2 = new THREE.Mesh(geometryNose, materialNose);

    nose.position.set(18, 0, 0);
    nose.rotation.set(0, 0, -Math.PI / 2);

    nose2.position.set(18, 0, 0);
    nose2.rotation.set(0, 0, -Math.PI / 2 - 0.05);

    test.scene.add(
      sphere,
      leftEye,
      rightEye,
      leftPupil,
      rightPupil,
      nose,
      nose2
    );
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
