/**
 * Created by K on 2019/11/4.
 */

export default class Spectacle {
  constructor(option) {
    this.screen = {
      width: option.width,
      height: option.height
    }
    this.renderer = option.renderer || new THREE.WebGLRenderer()
    this.scene = null
    this.cameras = {}
    this.lights = {}
    this.mouse = {}
    this.initRender()
    this.initScene()
  }

  /**
   * 初始化渲染器
   */
  initRender() {
    const { width, height } = this
    this.renderer.setSize(width, height)
  }

  /**
   * 初始化场景
   */
  initScene() {
    const { width, height } = this
    this.scene = new THREE.Scene()
    this.renderer.setSize(width, height)
  }

  create(cb) {
    cb.call(this, this.scene)
  }

  load(cb) {
    cb.call(this, this.scene)
  }

  light(cb) {
    cb.call(this, this.scene, this.lights)
  }

  start(scene, camera) {

  }

  render() {

  }
}