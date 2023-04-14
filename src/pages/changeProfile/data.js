import avatar1 from "../../../static/assets/images/avatar1.jpg";
export const data = {
  headerData: {
    headerContent: "Change Profile Info",
  },
  avatarData: {
    url: avatar1,
    class: "img1",
  },
  formData: {
    inputs: [
      {
        placeholder: "chat name",
        type: "text",
        isLabel: true,
        label: "chat name",
        name: "display_name",
      },

      {
        placeholder: "login",
        type: "text",
        isLabel: true,
        label: "login",
        name: "login",
      },

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
    ],
  },
  buttonData: {
    buttonContent: "Save changes",
    type: "submit",
  },
  footerData: {
    footerContent: "Go back to Profile",
    isFooter: true,
    linkUrl: "https://ya.ru",
    linkContent: "go to Profile",
  }
};

    
