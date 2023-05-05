import avatar1 from "../../../static/assets/images/avatar1.jpg";
export const data = {
  headerData: {
    headerContent: "Change Profile Info",
  },
  avatarData: {
    src: avatar1,
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
        events: {},
      },

      {
        placeholder: "login",
        type: "text",
        isLabel: true,
        label: "login",
        name: "login",
        events: {},
      },

      {
        placeholder: "first name",
        type: "text",
        isLabel: true,
        label: "first name",
        name: "first_name",
        events: {},
      },
      {
        placeholder: "last name",
        type: "text",
        isLabel: true,
        label: "last name",
        name: "second_name",
        events: {},
      },
      {
        placeholder: "e-mail",
        type: "email",
        isLabel: true,
        label: "e-mail",
        name: "email",
        events: {},
      },
      {
        placeholder: "phone number",
        type: "tel",
        isLabel: true,
        label: "phone",
        name: "phone",
        events: {},
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

    
