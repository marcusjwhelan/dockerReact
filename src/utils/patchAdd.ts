export interface IPatch {
  op: TPatch
  path: string
  value: any
}

export type TPatch = 'test' | 'remove' | 'add' | 'replace' | 'move' | 'copy'

export default (path: string, value: any, op: TPatch = 'replace', patch: IPatch[]) => {
  patch.push({op, path, value})
}