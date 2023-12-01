# `@flexible-emoji-mart/react`

A React wrapper for [EmojiMart](https://missiveapp.com/open/flexible-emoji-mart).

## 🧑‍💻 Usage
```sh
npm install --save flexible-emoji-mart @flexible-emoji-mart/data @flexible-emoji-mart/react
```

```js
import data from '@flexible-emoji-mart/data'
import Picker from '@flexible-emoji-mart/react'

function App() {
  return (
    <Picker data={data} onEmojiSelect={console.log} />
  )
}
```

## 📚 Documentation
See https://github.com/missive/flexible-emoji-mart#react
