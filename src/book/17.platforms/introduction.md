---
footer: false
---
<table style="display:flex;justify-content:center">
  <tr>
    <td>Bevy版本：</td>
    <td>(any)</td>
  </tr>
</table>

# 跨平台运行 {#bevy-on-different-platforms}

这一章是关于使用Bevy在不同操作系统或环境中的平台特定信息的集合。

随意提出要添加的内容。

## 平台支持 {#platform-support}
Bevy也旨在使其易于针对不同平台，例如各种桌面操作系统、网络浏览器（通过WebAssembly）、移动设备（Android和iOS）以及游戏主机。你的Bevy代码可以在所有平台上相同，只有在构建过程和环境设置中有所不同。

然而，这一愿景尚未完全实现。目前，对于非桌面平台的支持是有限的，并且需要更复杂的配置。

### 桌面平台 {#desktop-platforms}

Bevy在三大主要桌面操作系统上开箱即用：Linux、macOS、Windows。不需要特别配置。

查看以下页面以获取在为桌面平台开发时的特定提示/建议：

-   Linux
-   macOS
-   Windows

所有Bevy特性在上述每一个平台上都得到了完全支持。

你也可以为你的Windows用户构建Windows EXE文件，如果你在Linux或macOS上工作。

### Web {#web}
Bevy在Web上运行得相当不错（使用WebAssembly），但有一些限制。  
多线程不受支持，因此你的性能将受限，并可能出现音频故障。渲染受限于WebGL2 API的特性，意味着性能更差并且限制只支持在3D场景中最多256个光源。这些限制可以通过启用新的WebGPU支持来解除，但那样你将受限于浏览器兼容性。  
为了获得灵感，请查看Bevy Game Jams的参赛作品（第三，第二，第一）。它们中的许多可以在浏览器中玩。

### 移动平台 {#mobile-platforms}
Apple iOS得到很好的支持，并且大多数功能都运行良好。有开发者在Bevy社区成功地将基于Bevy的应用发布到了App Store。  
Android支持不如iOS好，但仍然可以使用（截至Bevy 0.12）。如果你发现了bug、破损的功能或其他问题，请报告它们。  
Bevy已知在模拟器设备上存在问题。建议你在真实硬件上测试你的应用。

### 游戏主机 {#game-consoles}
不幸的是，由于NDA要求，大多数社区开发者无法接触到为游戏机开发的工作，Bevy支持仍然几乎不存在。  
曾经有人在社区中致力于PlayStation支持。我不知道他们是否还在，或者这项工作的状态如何。如果你感兴趣，加入Discord并询问。也许你可以找到彼此并一起工作。  
Rust编程语言旨在使Nintendo Switch成为一个支持的目标，但这项工作还处于初期，对于Bevy来说还不够有用。应该可以在没有NDA的情况下，在开放环境中，使用模拟器进行Nintendo Switch支持的工作。

Steam Deck以及其他此类“掌上PC”得到了很好的支持。这些设备运行特殊版本的标准桌面操作系统（Linux、Windows），并且设计用来支持PC游戏直接在盒子上运行。为了开发这些设备，只需为你的游戏制作常规的Linux/Windows版本，并最好在实际设备上尝试它们，这样你可以看到掌上体验是什么样的，并确保你的游戏在这样的设备上感觉良好。