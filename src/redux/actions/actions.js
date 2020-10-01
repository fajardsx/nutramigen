//Actions
export const CURRENT_PAGE = "CURRENT_PAGE";
export const PAGE_DIRECTION = "CURRENT_DIRECTION";

export function updateCurrentPage(values) {
  return { type: CURRENT_PAGE, value: values };
}
export function updateCurrentDirection(values) {
  return { type: PAGE_DIRECTION, value: values };
}
