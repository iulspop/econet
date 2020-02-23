// MEDIA QUERY MANAGER (only used in _typography.scss)
// 0 - 500px;      Phone
// 500 - 900px;    Tablet portrait
// 900 - 1200px;   Tablet landscape
// 1200 - 1800;    Normal styles only (desktop first)
// 1800px + ;      Big desktop

// breakpoint argument choices:
// phone
// tab-port
// tab-land
// big-desktop

export const respond = (breakpoint, css) => {
  switch (breakpoint) {
    case "phone":
      return `media only screen and (max-width: 500px) {
        ${css}
      }`
    case "tabPort":
      return `media only screen and (max-width: 900px) {
        ${css}
      }`
    case "tabLand":
      return `media only screen and (max-width: 1200px) {
        ${css}
      }`
    case "bigDesktop":
      return `media only screen and (min-width: 1800px) {
        ${css}
      }`
    default:
      throw new Error("invalid breakpoint argument")
  }
}
