function set(key: string, value: string) {
  try {
    window.localStorage[`flexible-emoji-mart.${key}`] = JSON.stringify(value)
  } catch (error) {}
}

function get(key: string): any {
  try {
    const value = window.localStorage[`flexible-emoji-mart.${key}`]

    if (value) {
      return JSON.parse(value)
    }
  } catch (error) {}
}

export default { set, get }
