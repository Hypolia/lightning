import {Token} from '@lightning/board/filter/logic'
import {Prop, SymbContract} from '@lightning/board/filter/types'

export class TokenSelect<T> extends Token<T> {
  constructor(prop: Prop, data: T) {
    super(prop, data)
    if (prop.kind !== 'symb' || prop.data.type !== 'select') {
      console.log("ERROR")
    }
  }

  public contains (): boolean {
    const data = this.getData()
    const prop = this.getProp() as SymbContract
    const value: string[] = data[prop.data.field as keyof T] as string[]

    return value.includes(prop.data.value)
  }

  public notContains (): boolean {
    return !this.contains()
  }

  public evaluate(): boolean {
    const prop = this.getProp() as SymbContract

    switch (prop.data.operator) {
      case "contains":
        return this.contains()
      case "not contains":
        return this.notContains()
      default:
        return false
    }
  }
}
