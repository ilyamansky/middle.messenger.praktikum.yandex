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
        placeholder: "first name",
        type: "text",
        isLabel: true,
        label: "first name"
      },
      {
        placeholder: "last name",
        type: "text",
        isLabel: true,
        label: "last name"
      },
      {
        placeholder: "e-mail",
        type: "email",
        isLabel: true,
        label: "e-mail"
      },
      {
        placeholder: "phone number",
        type: "tel",
        isLabel: true,
        label: "phone"
      }, 
    ],
  },
  buttonData: {
    buttonContent: "Save changes",
  },
  footerData: {
    footerContent: "Go back to Profile",
    isFooter: true,
    linkUrl: "https://ya.ru",
    linkContent: "go to Profile",
  }
};

    
