export function validateServiceId(req, res, next, value) {
    // esto lo comprobamos mejor con ObjectID cuando veamos DB
    if (typeof value != "string") {
        throw new Error("el tipo de dato no es válido")
    }
    else next();
}