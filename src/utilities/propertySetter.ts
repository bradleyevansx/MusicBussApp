export function findPropertyByValueAndChange<T>(
  entity: T,
  newValue: string,
  oldValue: string
): T | null {
  if (oldValue === newValue) {
    return null;
  }

  let propertyName: keyof T | null = null;

  for (const key in entity) {
    if (typeof key === "string") {
      if (entity[key as keyof T] === oldValue) {
        propertyName = key as keyof T;
        break;
      }
    }
  }

  if (propertyName !== null) {
    return {
      ...entity,
      [propertyName]: newValue,
    };
  } else {
    return null;
  }
}
