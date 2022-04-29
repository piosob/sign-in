export const validation = (values) => {
  const errors = {};
  if (values.username.length < 2) {
    errors.username = 'login must be longer than 2 letters!'
  }
  if (values.password.length < 4) {
    errors.password = 'password must be longer than 4 letters!'
  }

  if (Object.values(errors).length > 0) return errors
  else return null;
}