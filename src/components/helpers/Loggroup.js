export const logGroup =(content, title) => {
    console.group("content")
    console.log(title)
    console.groupEnd()
}