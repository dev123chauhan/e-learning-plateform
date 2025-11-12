export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return { isValid: false, error: "Email is required" };
  }
  if (!emailRegex.test(email)) {
    return { isValid: false, error: "Please enter a valid email address" };
  }
  return { isValid: true, error: "" };
};

export const validatePassword = (password) => {
  if (!password) {
    return { isValid: false, error: "Password is required" };
  }
  if (password.length < 8) {
    return { isValid: false, error: "Password must be at least 8 characters long" };
  }
  if (!/[A-Za-z]/.test(password)) {
    return { isValid: false, error: "Password must contain at least one letter" };
  }
  if (!/\d/.test(password)) {
    return { isValid: false, error: "Password must contain at least one number" };
  }
  return { isValid: true, error: "" };
};

export const validateName = (name) => {
  if (!name || !name.trim()) {
    return { isValid: false, error: "Name is required" };
  }
  if (name.trim().length < 2) {
    return { isValid: false, error: "Name must be at least 2 characters long" };
  }
  if (name.trim().length > 50) {
    return { isValid: false, error: "Name must not exceed 50 characters" };
  }
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return { isValid: false, error: "Name can only contain letters and spaces" };
  }
  return { isValid: true, error: "" };
};

export const validateMessage = (message) => {
  if (!message || !message.trim()) {
    return { isValid: false, error: "Message is required" };
  }
  if (message.trim().length < 10) {
    return { isValid: false, error: "Message must be at least 10 characters long" };
  }
  if (message.trim().length > 500) {
    return { isValid: false, error: "Message must not exceed 500 characters" };
  }
  return { isValid: true, error: "" };
};

export const validateLoginForm = (email, password) => {
  const errors = {};
  
  const emailValidation = validateEmail(email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error;
  }
  
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) {
    errors.password = passwordValidation.error;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateRegisterForm = (name, email, password) => {
  const errors = {};
  
  const nameValidation = validateName(name);
  if (!nameValidation.isValid) {
    errors.name = nameValidation.error;
  }
  
  const emailValidation = validateEmail(email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error;
  }
  
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) {
    errors.password = passwordValidation.error;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateContactForm = (name, email, message) => {
  const errors = {};
  
  const nameValidation = validateName(name);
  if (!nameValidation.isValid) {
    errors.name = nameValidation.error;
  }
  
  const emailValidation = validateEmail(email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error;
  }
  
  const messageValidation = validateMessage(message);
  if (!messageValidation.isValid) {
    errors.message = messageValidation.error;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const getFieldError = (fieldName, value) => {
  switch (fieldName) {
    case 'email':
      return validateEmail(value).error;
    case 'password':
      return validatePassword(value).error;
    case 'name':
      return validateName(value).error;
    case 'message':
      return validateMessage(value).error;
    case 'firstName':
      return validateFirstName(value).error;
    case 'lastName':
      return validateLastName(value).error;
    case 'duration':
      return validateDuration(value).error;
    default:
      return '';
  }
};

export const isEmpty = (value) => {
  return !value || !value.trim();
};

export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

export const validateFirstName = (firstName) => {
  if (!firstName || !firstName.trim()) {
    return { isValid: false, error: "First name is required" };
  }
  if (firstName.trim().length < 2) {
    return { isValid: false, error: "First name must be at least 2 characters long" };
  }
  if (firstName.trim().length > 30) {
    return { isValid: false, error: "First name must not exceed 30 characters" };
  }
  if (!/^[a-zA-Z\s]+$/.test(firstName)) {
    return { isValid: false, error: "First name can only contain letters and spaces" };
  }
  return { isValid: true, error: "" };
};

export const validateLastName = (lastName) => {
  if (!lastName || !lastName.trim()) {
    return { isValid: false, error: "Last name is required" };
  }
  if (lastName.trim().length < 2) {
    return { isValid: false, error: "Last name must be at least 2 characters long" };
  }
  if (lastName.trim().length > 30) {
    return { isValid: false, error: "Last name must not exceed 30 characters" };
  }
  if (!/^[a-zA-Z\s]+$/.test(lastName)) {
    return { isValid: false, error: "Last name can only contain letters and spaces" };
  }
  return { isValid: true, error: "" };
};

export const validateDuration = (duration) => {
  if (!duration || !duration.trim()) {
    return { isValid: false, error: "Course duration is required" };
  }
  if (duration.trim().length < 2) {
    return { isValid: false, error: "Duration must be at least 2 characters long" };
  }
  if (duration.trim().length > 50) {
    return { isValid: false, error: "Duration must not exceed 50 characters" };
  }
  return { isValid: true, error: "" };
};

export const validateEnrollmentForm = (firstName, lastName, email, duration) => {
  const errors = {};
  
  const firstNameValidation = validateFirstName(firstName);
  if (!firstNameValidation.isValid) {
    errors.firstName = firstNameValidation.error;
  }
  
  const lastNameValidation = validateLastName(lastName);
  if (!lastNameValidation.isValid) {
    errors.lastName = lastNameValidation.error;
  }
  
  const emailValidation = validateEmail(email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error;
  }
  
  const durationValidation = validateDuration(duration);
  if (!durationValidation.isValid) {
    errors.duration = durationValidation.error;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};