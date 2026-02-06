import type { Token, Tokens, } from 'marked'
import type { ItemStyle, } from '~/models/style.type'
import {
  BlockquoteStyleMap,
  CodeSpanStyleMap,
  CodeStyleMap,
  HrStyleMap,
  ListItemStyleMap,
  OrderedListItemStyleMap,
  TableBodyColumnStyleMap,
  TableBodyRowStyleMap,
  TableHeadColumnStyleMap,
  TableStyleMap,
} from '~/models/style.type'
import { useContextStore, } from '~/stores/context'
import { Image, CodeLine, Del, Em, Heading, List, OrderedList, Paragraph, Strong, } from '~/models/scheme.type'

class TokenRender {
  public static renderBlock(tokens: Token[], style: string = 'dark',): string {
    return tokens.map((token,) => {
      console.log(token,)
      switch (token.type) {
        case 'paragraph':
          return this.renderParagraph(token as Tokens.Paragraph,)
        case 'list':
          return this.renderList(token as Tokens.List, style,)
        case 'code':
          return this.renderCode(token as Tokens.Code,)
        case 'blockquote':
          return this.renderBlockquote(token as Tokens.Blockquote,)
        default:
          return token.raw || ''
      }
    },).join('\n',)
  }

  public static renderInline(tokens: Token[],): string {
    const context = useContextStore()
    const values: string[] = []
    tokens.forEach((tk: Token,) => {
      console.log(tk,)
      switch (tk.type) {
        case 'text':
          values.push('<span>' + tk.text + '</span>',)
          break
        case 'codespan':
          values.push(CodeSpanStyleMap[context.style].replace('{value}', tk.text,),)
          break
        case 'image':
          values.push(Image.replace('{value}', tk.href,),)
          break
        case 'strong':
          values.push(Strong.replace('{value}', tk.text,),)
          break
        case 'em':
          values.push(Em.replace('{value}', tk.text,),)
          break
        case 'del':
          values.push(Del.replace('{value}', tk.text,),)
          break
        case 'hr':
          values.push(HrStyleMap[context.style as ItemStyle],)
          break
        default:
          values.push(tk.raw || '',)
      }
    },)
    return values.join('',)
  }

  public static renderBlockquote(token: Tokens.Blockquote,): string {
    if (token.tokens) {
      const value: string = this.renderBlock(token.tokens,)
      const context = useContextStore()
      return BlockquoteStyleMap[context.style as ItemStyle].replace('{value}', value,)
    }
    return token.raw || token.text
  }

  public static renderParagraph(token: Tokens.Paragraph,): string {
    if (token.tokens) {
      const value = TokenRender.renderInline(token.tokens,)
      return Paragraph.replace('{value}', value,)
    }
    return token.raw || token.text
  }

  public static renderTable(token: Tokens.Table,): string {
    const context = useContextStore()
    const headValue: string = token.header.map((item: Tokens.TableCell,): string => {
      const cellValue: string = TokenRender.renderInline(item.tokens,)
      return TableHeadColumnStyleMap[context.style as ItemStyle].replace('{value}', cellValue,)
    },).join('\n',)
    const bodyValue: string = token.rows.map((row: Tokens.TableCell[],): string => {
      const rowValue: string = row.map((value: Tokens.TableCell,): string => {
        const cellValue: string = TokenRender.renderInline(value.tokens,)
        return TableBodyColumnStyleMap[context.style as ItemStyle].replace('{value}', cellValue,)
      },).join('\n',)
      return TableBodyRowStyleMap[context.style as ItemStyle].replace('{value}', rowValue,)
    },).join('\n',)
    return TableStyleMap[context.style as ItemStyle].replace('{headValue}', headValue,).replace('{bodyValue}', bodyValue,)
  }

  public static renderCodeSpan(token: Tokens.Codespan,): string {
    return this.renderInline([token,],)
  }

  public static renderStrong(token: Tokens.Strong,): string {
    if (token.tokens) {
      return this.renderInline(token.tokens,)
    }
    return token.raw || token.text
  }

  public static renderHr(token: Tokens.Hr,): string {
    return this.renderInline([token,],)
  }

  public static renderImage(token: Tokens.Image,): string {
    return Image.replace('{value}', token.href,)
  }

  public static renderHeading(token: Tokens.Heading,): string {
    if (token.tokens) {
      const value: string = TokenRender.renderInline(token.tokens,)
      return Heading[token.depth]?.replace('{value}', value,) || ''
    } else {
      return Heading[token.depth]?.replace('{value}', token.text,) || ''
    }
  }

  public static renderCode(token: Tokens.Code,): string {
    const context = useContextStore()
    const lines = token.text.split('\n',).filter((line: string,) => line.trim() !== '',)
    const lineHtml = lines.map((line: string, index: number,) => {
      return CodeLine.replace('{index}', (index + 1).toString(),).replace('{value}', line,)
    },).join('\n',)
    return CodeStyleMap[context.style].replace('{value}', lineHtml,)
  }

  public static renderList(token: Tokens.List, style: string = 'dark',): string {
    if (token.ordered) {
      return this.renderOrderedList(token, style,)
    }
    const itemsHtml = token.items.map((item: any,) => {
      let content = ''
      if (item.tokens) {
        content = item.tokens.map((itemToken: any,) => {
          if (itemToken.type === 'list') {
            return this.renderList(itemToken, style,)
          } else if (itemToken.tokens) {
            return this.renderInline(itemToken.tokens,)
          } else {
            return itemToken.text
          }
        },).join('',)
      } else {
        content = item.text
      }
      return ListItemStyleMap[style as ItemStyle].replace('{value}', content,)
    },).join('\n',)
    return List.replace('{value}', itemsHtml,)
  }

  public static renderOrderedList(token: Tokens.List, style: string = 'dark',): string {
    const itemsHtml = token.items.map((item: any, index: number,) => {
      if (item.tokens) {
        const subItemsHtml = item.tokens.map((itemToken: any,) => {
          if (itemToken.type === 'list') {
            return this.renderList(itemToken, style,)
          }
          if (itemToken.tokens) {
            return this.renderInline(itemToken.tokens,)
          } else {
            return itemToken.text
          }
        },).join('',)
        return OrderedListItemStyleMap[style as ItemStyle].replace('{order}', `${index + 1}`,).replace('{value}', subItemsHtml,)
      } else {
        return OrderedListItemStyleMap[style as ItemStyle].replace('{order}', `${index + 1}`,).replace('{value}', item.text,)
      }
    },).join('\n',)
    return OrderedList.replace('{value}', itemsHtml,)
  }
}

export default TokenRender
