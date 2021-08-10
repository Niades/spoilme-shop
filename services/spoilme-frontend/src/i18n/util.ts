function getI18nizedField(obj: any, fieldName: string, locale: string): any {
  return obj[`${fieldName}_${locale.toLowerCase()}`];
};

export {
  getI18nizedField,
};