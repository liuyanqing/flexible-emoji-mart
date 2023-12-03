# flexible-emoji-mart

由于 missive/emoji-mart 的定制化能力不够满足我们的项目需求，于是 fork 了该项目，进行了一些修改，开发更多定制化能力

## 更新点

### Picker 组件增加了以下属性，增强其定制化能力

- pickerStyles(Default: '')
  该属性值会添加到组件的样式表中，这样组件样式可随意修改

- onClickCategory(Default: null)

- onEmojiScrollTo(Default: null)
  表情列表滚动到达了一个新的 category 类别时通知，这样 Navigation 使用自定义组件时可以使用
