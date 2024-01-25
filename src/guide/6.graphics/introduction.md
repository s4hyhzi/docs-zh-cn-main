---
footer: false
---
<table style="display:flex;justify-content:center">
  <tr>
    <td>Bevy版本：</td>
    <td>(0.12)</td>
    <td>(current)</td>
  </tr>
</table>

# 通用图形特性 {#general-graphics-features}

这一章涵盖了Bevy中与图形相关的通用特性，这些特性对于2D和3D游戏都是相关的。

Bevy的渲染是由/通过配置的摄像机驱动的。每个摄像机实体都会导致Bevy渲染你的游戏世界，如通过摄像机上的各种组件所配置的。你可以通过向你的摄像机添加相关组件并配置它们，启用所有不同的工作流程，以及可选的效果。