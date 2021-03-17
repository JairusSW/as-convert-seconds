export function convertSeconds (seconds: string): Array<number> {

  let format = parseInt(seconds, 10)

  if (isNaN(format)) return [0, 0, 0]

  return [Math.floor((format / 60) / 60), Math.floor((format / 60) % 60), Math.floor(format % 60)]

}