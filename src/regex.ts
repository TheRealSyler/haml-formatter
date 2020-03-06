// /** `/^[\t ]*(%|\.)/` */
// export function isElement(text: string) {
//   return /^[\t ]*(%|\.|#)/.test(text);
// }
// /** `/^[\t ]*(~|=|&=|!=)/` */
// export function isEvalCode(text: string) {
//   return /^[\t ]*(~|=|&=|!=)/.test(text);
// }
// /** `/^[\t ]*-/` */
// export function isExecuteCode(text: string) {
//   return /^[\t ]*-/.test(text);
// }
// /** `/^[\t ]*:/` */
// export function isFilter(text: string) {
//   return /^[\t ]*:/.test(text);
// }
/** `/^[\t ]*$/` */
export function isWhitespaceOrEmpty(text: string) {
  return /^[\t ]*$/.test(text);
}
