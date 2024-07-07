import isMobilePhone from 'validator/lib/isMobilePhone';

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhone = (phone) => {
  // Validate mobile numbers if provided
  if (phone && isMobilePhone(phone, undefined, { strictMode: false })) {
    return true;
  }

  // Fallback: Basic validation for any phone number if provided
  return phone && phone.length >= 5; // Adjust as needed for your specific validation
};

export const validateName = (name) => {
  const re = /^[a-zA-Z\s]+$/;
  return name && name.length > 0 && re.test(name);
};

export const validateMessage = (message) => {
  return message && message.length >= 5;
};
