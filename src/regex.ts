// /** `/^[\t ]*\//` */
// export function isComment(text: string) {
//   return /^[\t ]*\//.test(text);
// }
/** `/^[\t ]*(%|\.)/` */
export function isElement(text: string) {
  return /^[\t ]*(%|\.|#)/.test(text);
}
/** `/^[\t ]*(~|=|&=|!=)/` */
export function isEvalCode(text: string) {
  return /^[\t ]*(~|=|&=|!=)/.test(text);
}
/** `/^[\t ]*-/` */
export function isExecuteCode(text: string) {
  return /^[\t ]*-/.test(text);
}
/** `/^[\t ]*:/` */
export function isFilterOrProperty(text: string) {
  return /^[\t ]*:/.test(text);
}
/** `/^[\t ]*(~|=|&=|!=|-).*,$/` */
export function isMultiLineCodeStart(text: string) {
  return /^[\t ]*(~|=|&=|!=|-).*,$/.test(text);
}
/** `/^[\t ]*(:).*,$/` */
export function isMultiLineCodeBody(text: string) {
  return /^[\t ]*(:).*,$/.test(text);
}
/** `/^[\t ]*$/` */
export function isWhitespaceOrEmpty(text: string) {
  return /^[\t ]*$/.test(text);
}
