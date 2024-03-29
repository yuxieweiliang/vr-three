/**
 * Created by K on 2019/11/4.
 */
export default function createBoxWithRoundedEdges(width, height, depth, radius0, smoothness) {
  let shape = new THREE.Shape();
  let eps = 0.00001;
  let radius = radius0 - eps;
  shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
  shape.absarc(eps, height -  radius * 2, eps, Math.PI, Math.PI / 2, true);
  shape.absarc(width - radius * 2, height -  radius * 2, eps, Math.PI / 2, 0, true);
  shape.absarc(width - radius * 2, eps, eps, 0, -Math.PI / 2, true);
  let geometry = new THREE.ExtrudeBufferGeometry(shape, {
    depth: depth - radius0 * 2,
    steps: 1,
    bevelSize: radius,
    bevelThickness: radius0
  });
  geometry.center();
  return geometry;
}