---
footer: false
---
<table style="display:flex;justify-content:center">
  <tr>
    <td>Bevy版本：</td>
    <td>(any)</td>
  </tr>
</table>

# 音频 {#audio}

Bevy提供了一个（有些简陋，但仍然有用的）基于ECS的音频框架。本章将教你如何使用它。

你可以在游戏中播放音效和音乐，并控制音量。它有一个基础的"空间音频"实现，可以在立体声中左右播放声音，基于实体的变换。你也可以实现你自己的音频数据源，如果你想从代码中合成声音，从某处流式传输数据，或任何其他自定义用例。

这里还有一些第三方的Bevy音频支持替代品：

-   bevy_kira_audio：使用kira；提供了一套更丰富的特性和播放控制
-   bevy_oddio：使用oddio；似乎提供了更高级的3D空间音效
-   bevy_fundsp：使用fundsp；用于高级声音合成和效果

（Bevy的官方音频是基于rodio库的。）

正如你所见，Rust音频生态系统相当分散。有很多后端库，每个都提供不同的特性组合，没有一个是特别全面的。所有的都有些不成熟。你必须试毒。

音频是一个急需改进的领域。如果你是一个热情的音频开发者，考虑加入Discord并帮助开发！