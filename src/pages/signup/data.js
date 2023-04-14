export const data = {
  headerData: {
    headerContent: "Sign Up",
  },

  formData: {
    inputs: [
      {
        placeholder: "first name",
        type: "text",
        isLabel: true,
        label: "first name",
        name: "first_name",
      },

      {
        placeholder: "last name",
        type: "text",
        isLabel: true,
        label: "last name",
        name: "second_name",
      },

      {
        placeholder: "e-mail",
        type: "email",
        isLabel: true,
        label: "e-mail",
        name: "email",
      },

      {
        placeholder: "phone number",
        type: "tel",
        isLabel: true,
        label: "phone",
        name: "phone",
      },

      {
        placeholder: "password",
        type: "password",
        isLabel: true,
        label: "password",
        name: "password",
      },

      {
        placeholder: "password (again)",
        type: "password",
        isLabel: true,
        label: "password",
        name: "password",
      },
    ],
  },
  buttonData: {
    buttonContent: "Sign up",
    type: "submit",
  },
  footerData: {
    footerContent: "Have a profile?",
    isFooter: true,
    linkUrl: "https://ya.ru",
    linkContent: "Sign In",
  }
};
