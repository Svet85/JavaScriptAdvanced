function editElement(element, replaced, replacer) {
    const result = element.textContent.split(replaced);
    const text = result.join(replacer);
    element.textContent = text;
}