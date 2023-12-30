"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classDefault = void 0;
/**
 * Allows you to add default classes to components or use a new one and add new classes.
 *
 * @param className Class. if the `default` class is used, the default class is used.
 * @param addClass Add class.
 * @param classDefaultText Default class.
 * @returns Text result of the combination of classes.
 */
const classDefault = (className, addClass, classDefaultText) => {
    let classReturn;
    if (className !== undefined) {
        if (className === "default") {
            classReturn = classDefaultText;
        }
        else {
            classReturn = className;
        }
    }
    if (addClass !== undefined) {
        if (classReturn !== undefined) {
            classReturn = `${classReturn} ${addClass}`;
        }
        else {
            classReturn = addClass;
        }
    }
    return classReturn;
};
exports.classDefault = classDefault;
