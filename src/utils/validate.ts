type FormValidationDataType = {
  formData: FormData;
}
type FormData = {
  login: FormValidationFieldsType;
  password: FormValidationFieldsType;
  oldPassword: FormValidationFieldsType;
  newPassword: FormValidationFieldsType;
  phone: FormValidationFieldsType;
  first_name: FormValidationFieldsType;
  second_name: FormValidationFieldsType;
  display_name: FormValidationFieldsType;
  email: FormValidationFieldsType;
}
type FormValidationFieldsType = {
  name: string;
  regEx: RegExp;
  errorMessage: string;
}

export const FormValidationData: FormValidationDataType = {
  formData: {
      login: {
      name: "login",
      regEx: /^[0-9a-zA-Z\-_]{3,}/,
      errorMessage: "от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание).",
    },
    password: {
      name: "password",
      regEx: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
      errorMessage: "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.",
    },
    phone: {
      name: "phone",
      regEx: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/,
      errorMessage: "от 10 до 15 символов, состоит из цифр, может начинается с плюса.",
    },
    first_name: {
      name: "first_name",
      regEx: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
      errorMessage: "латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).",
    },
    second_name: {
      name: "second_name",
      regEx: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
      errorMessage: "латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).",
    },
    display_name: {
      name: "display_name",
      regEx: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
      errorMessage: "латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).",
    },
    email: {
      name: "email",
      regEx: /^[a-z0-9-]+@[a-z0-9-]+.[a-z]{2,6}$/,
      errorMessage: "латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.",
    },
    oldPassword: {
      name: "oldPassword",
      regEx: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
      errorMessage: "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.",
    },
    newPassword: {
      name: "newPassword",
      regEx: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
      errorMessage: "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.",
    },
  },
};

export function validate(value: string, regEx: RegExp) {
  return regEx.test(value);
}

export function onFocusin(event: Event) {
  const element = event.target?.name;
  const el = document.querySelector(`[name=${CSS.escape(element)}]`);
  const elParent = el?.closest("div");
  const elHideDiv = elParent?.children[2];
  elHideDiv?.classList.remove("show-error-message")
}

export function onFocusout(event: Event, regEx: RegExp, errorMessage: string) {
  const value = event.target?.value;
  const element = event.target?.name;
  if (!validate(value, regEx)) {
    const el = document.querySelector(`[name=${CSS.escape(element)}]`);
    const elParent = el?.closest("div");
    const elHideDiv = elParent?.children[2];
    elHideDiv?.classList.add("show-error-message");
    elHideDiv!.textContent = errorMessage;
  }
}

export function onSubmit(event: Event, data: FormData) {
  event.preventDefault();
  const verifiedFormData = {};
  let errorCount = 0;
  const inputs = document.querySelectorAll("input");
  for (const input of inputs) {
    const isValid = validate(input.value, data[input.name].regEx);
    if (!isValid) {
      errorCount++;
    } else {
      verifiedFormData[input.name] = input.value;
    }
  }
  if (!errorCount) {
    console.log(verifiedFormData);
  } else {
    console.log("Форма заполнена неправильно!");
  }
}
