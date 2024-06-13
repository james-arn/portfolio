const BRAND_COLOURS = {
    MAIN: "#00aaa8",
    SECONDARY: "#413c58",
    ERROR: '#303235'
}

export const chatbotTheme = {
    button: {
      backgroundColor: '',
    //   right: 20,
    //   bottom: 20,
      size: 86, // small | medium | large | number
      dragAndDrop: false,
      iconColor: "white",
      customIconSrc: "https://github.com/james-arn/portfolio/blob/main/images/headshot-crop-light-blue.png?raw=true",
    },
    chatWindow: {
      showTitle: true,
      title: 'James AI',
      titleAvatarSrc: 'https://github.com/james-arn/portfolio/blob/main/images/headshot-crop-light-blue.png?raw=true',
      welcomeMessage: "Hey there, I'm James AI! Ask me any professional questions and get immediate answers.",
      errorMessage: "Ooops, there's been an error",
      backgroundColor: "#ffffff",
    //   height: 700,
    //   width: 400,
    //   fontSize: 16,
      fontWeight: 400,
      poweredByTextColor: "#303235",
      botMessage: {
        backgroundColor: "#f7f8ff",
        textColor: "#303235",
        showAvatar: true,
        avatarSrc: "https://github.com/james-arn/portfolio/blob/main/images/headshot-crop-light-blue.png?raw=true",
      },
      userMessage: {
        backgroundColor: BRAND_COLOURS.SECONDARY,
        textColor: "#ffffff",
        showAvatar: true,
        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
      },
      textInput: {
        placeholder: 'Ask me a question',
        backgroundColor: '#ffffff',
        textColor: '#303235',
        sendButtonColor: BRAND_COLOURS.SECONDARY,
        maxChars: 200,
        maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 200 characters.',
      },
      feedback: {
        color: BRAND_COLOURS.ERROR,
      },
      footer: {
        textColor: '#303235',
        text: '',
        company: '',
        companyLink: '',
      }
    }
  }