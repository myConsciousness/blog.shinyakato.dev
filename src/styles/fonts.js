import { css } from "styled-components"

import InterRegularWoff from "../fonts/Inter/Inter-Regular.woff"
import InterRegularWoff2 from "../fonts/Inter/Inter-Regular.woff2"
import InterMediumWoff from "../fonts/Inter/Inter-Medium.woff"
import InterMediumWoff2 from "../fonts/Inter/Inter-Medium.woff2"
import InterSemiboldWoff from "../fonts/Inter/Inter-Semibold.woff"
import InterSemiboldWoff2 from "../fonts/Inter/Inter-Semibold.woff2"

import InterRegularItalicWoff from "../fonts/Inter/Inter-RegularItalic.woff"
import InterRegularItalicWoff2 from "../fonts/Inter/Inter-RegularItalic.woff2"
import InterMediumItalicWoff from "../fonts/Inter/Inter-MediumItalic.woff"
import InterMediumItalicWoff2 from "../fonts/Inter/Inter-MediumItalic.woff2"
import InterSemiboldItalicWoff from "../fonts/Inter/Inter-SemiboldItalic.woff"
import InterSemiboldItalicWoff2 from "../fonts/Inter/Inter-SemiboldItalic.woff2"

const InterNormalWeights = {
  400: [InterRegularWoff, InterRegularWoff2],
  500: [InterMediumWoff, InterMediumWoff2],
  600: [InterSemiboldWoff, InterSemiboldWoff2],
}

const InterItalicWeights = {
  400: [InterRegularItalicWoff, InterRegularItalicWoff2],
  500: [InterMediumItalicWoff, InterMediumItalicWoff2],
  600: [InterSemiboldItalicWoff, InterSemiboldItalicWoff2],
}

const Inter = {
  name: "Inter",
  normal: InterNormalWeights,
  italic: InterItalicWeights,
}

const createFontFaces = (family, style = "normal") => {
  let styles = ""

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0]
    const woff2 = formats[1]

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `
  }

  return styles
}

const InterNormal = createFontFaces(Inter)
const InterItalic = createFontFaces(Inter, "italic")

const Fonts = css`
  ${InterNormal + InterItalic}
`

export default Fonts
