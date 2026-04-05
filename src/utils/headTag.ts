export function ensureHeadTag<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  selector: string,
  attributes: Record<string, string>,
) {
  let element = document.head.querySelector<HTMLElementTagNameMap[K]>(selector)

  if (!element) {
    element = document.createElement(tagName)
    document.head.append(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value)
  })

  return element
}

export function removeHeadTag(selector: string) {
  document.head.querySelector(selector)?.remove()
}
