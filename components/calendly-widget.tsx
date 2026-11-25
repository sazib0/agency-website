"use client"

import { PopupWidget } from "react-calendly"

interface CalendlyWidgetProps {
  url: string
}

export function CalendlyWidget({ url }: CalendlyWidgetProps) {
  return (
    <PopupWidget
      url={url}
      rootElement={document.getElementById("__next") as HTMLElement}
      text="Schedule Meeting"
      textColor="#ffffff"
      color="#0066ff"
    />
  )
} 