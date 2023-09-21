export function convertUrl(url: string): string | undefined {
    const urlRegex = /https?:\/\/(?:www\.)?mcdiamondfire(?:\.enjin)?\.com\/forum\/m\/\d+\/viewthread\/(\d+)-.*/
    const matches = url.match(urlRegex);
    if (matches && matches.length >= 2) {
      return `#/thread/${matches[1]}`
    } else return undefined
}