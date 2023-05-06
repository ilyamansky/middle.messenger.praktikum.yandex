export const RegularExpressions: Record<string, RegExp> = {
  login: /^[0-9a-zA-Z\-_]{3,}/,
  phone: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/,
  first_name: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
  label_name: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
  second_name: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
  email: /^[^\s@]+@[^\s@]+\.[\S]{2,}$/,
  message: /.+/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
};

export function validate(value: string, regEx: RegExp) {
  return !regEx.test(value);
}

export function onFocusin(event: Event) {
  let element = event.target?.name;
  let el = document.querySelector(`[name=${CSS.escape(element)}]`);
  el?.classList.remove("validate-error");
}

export function onFocusout(event: Event, regEx) {
  let value = event.target?.value;
  let element = event.target?.name;
  if (validate(value, regEx)) {
    let el = document.querySelector(`[name=${CSS.escape(element)}]`);
    el?.classList.add("validate-error");
  }
}

export function onSubmit() {
  const inputs = document.querySelectorAll("input");
  const verifiedForm = {};
  for (let input of inputs) {
    if (!input.value || input.className === "validate-error") {
      alert("Заполните форму правильно!");
      break;
    } else {
    let key = input.name;
    verifiedForm[key] = input.value;
  }};
  console.log(verifiedForm); 
}
