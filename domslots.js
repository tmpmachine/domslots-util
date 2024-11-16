function DOMSlots(parentNode) {
    let slots = {};
    parentNode.querySelectorAll('[data-slot]').forEach(node => {
        let key = node.dataset.slot;
        
        if (slots[key]) return;
        
        slots[key] = node;
    });
    return slots
}