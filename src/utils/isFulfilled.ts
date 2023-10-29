export default function isFulfilled<T>(
  promise: PromiseSettledResult<T>
): promise is PromiseFulfilledResult<T> {
  return promise.status === 'fulfilled';
}
