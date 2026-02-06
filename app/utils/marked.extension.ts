import type { RendererExtension, Token, Tokens, } from 'marked'
import { useContextStore, } from '~/stores/context'
import TokenRender from '~/utils/token.render'

export const iCodeExtension: RendererExtension = {
  name: 'code',
  renderer(token: any,): string {
    return TokenRender.renderCode(token as Tokens.Code,)
  },
}

export const iHeadingExtension: RendererExtension = {
  name: 'heading',
  renderer(token: Token,): string {
    return TokenRender.renderHeading(token as Tokens.Heading,)
  },
}

export const iBlockquoteExtension: RendererExtension = {
  name: 'blockquote',
  renderer(token: Token,): string {
    return TokenRender.renderBlockquote(token as Tokens.Blockquote,)
  },
}

export const iImageExtension: RendererExtension = {
  name: 'image',
  renderer(token: any,): string {
    console.log(token,)
    console.log(TokenRender.renderImage(token as Tokens.Image,),)
    return TokenRender.renderImage(token as Tokens.Image,)
  },
}

export const iParagraphExtension: RendererExtension = {
  name: 'paragraph',
  renderer(token: Token,): string {
    return TokenRender.renderParagraph(token as Tokens.Paragraph,)
  },
}

export const iHrExtension: RendererExtension = {
  name: 'hr',
  renderer(token: Token,): string {
    return TokenRender.renderHr(token as Tokens.Hr,)
  },
}

export const listExtension: RendererExtension = {
  name: 'list',
  renderer(token: Token,): string {
    const context = useContextStore()
    return TokenRender.renderList(token as Tokens.List, context.style,)
  },
}

export const iTableExtension: RendererExtension = {
  name: 'table',
  renderer(token: Token,): string {
    return TokenRender.renderTable(token as Tokens.Table,)
  },
}

export const iCodeSpanExtension: RendererExtension = {
  name: 'codespan',
  renderer(token: any,): string {
    return TokenRender.renderCodeSpan(token as Tokens.Codespan,)
  },
}

export const iStrongExtension: RendererExtension = {
  name: 'strong',
  renderer(token: Token,): string {
    return TokenRender.renderStrong(token as Tokens.Strong,)
  },
}
