export interface Palette {
  primary?: Shade,
  secondary?: Shade,
  highlight?: Shade,
  error?: Shade,
  warning?: Shade,
  info?: Shade,
  success?: Shade,
}

export interface Shade {
  main?: string,
  light?: string,
  dark?: string,
  contrastText?: string,
}