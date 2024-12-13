import { terminal } from "terminal-kit"

export default class TerminalUtil {
  static title(title: string) {
    terminal.clear()
    terminal.magenta(`${title}\n`)
    terminal.magenta(`-`.repeat(title.length) + `\n`)
  }

  static async confirmation(text: string): Promise<boolean> {
    terminal.yellow(`\n${text}`)

    const response = await terminal.singleLineMenu(["Yes", "No"]).promise

    return response.selectedIndex === 0
  }

  static async selection(
    text: string,
    option: string[],
  ): Promise<[number, string]> {
    terminal.yellow(`\n${text}`)

    const response = await terminal.singleLineMenu(option).promise

    return [response.selectedIndex, response.selectedText]
  }

  static async columnMenu(options: string[]): Promise<[number, string]> {
    const response = await terminal.singleColumnMenu(options).promise

    return [response.selectedIndex, response.selectedText]
  }

  static viewKeyValue(key: string, value: string) {
    terminal.yellow(key).green(value).white("\n")
  }

  static async awaitEnter() {
    terminal.white("\nPressione Enter para continuar...")

    await terminal.inputField({ echo: false }).promise
  }

  static async requiredInput(
    label: string,
    defaultValue: string = "",
  ): Promise<string> {
    terminal.yellow(`\n${label}`)
    const content = await terminal.inputField({ default: defaultValue }).promise

    if (content) return content
    return TerminalUtil.requiredInput(label)
  }

  static async success(message: string) {
    terminal.green(`\n${message}`)
  }

  static err(message: string) {
    terminal.red(`\n${message}`)
  }

  static clear() {
    terminal.clear()
  }
}
