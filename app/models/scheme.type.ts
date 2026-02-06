// 标题样式
export const Heading: Record<number, string> = {
  1: `<h1
            style="
                font-size: 1.875rem;
                line-height: 2.25rem;
                font-weight: 800;
                margin-bottom: 1rem;
                margin-top: 1rem;
            "
        >{value}</h1>`,
  2: `<h2
            style="
                font-size: 1.5rem;
                line-height: 2rem;
                font-weight: 700;
                margin-bottom: 1rem;
                margin-top: 1rem;
            "
        >{value}</h2>`,
  3: `<h3
            style="
                font-size: 1.25rem;
                line-height: 1.75rem;
                font-weight: 700;
                margin-bottom: 1rem;
                margin-top: 1rem;
            "
        >{value}</h3>`,
  4: `<h4 class="text-lg font-bold dark:text-white mb-4"
            style="
                font-size: 1.125rem;
                line-height: 1.75rem;
                font-weight: 700;
                margin-bottom: 1rem;
                margin-top: 1rem;
            "
        >{value}</h4>`,
  5: `<h5
            style="
                font-size: 1rem;
                line-height: 1.5rem;
                font-weight: 700;
                margin-bottom: 1rem;
                margin-top: 1rem;
            "
        >{value}</h5>`,
  6: `<h6
         style="
                font-size: 0.875rem;
                line-height: 1.25rem;
                font-weight: 700;
                margin-bottom: 1rem;
                margin-top: 1rem;
            "
        >{value}</h6>`,
}
export const List: string = `
    <ul
        style="
            color: #1f2937;
            font-size: 16px;
            text-align: left;
            margin-block: 16px;
            padding-inline: 0px;
            width: 100%;
            display: block;
        "
    >{value}</ul>
    `
export const ListItemWhite: string = `
            <li
                style="
                    display: flex;
                    align-items: center;
                    margin-block: 6px;
                "
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="margin-inline: 6px; flex-shrink: 0;">
                    <g fill="none" stroke="#cad5e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="m9 12l2 2l4-4"/>
                    </g>
                </svg>
                <span>{value}</span>
            </li>
        `
export const ListItemNote: string = `
            <li
                style="
                    display: flex;
                    align-items: center;
                    margin-block: 6px;
                "
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="margin-inline: 6px; flex-shrink: 0;">
                    <g fill="none" stroke="#0f172b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="m9 12l2 2l4-4"/>
                    </g>
                </svg>
                <span>{value}</span>
            </li>
        `

export const OrderedList: string = `
    <ol
        style="
            color: #1f2937;
            font-size: 16px;
            text-align: left;
            margin-block: 16px;
            padding-inline: 0px;
            width: 100%;
            display: block;
        "
    >{value}</ol>
    `
export const OrderedListItemWhite: string = `
            <li
                style="
                    display: flex;
                    align-items: center;
                    margin-block: 6px;
                "
            >
                <section style="
                    color: #cad5e2;
                    font-size: 8px;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-inline: 6px;
                    unicode-bidi: isolate;
                    font-variant-numeric: tabular-nums;
                    opacity: 0.9;
                    flex-shrink: 0;
                    border-style: solid;
                    border-radius: 9999px;
                    border-color: #cad5e2;
                    border-width: 1.5px;
                    width: 14.5px;
                    height: 14.5px;
                ">{order}</section>
                <span>{value}</span>
            </li>
    `
export const OrderedListItemNote: string = `
            <li
                style="
                    display: flex;
                    align-items: center;
                    margin-block: 6px;
                "
            >
                <section style="
                    color: #0f172b;
                    font-size: 8px;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-inline: 6px;
                    unicode-bidi: isolate;
                    font-variant-numeric: tabular-nums;
                    opacity: 0.9;
                    flex-shrink: 0;
                    border-style: solid;
                    border-radius: 9999px;
                    background-color: color-mix(in oklab, #f9f3f4 10%, transparent);
                    border-color: #0f172b;
                    border-width: 1.5px;
                    width: 14.5px;
                    height: 14.5px;
                ">{order}</section>
                <span>{value}</span>
            </li>
    `

