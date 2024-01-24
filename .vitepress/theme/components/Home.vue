<script setup lang="ts">
import { onMounted } from 'vue'
import { load } from './sponsors'
// NOTE: hide the home video
// https://github.com/vuejs-translations/docs-zh-cn/issues/177

onMounted(async () => {
  await load()
})
</script>

<template>
  <section id="hero">
    <h1 class="tagline">
      <img src="https://bevyengine.org/assets/bevy_logo_dark.svg" alt="" srcset="">
    </h1>
    <p class="description">
      一个令人耳目一新的简单数据驱动游戏引擎，内置于 Rust
      Free 和 Forever 开源中！
    </p>
    <p class="actions">
      <!-- NOTE: hide the home video -->
      <a class="get-started" href="/guide/introduction.html">
        快速上手
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
        </svg>
      </a>
      <!-- <a class="setup" href="/guide/quick-start.html">安装</a> -->
    </p>
  </section>

  <section id="highlights" class="vt-box-container">
    <div class="vt-box">
      <h2><strong>数据驱动</strong></h2>
      <p>
        所有游戏逻辑使用ECS，一个自定义实体组件系统
      <ul>
        <li><strong>快速</strong>：大规模并行且缓存友好。这是最快的ECS</li>
        <li><strong>简单</strong>：组件是Rust结构体，系统是Rust函数</li>
        <li><strong>能力</strong>：查询，全局资源，本地资源，变更检测，无锁并行调度器</li>
      </ul>
      </p>
    </div>
    <div class="vt-box">
      <h2><strong>2D 渲染器</strong></h2>
      <p>
      <ul>
        <li>为游戏和应用程序渲染实时2D图形
          <ul>
            <li><strong>特点</strong>：精灵表，动态纹理图集，相机，纹理和材料</li>
            <li><strong>可扩展性</strong>：自定义着色器，材料和渲染管线</li>
            <li><strong>通用核心</strong>：构建在Bevy的渲染图之上</li>
          </ul>
        </li>
      </ul>
      </p>
    </div>
    <div class="vt-box">
      <h2><strong>3D 渲染器</strong></h2>
      <p>
      <ul>
        <li>
          <ul>
            <li>一个现代化且灵活的3D渲染器
              <ul>
                <li><strong>功能</strong>：灯光、阴影、相机、网格、纹理、材质、gltf加载</li>
                <li><strong>可扩展性</strong>：自定义着色器、材质和渲染管线</li>
                <li><strong>通用核心</strong>：建立在Bevy的Render Graph之上</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      </p>
    </div>
    <div class="vt-box">
      <h2><strong>渲染图</strong></h2>
      <p>
        使用图结构组合自定义渲染管线 <br>
      <ul>
        <li><strong>并行</strong>：渲染图自动并行渲染</li>
        <li><strong>模块化</strong>：使用渲染节点构建可组合和可重用的渲染逻辑</li>
        <li><strong>后端无关</strong>：不依赖于特定的图形API</li>
      </ul>
      </p>
    </div>
    <div class="vt-box">
      <h2><strong>动画</strong></h2>
      <p>
      <ul>
        <li>一个强大的动画系统
          <ul>
            <li>
              骨架绑定动画由基于ECS的关节API驱动
            </li>
            <li>
              通过平滑过渡在它们之间同时播放多个动画
            </li>
            <li>
              使用混合形状/形态目标直接对顶点进行动画处理
            </li>
            <li>
              从GLTF文件导入动画
            </li>
          </ul>
        </li>
      </ul>
      </p>
    </div>
    <div class="vt-box">
      <h2><strong>Bevy UI</strong></h2>
      <p>
      <ul>
        <li>一个定制的ECS驱动的UI框架，专门为Bevy构建
          <ul>
            <li>直接构建在Bevy的ECS、渲染器和场景插件之上</li>
            <li>以代码动态组合UIs或使用Bevy场景格式声明式组合</li>
            <li>使用熟悉的"flex box"模型来布局你的UIs</li>
          </ul>
        </li>
      </ul>
      </p>
    </div>

    <div class="vt-box">
      <h2><strong>场景</strong></h2>
      <p>
        使用Bevy的场景系统创建、保存和加载ECS世界 <br>
      <ul>
        <li>加载：加载场景会保留实体ID（对保存游戏有用）</li>
        <li>实例化：实例化会创建带有新实体ID的场景的链接副本</li>
        <li>热重载：场景文件的更改会自动应用到正在运行的应用程序上</li>
      </ul>
      </p>
    </div>

    <div class="vt-box">
      <h2><strong>生产编译时间</strong></h2>
      <p>
      <ul>
        <li>游戏开发是一个迭代过程。你不能等待编译
          <ul>
            <li>使用Bevy，你可以期待在"快速编译"配置下有0.8-3.0秒的时间</li>
            <li>与其他流行的Rust游戏引擎相比，它们可能需要超过30秒来编译一个新行插入！</li>
          </ul>
        </li>
      </ul>
      </p>
    </div>

    <div class="vt-box">
      <h2><strong>热重载</strong></h2>
      <ul>
        <li>不重新编译的情况下立即获得更改的反馈
          <ul>
            <li><strong>资产更改</strong>立即反映在运行中的Bevy应用程序中</li>
            <li>您目前可以热重载场景、纹理和网格</li>
            <li>任何资产类型都可以集成</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="vt-box">
      <h2><strong>自由和开源</strong></h2>
      <p>
      <ul>
        <li>一个由开发者社区创建和使用的引擎
          <ul>
            <li>将音频文件作为资产加载</li>
            <li>使用音频实体播放音频资产</li>
          </ul>
        </li>
      </ul>
      </p>
    </div>

    <div class="vt-box">
      <h2><strong>声音</strong></h2>
      <p>
      <ul>
        <li>按需加载音频文件并播放
          <ul>
            <li>将音频文件作为资产加载</li>
            <li>使用音频实体播放音频资产</li>
          </ul>
        </li>
      </ul>
      </p>
    </div>

    <div class="vt-box">
      <h2><strong>跨平台</strong></h2>
      <p>
      <ul>
        <li>支持所有主要平台：
          <ul>
            <li>Windows, MacOS, Linux, Web, iOS, Android</li>
          </ul>
        </li>
      </ul>
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 42px 32px;
}

