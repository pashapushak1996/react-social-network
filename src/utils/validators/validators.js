export const required = (value) => {
    if (value) return undefined;
    return 'Field is required'
}


export const maxLength = (maxLength) => (value) => value && value.length > maxLength ? `Max length ${maxLength}` : undefined