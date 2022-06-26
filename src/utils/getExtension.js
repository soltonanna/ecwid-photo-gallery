const getExtension = (filename) => {
   var parts = filename.split('.');
   return parts[parts.length - 1];
}

export function isImageUrl(url) {
   return ['jpg', 'png', 'svg'].includes(getExtension(url))
}

export function isJsonUrl(url) {
   return 'json' === getExtension(url)
}

export function isAllowedUrl(url) {
   return ['jpg', 'png', 'svg', 'json'].includes(getExtension(url))
}