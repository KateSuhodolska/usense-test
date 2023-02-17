const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

export const isEmail = (value: string) => {
  return EMAIL_REGEX.test(value);
};

export const getPasswordStrength = (password: string) => {
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSymbols = /[^a-zA-Z0-9]/.test(password);

  if (hasLetters && hasNumbers && hasSymbols) {
    return "strong";
  } else if (
    (hasLetters && (hasNumbers || hasSymbols)) ||
    (hasNumbers && hasSymbols)
  ) {
    return "medium";
  } else if (hasLetters || hasNumbers || hasSymbols) {
    return "easy";
  } else {
    return "empty";
  }
};

export const linearProgress = (password: string) => {
  const strength = getPasswordStrength(password);
  switch (strength) {
    case "easy":
      return ["red", "grey", "grey"];
    case "medium":
      return ["yellow", "yellow", "grey"];
    case "strong":
      return ["green", "green", "green"];
    default:
      return ["grey", "grey", "grey"];
  }
};
