// src/errors.js
const ERROR_CODES = {
    PRODUCT_NOT_FOUND: 'PRODUCT_NOT_FOUND',
    CART_NOT_FOUND: 'CART_NOT_FOUND',
    INVALID_PRODUCT_DATA: 'INVALID_PRODUCT_DATA',
    INVALID_CART_DATA: 'INVALID_CART_DATA',
    // Puedes agregar más errores según sea necesario
};

const ERROR_MESSAGES = {
    PRODUCT_NOT_FOUND: 'Producto no encontrado',
    CART_NOT_FOUND: 'Carrito no encontrado',
    INVALID_PRODUCT_DATA: 'Datos de producto inválidos',
    INVALID_CART_DATA: 'Datos de carrito inválidos',
    // Puedes agregar más mensajes según sea necesario
};

class CustomError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}

module.exports = {
    ERROR_CODES,
    ERROR_MESSAGES,
    CustomError
};
