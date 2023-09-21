export const urlRegex = /https?:\/\/(?:www\.)?mcdiamondfire(?:\.enjin)?\.com\/forum(?:\/page\/1)?\/m\/\d+\/viewthread\/(\d+)-.*/

export function convertUrl(url: string): string | undefined {
    
    const matches = url.match(urlRegex);
    if (matches && matches.length >= 2) {
      return `#/thread/${matches[1]}`
    } else return undefined
}