export const validateName = (name: string) => {
  const nameRegex = /^\S{2,20}$/;
  return nameRegex.test(name);
};
export const validateEmail = (email: string) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};
export const validatePassword = (password: string) => {
  const passwordRegex = /^\S{10,20}$/;
  return passwordRegex.test(password);
};
export const validateBusinessNumber = (businessNumber: string) => {
  const businessNumberRegex = /^\d{10}$/;
  return businessNumberRegex.test(businessNumber);
};
