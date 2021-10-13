export function scopeClass(scope:string) {
    return function blockClass(name:string) {
        return `${scope}${name===''?'':'-'+name}`
    }
}