#hero {
  /* padding: 96px 32px; */
  text-align: center;
}

.tagline {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}

.tagline img {
  text-align: center;
  margin: auto;
}

html:not(.dark) .accent,
.dark .tagline {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  margin-right: 18px;
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}

.actions .get-started:hover {
  transition-duration: 0.2s;
}

.actions .get-started:hover .icon {
  transform: translateX(2px);
}

.actions .get-started,
.actions .setup {
  color: var(--vt-c-text-code);
}

.actions .get-started:hover,
.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.dark .actions .get-started:hover,
.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}

/* NOTE: via #vuemastery-action in VueMasteryModal.vue */

.actions .get-started {
  font-size: 16px;
  display: inline-block;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
  position: relative;
  font-weight: 600;
  background-color: var(--vt-c-green);
  color: #fff;
  margin-right: 18px;
  padding: 8px 1em;
}

.dark .actions .get-started {
  color: var(--vt-c-indigo);
}

.actions .get-started:hover {
  background-color: var(--vt-c-green-dark);
  transition-duration: 0.2s;
}

.dark .actions .get-started:hover {
  background-color: var(--vt-c-green-light);
}

/* end NOTE */

#special-sponsor {
  border-top: 1px solid var(--vt-c-divider-light);
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 12px 24px;
}

#special-sponsor h3 {
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  padding-bottom: 10px;
}

#special-sponsor-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#special-sponsor .logo {
  display: flex;
  justify-content: center;
  padding: 0 20px;
}

.dark #special-sponsor img {
  filter: grayscale(1) invert(1);
}

#highlights {
  max-width: 1370px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}

#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

#highlights p {
  font-weight: 400;
  font-size: 15px;
}

#highlights .vt-box {
  background-color: transparent;
}

#sponsors {
  max-width: 900px;
  margin: 0px auto;
}

#sponsors h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1em;
}

#sponsors .sponsor-container {
  margin-bottom: 3em;
}

@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }

  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}

@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 56px 32px;
  }

  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }

  #special-sponsor {
    flex-direction: column;
    height: auto;
  }

  #special-sponsor img {
    height: 36px;
    margin: 8px 0;
  }

  #special-sponsor span {
    text-align: center !important;
  }

  #highlights h3 {
    margin-bottom: 0.6em;
  }

  #highlights .vt-box {
    padding: 20px 36px;
  }

  .actions a {
    margin: 18px 0;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}
</style>
