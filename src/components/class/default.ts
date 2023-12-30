import type { ClassDefaultType } from "./default.type";

/**
 * Allows you to add default classes to components or use a new one and add new classes.
 *
 * @param className Class. if the `default` class is used, the default class is used.
 * @param addClass Add class.
 * @param classDefaultText Default class.
 * @returns Text result of the combination of classes.
 */
export const classDefault: ClassDefaultType = (
  className,
  addClass,
  classDefaultText
) => {
  let classReturn: string | undefined;

  if (className !== undefined) {
    if (className === "default") {
      classReturn = classDefaultText;
    } else {
      classReturn = className;
    }
  }

  if (addClass !== undefined) {
    if (classReturn !== undefined) {
      classReturn = `${classReturn} ${addClass}`;
    } else {
      classReturn = addClass;
    }
  }

  return classReturn;
};