export const BlockquoteWhite = `
    <blockquote
        style="
            width: 100%;
            padding: 1rem;
            border-inline-end-width: 4px;
            margin-block: 16px;
            background-color: #ffffff;
            border-color: #e2e8f0;
            border-radius: 6px;
        "
    ><div
        style="
            line-height: 28px;
            font-style: italic;
            font-weight: 400;
            text-wrap: pretty;
            font-size: 16px;
        "
        >{value}</div>
    </blockquote>`
export const BlockquoteNote = `
    <blockquote
        style="
            width: 100%;
            padding: 1rem;
            border-inline-end-width: 4px;
            margin-block: 16px;
            background-color: color-mix(in oklab, #0f172b 5%, transparent);
            border-color: #0f172b;
            border-radius: 6px;
        "
    ><div
        style="
            line-height: 28px;
            font-style: italic;
            font-weight: 400;
            text-wrap: pretty;
            font-size: 16px;
        "
        >{value}</div>
    </blockquote>`

export const Image: string = `
        <img src="{value}" alt="image description"
            style="
                transition-property: all;
                transition-timing-function: cubic-bezier(0.4,0,0.2,1);
                transition-duration: 300ms;
                border-radius: 6px;
                height: auto;
                width: 100%;
                filter: grayscale(100%);
            "
        >
    `

export const Paragraph: string = `
    <p
        style="
            color: #1f2937;
            font-size: 16px;
            text-wrap: pretty;
            line-height: 28px;
        "
    >{value}</p>
    `
export const HrWhite: string = `
    <hr style="
        height: 1px;
        border-width: 0px;
        background-color: #e2e8f0;
        margin-bottom: 1rem;
        margin-top: 1rem;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        "></hr>
    `
export const HrNote: string = `
    <hr style="
        height: 1px;
        border-width: 0px;
        background-color: #0f172b;
        margin-bottom: 1rem;
        margin-top: 1rem;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        "></hr>
    `

export const CodeWhite: string = `
    <section
        style="
            font-size: 14px;
            line-height: 24px;
            margin-block: 16px;
            position: relative;
            min-width: 18rem;
            padding-block: 12px;
            padding-inline: 16px;
            direction: ltr;
            border-radius: 6px;
            background-color: #f8fafc;
            border-color: #e2e8f0;
            border-width: 1px;
            border-style: solid;
            opacity: 0.7;
            width: 100%;
            overflow-x: auto;
        "
    >{value}</section>
    `
export const CodeNote: string = `
    <section
        style="
            font-size: 14px;
            line-height: 24px;
            margin-block: 16px;
            position: relative;
            min-width: 18rem;
            padding-block: 12px;
            padding-inline: 16px;
            direction: ltr;
            border-radius: 6px;
            background-color: color-mix(in oklab, #0f172b 5%, transparent);
            border-color: color-mix(in oklab, #0f172b 25%, transparent);
            border-width: 1px;
            border-style: solid;
            opacity: 0.7;
            width: 100%;
            overflow-x: auto;
        "
    >{value}</section>
    `

export const CodeLine: string = `
    <pre><code>{value}</code></pre>
    `
export const CodeSpanWhite: string = `
    <span
        style="
          font-family: Menlo, Monaco, Consolas, Courier New, monospace;
          color: #0f172b;
          border-color: color-mix(in oklab, #cad5e2 25%, transparent);
          border-style: solid;
          border-width: 1px;
          background-color: #fcf9fa;
          padding-block: 2px;
          padding-inline: 6px;;
          border-radius: 6px;
          font-weight:500;
          font-size: 14px;
          opacity: 0.9;
        "
    >{value}</span>
    `
