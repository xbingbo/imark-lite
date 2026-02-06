import { Marked, } from 'marked'
import {
  iBlockquoteExtension,
  iCodeExtension,
  iCodeSpanExtension,
  iHeadingExtension,
  iHrExtension,
  iImageExtension,
  iParagraphExtension,
  iStrongExtension,
  iTableExtension,
  listExtension,
} from '~/utils/marked.extension'

class IMark {
  private static marked = new Marked().use({
    extensions: [
      iCodeExtension,
      iHeadingExtension,
      iBlockquoteExtension,
      iParagraphExtension,
      iImageExtension,
      iHrExtension,
      listExtension,
      iTableExtension,
      iCodeSpanExtension,
      iStrongExtension,
    ],
  },)

  public static parse(value: string,): string {
    try {
      const result = this.marked.parse(value,)
      return result as string || ''
    } catch (e) {
      console.error('use marked to parse markdown error: ', e,)
      return ''
    }
  }
}

export default IMark
