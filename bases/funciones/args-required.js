"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('Nombre requerido');
        }
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
//# sourceMappingURL=args-required.js.map