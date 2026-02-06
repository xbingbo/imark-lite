import {
  BlockquoteNote,
  BlockquoteWhite,
  CodeNote,
  CodeSpanNote,
  CodeSpanWhite,
  CodeWhite,
  HrNote,
  HrWhite,
  ListItemNote,
  ListItemWhite,
  OrderedListItemNote,
  OrderedListItemWhite,
  TableBodyColumnNote,
  TableBodyColumnWhite,
  TableBodyRow,
  TableHeadColumnNote,
  TableHeadColumnWhite,
  TableNote,
  TableWhite,
} from '~/models/scheme.type'

export type ItemStyle = 'white' | 'note'

export const BlockquoteStyleMap: Record<ItemStyle, string> = {
  white: BlockquoteWhite,
  note: BlockquoteNote,
}
export const TableStyleMap: Record<ItemStyle, string> = {
  white: TableWhite,
  note: TableNote,
}
export const TableHeadColumnStyleMap: Record<ItemStyle, string> = {
  white: TableHeadColumnWhite,
  note: TableHeadColumnNote,
}
export const TableBodyRowStyleMap: Record<ItemStyle, string> = {
  white: TableBodyRow,
  note: TableBodyRow,
}
export const TableBodyColumnStyleMap: Record<ItemStyle, string> = {
  white: TableBodyColumnWhite,
  note: TableBodyColumnNote,
}
export const HrStyleMap: Record<ItemStyle, string> = {
  white: HrWhite,
  note: HrNote,
}

export const ListItemStyleMap: Record<ItemStyle, string> = {
  white: ListItemWhite,
  note: ListItemNote,
}
export const OrderedListItemStyleMap: Record<ItemStyle, string> = {
  white: OrderedListItemWhite,
  note: OrderedListItemNote,
}
export const CodeStyleMap: Record<ItemStyle, string> = {
  white: CodeWhite,
  note: CodeNote,
}
export const CodeSpanStyleMap: Record<ItemStyle, string> = {
  white: CodeSpanWhite,
  note: CodeSpanNote,
}
