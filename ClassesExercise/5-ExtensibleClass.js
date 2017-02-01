let Extensible = (function () {
    let uniqueId = 0;

    return class Extensible {
        constructor() {
            this.id = uniqueId++;
        }

        extend(template) {
            for (let temp in template) {
                if (template.hasOwnProperty(temp)) {
                    if (typeof template[temp] == 'function') {
                        Extensible.prototype[temp] = template[temp];
                    } else {
                        this[temp] = template[temp];
                    }
                }
            }
        }
    }
})();
