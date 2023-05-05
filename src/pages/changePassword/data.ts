import avatar1 from "../../../static/assets/images/avatar1.jpg";
export const data = {
  headerData: {
    headerContent: "Change Password",
  },
  avatarData: {
    url: avatar1,
    class: "img1",
  },
  formData: {
    inputs: [
      {
        placeholder: "old password",
        type: "password",
        isLabel: true,
        label: "password",
        name: "oldPassword",
        events: {}
      },
      {
        placeholder: "new password",
        type: "password",
        isLabel: true,
        label: "password",
        name: "newPassword",
        events: {}
      },
      {
        placeholder: "repeat new password",
        type: "password",
        isLabel: true,
        label: "password",
        name: "newPasswordAgain",
        events: {}
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
