const styles = {
  container: {
    padding: 20,
    borderTop: "1px #4C758F solid",
    marginBottom: 20
  },
  form: {
    display: "flex"
  },
  input: {
    color: "inherit",
    background: "none",
    outline: "none",
    border: "none",
    flex: 1,
    fontSize: 16
  },
  getEmojiButton: {
    cssFloat: "right",
    border: "none",
    margin: 0,
    cursor: "pointer"
  },
  emojiPicker: {
    position: "absolute",
    bottom: 0,
    right: 0,
    cssFloat: "right",
    marginLeft: "200px"
  }
};
const customEmojis = [
  {
    name: "Octocat",
    short_names: ["octocat"],
    text: "",
    emoticons: [],
    keywords: ["github"],
    imageUrl: "https://assets-cdn.github.com/images/icons/emoji/octocat.png?v7"
  }
];
