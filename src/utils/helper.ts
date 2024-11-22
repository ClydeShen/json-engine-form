// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Func<T = any> = (...args: T[]) => Promise<T> | T
export const pipePromises =
  (...fns: Func[]) =>
  (params?: unknown) =>
    fns.reduce((p, fn) => p.then(fn), Promise.resolve(params))

export const pipe =
  (...fns: Func[]) =>
  (initialValue: unknown) =>
    fns.reduce((result, func) => func(result), initialValue)