export const CodeSpanNote: string = `
    <span
        style="
          font-family: Menlo, Monaco, Consolas, Courier New, monospace;
          color: #0f172b;
          background-color: color-mix(in oklab, #94a3b8 10%, transparent);
          border-color: color-mix(in oklab, #0f172b 25%, transparent);
          border-style: solid;
          border-width: 1px;
          padding-block: 2px;
          padding-inline: 6px;;
          border-radius: 6px;
          font-weight:500;
          font-size: 14px;
          opacity: 0.9;
        "
    >{value}</span>
    `
export const CodeSpanInfo: string = `
    <span
        style="
          font-family: Menlo, Monaco, Consolas, Courier New, monospace;
          color: #155dfc;
          background-color: color-mix(in oklab, #2b7fff 10%, transparent);
          border-color: color-mix(in oklab, #2b7fff 25%, transparent);
          border-style: solid;
          border-width: 1px;
          padding-block: 2px;
          padding-inline: 6px;;
          border-radius: 6px;
          font-weight:500;
          font-size: 14px;
          opacity: 0.9;
        "
    >{value}</span>
    `

export const TableHeadColumnWhite: string = `
        <th
            style="
                font-weight: 600;
                font-size: 14px;
                line-height: 1.42857;
                text-align: left;
                padding-block: 12px;
                padding-inline: 16px;
                text-transform: uppercase;
                background-color: #ffffff;
                border-color: #e2e8f0;
                border-inline: none;
                border-top-style: solid;
                border-top-width: 1px;
            "
        >{value}</th>
    `
export const TableHeadColumnNote: string = `
        <th
            style="
                font-weight: 600;
                font-size: 14px;
                line-height: 1.42857;
                text-align: left;
                padding-block: 12px;
                padding-inline: 16px;
                text-transform: uppercase;
                background-color: color-mix(in oklab, #0f172b 5%, transparent);
                border-color: #0f172b;
                border-inline: none;
                border-top-style: solid;
                border-top-width: 1px;
            "
        >{value}</th>
    `

export const TableBodyRow: string = `
        <tr>{value}</tr>
    `
export const TableBodyColumnWhite: string = `
        <td
            style="
                font-size: 14px;
                line-height: 1.42857;
                vertical-align: top;
                text-align: left;
                padding-block: 12px;
                padding-inline: 16px;
                border-color: #e2e8f0;
                border-block-style: solid;
                border-block-width: 1px;
                border-inline: none;
            "
        >{value}</td>
    `
export const TableBodyColumnNote: string = `
        <td
            style="
                font-size: 14px;
                line-height: 1.42857;
                vertical-align: top;
                text-align: left;
                padding-block: 12px;
                padding-inline: 16px;
                border-color: #0f172b;
                border-block-style: solid;
                border-block-width: 1px;
                border-inline: none;
            "
        >{value}</td>
    `

export const TableWhite: string = `
    <div
        style="
            width: 100%;
            position: relative;
            overflow-x: auto;
            margin-block: 16px;
        "
    >
        <table
            style="
                width: 100%;
                border-collapse: collapse;
                table-layout: auto;
            "
        >
            <thead>
                {headValue}
            </thead>
            <tbody>
                {bodyValue}
            </tbody>
        </table>
    </div>
    `
export const TableNote: string = `
    <div
        style="
            width: 100%;
            position: relative;
            overflow-x: auto;
            margin-block: 16px;
        "
    >
        <table
            style="
                width: 100%;
                border-collapse: collapse;
                table-layout: auto;
            "
        >
            <thead>
                {headValue}
            </thead>
            <tbody>
                {bodyValue}
            </tbody>
        </table>
    </div>
    `
export const Strong: string = `
    <span
        style="
          font-weight:600;
        "
    >{value}</span>
    `
export const Em: string = `
    <span
        style="
          font-style: italic;
        "
    >{value}</span>
    `
export const Del: string = `
    <span
        style="
          text-decoration: line-through;
        "
    >{value}</span>
    `
