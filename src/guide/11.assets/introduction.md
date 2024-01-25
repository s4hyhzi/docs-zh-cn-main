---
footer: false
---
<table style="display:flex;justify-content:center">
  <tr>
    <td>Bevy版本：</td>
    <td>(0.9)</td>
    <td>(outdated!)</td>
  </tr>
</table>

# 资源管理 {#bevy-asset-management}

Assets是游戏引擎正在处理的数据：包括所有的场景、游戏特定的东西，如物品描述，以及更多！

Bevy拥有一个灵活的系统，用于异步加载和管理你的游戏资产（在后台执行，不会导致你的游戏出现卡顿）。

在你的代码中，你通过使用 `handles` 来引用单个资产。

资产数据可以从文件中加载，也可以通过代码访问。热重载得到支持，以帮助你在开发过程中，如果游戏运行时资产文件发生变化，通过重新加载资产文件。

如果你想编写一些代码，在资产加载完成、被修改或被卸载时做一些事情，你可以使用资产事件。